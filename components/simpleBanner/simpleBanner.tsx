import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { useId } from "deco-sites/petopia/sdk/useId.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import { search } from "https://deno.land/x/inspect_vscode@0.2.1/search.ts";

export interface Props {
  /** @description desktop otimized image */
  desktop: ImageWidget;
  /** @description mobile otimized image */
  mobile: ImageWidget;
  /** @description Image's alt text */
  alt?: string;
  /** @description # */
  link: string;
}

const simpleBanner = (props: Props) => {
  const { desktop, mobile, alt, link } = props;
  return (
    <section id={useId()} class="container">
      <a href={link} class="text-center px-4 py-7">
        <Picture class="object-cover px-4 w-full m-auto h-full rounded-md lg:rounded-xl">
          <Source
            class="object-cover px-4 w-full m-auto h-full rounded-md lg:rounded-xl"
            media="(max-width: 767px)"
            fetchPriority={"auto"}
            src={mobile}
            width={398}
            height={220}
          />
          <Source
            class="object-cover px-4 w-full m-auto h-full rounded-md lg:rounded-xl"
            fetchPriority={"auto"}
            src={desktop}
            width={1200}
            height={300}
          />
          <img
            class="object-cover px-4 w-full m-auto h-full rounded-md lg:rounded-xl"
            loading={"lazy"}
            width={398}
            height={220}
            src={desktop}
            alt={alt}
          />
        </Picture>
      </a>
    </section>
  );
};

export default simpleBanner;
