import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Category {
  tag?: string;
  label: string;
  description?: string;
  buttonText?: string;
  href?: string;
  image?: ImageWidget;
}

export interface Props {
  header?: {
    title?: string;
    description?: string;
    banner?: ImageWidget;
  };
  list?: Category[];
  layout?: {
    headerAlignment?: "center" | "left";
    gridLayout?: "metro" | "grid";
  };
}

function Card(
  { tag, label, description, image, buttonText, href, layout = "grid", imageSize = "small" }:
    & Category
    & { layout?: "metro" | "grid", imageSize?: "small" | "large" },
) {
  return (
    <a
      class="relative h-auto flex justify-center items-center flex-col gap-4"
      href={href || "#"}
    >
      <Image
        src={image || ""}
        alt={label || ""}
        class={`w-full h-full rounded-md object-center ${imageSize === 'small' ? 'object-scale-down object-right' : 'object-cover'}`}
        width={100}
        height={100}
      />
      {tag && <div class="badge text-white bg-red-500">{tag}</div>}
      <div
        class={`lg:p-8 w-full h-full top-0 left-0 flex flex-col`}
      >
        {label &&
          <h3 class="text-sm text-center md:text-lg text-[#4F3C70]">{label}</h3>}
        {description && (
          <p class=" text-sm text-center md:text-lg	text-[#4F3C70]">{description}</p>
        )}
        {buttonText && (
          <div class="flex justify-start mt-4">
            <span class="text-sm md:text-lg	text-neutral-50 underline">
              {buttonText}
            </span>
          </div>
        )}
      </div>
    </a>
  );
}

function CategoryGrid(props: Props) {
  const id = useId();
  const {
    header = {
      title: "",
      banner: "https://ik.imagekit.io/decocx/tr:w-680,h-680/https:/ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fdcb3c8f-d629-485e-bf70-8060bd8a9f65"
    },
    list = [
      {
        tag: "10% off",
        label: "Feminino",
        href: "/feminino",
        image:
          "https://ik.imagekit.io/decocx/tr:w-680,h-680/https:/ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fdcb3c8f-d629-485e-bf70-8060bd8a9f65",
        buttonText: "Ver produtos",
      },
    ],
    layout = {
      headerAlignment: "center",
      gridLayout: "grid",
    },
  } = props;

  return (
    <div class="">
      <div
        id={id}
        class="container px-4 py-7 flex flex-col gap-8 lg:gap-10 md:px-0 lg:py-10"
      >
        <Header
          title={header.title}
          description={header.description || ""}
          alignment={layout.headerAlignment || "center"}
          fontSize="Normal"
          banner={header.banner}
        />

        {layout.gridLayout === "metro"
          ? (
            <div class="grid grid-rows-5 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-2 gap-8">
              {list.map((item, index) => {
                const isBig = (index + 1) % 4 === 1;
                const isMedium = (index + 1) % 4 === 2;
                return (
                  (
                    <div
                      class={`${
                        isBig
                          ? "row-span-2 max-h-[600px]"
                          : isMedium
                          ? "md:col-span-2  md:h-auto max-h-[284px]"
                          : " md:h-auto max-h-[284px]"
                      }`}
                    >
                      <Card
                        href={item.href}
                        image={item.image}
                        tag={item.tag}
                        label={item.label}
                        description={item.description}
                        buttonText={item.buttonText}
                        layout="metro"
                        imageSize={isBig ? "large" : "small"}
                      />
                    </div>
                  )
                );
              })}
            </div>
          )
          : (
            <div class="flex gap-2">
              {list.map((item) => (
                <div class="">
                  <Card
                    href={item.href}
                    image={item.image}
                    tag={item.tag}
                    label={item.label}
                  />
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}

export default CategoryGrid;
