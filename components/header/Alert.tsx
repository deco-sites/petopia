import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Alert {
  icon?: AvailableIcons;
  message: string
}

export interface Props {
  alerts: Alert[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;

}

function Alert({ alerts = [], interval = 5 }: Props) {
  const id = useId();

  return (
    <div id={id} className="bg-[#ececec]">
      <Slider class="carousel flex items-center carousel-center w-screen bg-[#ececec] gap-6">
        {alerts.map((item, index) => (
          <Slider.Item index={index} class="carousel-item flex items-center justify-center w-full">
            <Icon
              id={item.icon ? item.icon : "Truck"}
              class={"text-[#373737]"}
              width={36}
              height={36}
              strokeWidth={0.01}
              fill="currentColor"
              stroke="currentColor"
            />
            <span class="text-sm text-[#373737] flex justify-center items-center h-[38px] px-4">
              {item?.message}
            </span>
          </Slider.Item>
        ))}
      </Slider>

      <SliderJS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default Alert;
