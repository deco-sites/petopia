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
          class={`${props.banner ? 'bg-[#F7F3FE] justify-center h-24' : 'text-3xl  justify-start'} relative flex gap-2 items-center  rounded-md lg:rounded-xl	${
            props.alignment === "left" ? "text-left" : "text-center"
          }`}
        >
          {props.banner && <img loading="lazy" class="h-full absolute left-0 bottom-0" src={props.banner} alt={props.title} />}

          {props.title && (
            <h2
              class={`block ${props.banner ? ' m-auto text-2xl sm:max-w-[180px]' : 'text-3xl'} font-semibold text-[#4f3c70]`}
            >
              {props.title}
            </h2>
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
