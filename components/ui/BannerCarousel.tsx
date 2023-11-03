import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

/**
 * @titleBy alt
 */
export interface Banner {
  /** @description desktop otimized image */
  desktop: ImageWidget;
  /** @description mobile otimized image */
  mobile: ImageWidget;
  /** @description Image's alt text */
  alt: string;
  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
    /** @description Image text title */
    title: string;
    /** @description Image text subtitle */
    subTitle: string;
    /** @description Button label */
    label: string;
  };
}

export interface Props {
  images?: Banner[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

const DEFAULT_PROPS = {
  images: [
    {
      alt: "/feminino",
      action: {
        href: "https://www.deco.cx/",
        label: "deco.cx",
        title: "Demo Store",
        subTitle: "Visit our site and start building now:",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/24278f9e-412d-4a8a-b2d3-57353bb1b368",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/afa2c07c-74f4-496d-8647-5cc58f48117b",
    },
    {
      alt: "/feminino",
      action: {
        href: "https://www.deco.cx/",
        label: "deco.cx",
        title: "Demo Store",
        subTitle: "Visit our site and start building now:",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/eeaa624c-a3e1-45e8-a6fe-034233cfbcd0",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7949d031-9a79-4639-b85e-62fd90af85a9",
    },
    {
      alt: "/feminino",
      action: {
        href: "https://www.deco.cx/",
        label: "deco.cx",
        title: "Demo Store",
        subTitle: "Visit our site and start building now:",
      },
      mobile:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/ae89571c-4a7c-44bf-9aeb-a341fd049d19",
      desktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7ec121e4-5cfe-4b7b-b942-d1ed4493803d",
    },
  ],
  preload: true,
};

function BannerItem({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const {
    alt,
    mobile,
    desktop,
    action,
  } = image;

  return (
    <div
      href={action?.href ?? "#"}
      aria-label={action?.label}
      class="relative h-auto overflow-y-hidden w-full"
    >
      <Picture preload={lcp}>
        <Source
          media="(max-width: 767px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={mobile}
          width={398}
          height={220}
        />
        <Source
          fetchPriority={lcp ? "high" : "auto"}
          src={desktop}
          width={398}
          height={220}
        />
        <img
          class="object-cover w-[95%] m-auto h-full rounded-md"
          loading={lcp ? "eager" : "lazy"}
          width={398}
          height={220}
          src={desktop}
          alt={alt}
        />
      </Picture>
      {action && (
        <div class="absolute h-min top-0 bottom-0 m-auto opacity-0 left-0 right-0 sm:right-auto sm:left-[12%] max-h-min max-w-[235px] lg:max-w-[380px] flex flex-col gap-4 p-4 items-center justify-center">
          <span class="font-medium text-xl text-base-100">
            {action.subTitle}
          </span>
          <span class="text-6xl font-medium text-base-100">
            {action.title}
          </span>
          <a
            href={action.href}
            class="underline text-xl text-white underline-offset-8 flex items-center gap-2"
          >
            {action.label}
            <Icon
              id="ArrowRight"
              width={24}
              height={24}
              class="stroke-current"
            />
          </a>
        </div>
      )}
    </div>
  );
}

function Dots({ images, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel justify-center col-span-full gap-4 z-10 row-start-4">
        {images?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-2 h-2 rounded-full group-disabled:h3 group-disabled:w-3 group-disabled:bg-[#4F3C70] bg-[#6A5095]"
                  style={{ animationDuration: `${interval}s` }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <>
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="btn btn-circle glass">
          <Icon
            class="text-base-100"
            size={24}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="btn btn-circle glass">
          <Icon
            class="text-base-100"
            size={24}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

function BannerCarousel(props: Props) {
  const { images, preload, interval } = { ...DEFAULT_PROPS, ...props };

  const id = useId();

  return (
    <div
      id={id}
      class="flex flex-col mt-7"
    >
      <Slider class="carousel carousel-center ol-span-full row-span-full gap-6">
        {images?.map((image, index) => (
          <Slider.Item index={index} class="carousel-item w-full">
            <BannerItem image={image} lcp={index === 0 && preload} />
          </Slider.Item>
        ))}
      </Slider>

      <Dots images={images} interval={interval} />

      <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
    </div>
  );
}

export default BannerCarousel;
