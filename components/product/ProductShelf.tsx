import { SendEventOnLoad } from "$store/components/Analytics.tsx";
import ProductCard, {
  Layout as cardLayout,
} from "$store/components/product/ProductCard.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { Product } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  products: Product[] | null;
  title?: string;
  description?: string;
  banner?: ImageWidget,
  layout?: {
    headerAlignment?: "center" | "left";
    headerfontSize?: "Normal" | "Large";
  };
  cardLayout?: cardLayout;
}

function ProductShelf({
  products,
  title,
  description,
  banner,
  layout,
  cardLayout,
}: Props) {
  const id = useId();
  const platform = usePlatform();

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div class="wrapper flex flex-col gap-4 text-white">

      <h2 class="title text-left">
        {title}
      </h2>

      <div
        id={id}
        class="grid grid-cols-[48px_1fr_48px]"
      >
        <Slider class="carousel carousel-center sm:carousel-end gap-6 col-span-full row-start-2 row-end-5">
          {products?.map((product, index) => (
            <Slider.Item
              index={index}
              class="carousel-item w-[270px] sm:w-[292px] first:pl-6 rounded-[10px] sm:first:pl-0 last:pr-6 sm:last:pr-0 border border-solid border-[#B086F8]"
            >
              <ProductCard
                product={product}
                itemListName={title}
                layout={cardLayout}
                platform={platform}
              />
            </Slider.Item>
          ))}
        </Slider>

        <>
          <div class="hidden relative sm:block z-10 col-start-1 row-start-3">
            <Slider.PrevButton class="btn btn-circle bg-[#6a5095] hover:bg-[#f7f3fe] text-white hover:text-[#6a5095] border-none absolute right-1/2">
              <Icon size={24} id="ChevronLeft" strokeWidth={3} />
            </Slider.PrevButton>
          </div>
          <div class="hidden relative sm:block z-10 col-start-3 row-start-3">
            <Slider.NextButton class="btn btn-circle bg-[#6a5095] hover:bg-[#f7f3fe] text-white hover:text-[#6a5095] border-none absolute left-1/2">
              <Icon size={24} id="ChevronRight" strokeWidth={3} />
            </Slider.NextButton>
          </div>
        </>
        <SliderJS rootId={id} />
        <SendEventOnLoad
          event={{
            name: "view_item_list",
            params: {
              item_list_name: title,
              items: products.map((product) =>
                mapProductToAnalyticsItem({
                  product,
                  ...(useOffer(product.offers)),
                })
              ),
            },
          }}
        />
      </div>
    </div>
  );
}

export default ProductShelf;
