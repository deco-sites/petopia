import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface CategoryProps {
  tag?: string;
  label: string;
  description?: string;
  buttonText?: string;
  href?: string;
  image?: ImageWidget;
}

export interface CategoryGridProps {
  header?: {
    title?: string;
    description?: string;
    banner?: ImageWidget;
  };
  list?: CategoryProps[];
  layout?: {
    headerAlignment?: "center" | "left";
    gridLayout?: "metro" | "grid";
  };
}

export interface CategorySectionProps {
  title: string;
  categoryGrid: CategoryGridProps[];
}

function Card({
  tag,
  label,
  description,
  image,
  buttonText,
  href,
  layout = "grid",
  imageSize = "small",
}: CategoryProps & {
  layout?: "metro" | "grid";
  imageSize?: "small" | "large";
}) {
  return (
    <a
      class="relative h-auto flex justify-center items-center flex-col gap-4"
      href={href || "#"}
    >
      <Image
        src={image || ""}
        alt={label || ""}
        class={`w-full h-full rounded-md object-center ${
          imageSize === "small"
            ? "object-scale-down object-right"
            : "object-cover"
        }`}
        width={100}
        height={100}
      />
      {tag && <div class="badge text-white bg-red-500">{tag}</div>}
      <div class={`w-full h-full top-0 left-0 flex flex-col`}>
        {label && (
          <h3 class="text-sm text-center md:text-lg lg:text-sm text-[#4F3C70]">{label}</h3>
        )}
        {description && (
          <p class=" text-sm text-center md:text-lg lg:text-sm	text-[#4F3C70]">
            {description}
          </p>
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

function CategoryGrid(props: CategoryGridProps) {
  const {
    header = {
      title: "",
      banner:
        "https://ik.imagekit.io/decocx/tr:w-680,h-680/https:/ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fdcb3c8f-d629-485e-bf70-8060bd8a9f65",
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
    <div class="px-4 w-full flex flex-col gap-8 lg:gap-10 md:px-0 lg:w-1/2">
      <Header
        title={header.title}
        description={header.description || ""}
        alignment={layout.headerAlignment || "center"}
        fontSize="Normal"
        banner={header.banner}
      />

      <div class="flex gap-8">
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
    </div>
  );
}

function CategorySection(props: CategorySectionProps) {
  const { title, categoryGrid } = props;

  return (
    <section>
      <div class="container py-7">
        <h2 class="blocktext-3xl mb-5 text-3xl py-w text-center font-semibold text-[#4f3c70]">{title}</h2>
        <div class="flex flex-col gap-10 lg:flex-row">
          {categoryGrid.map((item, index) => {
            return <CategoryGrid {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
