import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Brands {
  name: string;
  img: ImageWidget;
}

export interface Props {
  title: string;
  description: string;
  brands: Brands[];
}

const Brands = (props: Props) => {
  const { title, description, brands } = props;
  return (
    <section>
      <div class=""></div>
      <div class="wrapper text-center flex flex-col gap-8 lg:gap-10">
        {description && <p class="text-lg rounded-[40px] text-[#6A5095] border border-solid border-[#6A5095] w-[220px] m-auto">{description}</p>}
        <h2 class="title">{title}</h2>

        <div class="flex gap-3 items-stretch justify-center flex-wrap">
          {brands?.map((brand) => {
            return (
              <div class="max-w-[180px]">
                <Image
                  className="object-cover max-w-[170px] w-auto h-100% rounded-md m-auto"
                  src={brand.img}
                  alt={brand.name}
                  title={brand.name}
                  width={120}
                  height={35}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
