import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  title?: string;
  description?: string;
  banner?: ImageWidget;
  benefits?: Array<{
    label: string;
    icon: AvailableIcons;
    description: string;
  }>;
  layout?: {
    variation?: "Simple" | "With border" | "Color reverse";
    headerAlignment?: "center" | "left";
  };
}

export default function Benefits(props: Props) {
  const {
    title = "",
    description = "",
    benefits = [
      {
        icon: "Truck",
        label: "Frete Grátis",
        description: "Consulte o prazo no fechamento da compra.",
      },
      {
        icon: "Discount",
        label: "15% na primeira compra",
        description: "Aplicado direto na sacola de compras.",
      },
      {
        icon: "ArrowsPointingOut",
        label: "Devolução grátis",
        description: "Veja as condições para devolver seu produto.",
      },
    ],
    layout,
  } = props;

  const listOfBenefits = benefits.map((benefit, index) => {
    return (
      <div class="bg-[#F7F3FE] p-8 rounded-md flex flex-col items-center justify-center">
        <div class="m-auto">
          <Icon
            id={benefit.icon}
            class="text-[#3E2F57] flex items-center justify-center"
            width={40}
            height={36}
            strokeWidth={0.01}
            fill="currentColor"
            stroke="currentColor"
          />
        </div>
        <div class="fgrid grid-cols-2 grid-rows-2 gap-4">
          <div class="text-base lg:text-xl leading-7 flex items-center text-[#4F3C70] text-center min-h-[60px]">
            {benefit.label}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div class="w-full container px-4 py-12 flex flex-col gap-8 lg:gap-10 lg:py-10 lg:px-0">
        <Header
          title={title}
          description={description}
          alignment={layout?.headerAlignment || "center"}
        />
        <div class="flex justify-center">
          <div class="w-full grid grid-cols-2 grid-rows-2 gap-4 lg:grid-rows-1 lg:grid-cols-4">
            {listOfBenefits}
          </div>
        </div>
      </div>
    </div>
  );
}
