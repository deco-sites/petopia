import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { useId } from "deco-sites/petopia/sdk/useId.ts";

export interface Props {
  src: ImageWidget;
  title?: string;
  alt?: string;
}

const simpleBanner = (props: Props) => {
  const { src, title, alt } = props;
  return (
    <section id={useId()}>
      <div class="container text-center px-4 py-7">
        <Image
          className="object-cover max-w-[1024px] w-full h-auto rounded-md m-auto"
          src={src}
          alt={alt}
          title={title}
          width={630}
          height={370}
        />
      </div>
    </section>
  );
};

export default simpleBanner;
