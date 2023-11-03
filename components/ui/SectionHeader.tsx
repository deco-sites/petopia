import type { ImageWidget } from "apps/admin/widgets.ts";


interface Props {
  title?: string;
  fontSize?: "Normal" | "Large";
  description?: string;
  alignment: "center" | "left";
  colorReverse?: boolean;
  banner?: ImageWidget
}

function Header(props: Props) {
  return (
    <>
      {props.title || props.description ? (
        <div
          class={`bg-[#F7F3FE] relative flex gap-2 items-center justify-center rounded-md h-24	${
            props.alignment === "left" ? "text-left" : "text-center"
          }`}
        >
          {props.banner && <img loading="lazy" class="h-full absolute left-0 bottom-0 scale-[1.3]	translate-y-[-16%]" src={props.banner} alt={props.title} />}

          {props.title && (
            <h1
              class={`block m-auto text-2xl max-w-[180px] font-semibold text-[#4f3c70]`}
            >
              {props.title}
            </h1>
          )}
          {props.description && (
            <p
              class={`
                  leading-6 lg:leading-8 text-white font-semibold
                  ${
                    props.colorReverse ? "text-primary-content" : "text-neutral"
                  }
                  ${
                    props.fontSize === "Normal"
                      ? "text-xl lg:text-4xl"
                      : "text-2xl lg:text-5xl"
                  }
                `}
            >
              {props.description}
            </p>
          )}
        </div>
      ) : null}
    </>
  );
}

export default Header;
