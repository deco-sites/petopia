import Button from "$store/components/ui/Button.tsx";
import { useState } from "preact/hooks";

export interface Props {
  coupon?: string;
  onAddCoupon: (text: string) => Promise<void>;
}

function Coupon({ coupon, onAddCoupon }: Props) {
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(false);

  return (
    <div class="flex justify-between items-center px-4">
      <span class="text-sm">Cupom de desconto</span>
      {display
        ? (
          <form
            class="flex gap-1"
            onSubmit={async (e) => {
              e.preventDefault();
              const { currentTarget: { elements } } = e;

              const input = elements.namedItem("coupon") as HTMLInputElement;
              const text = input.value;

              if (!text) return;

              try {
                setLoading(true);
                await onAddCoupon(text);
                setDisplay(false);
              } finally {
                setLoading(false);
              }
            }}
          >
            <input
              name="coupon"
              class="border-[1px] border-solid border-[#E7D9FD] bg-[#F7F3FE] h-[45px] pl-2 w-[170px] rounded-md placeholder:text-[#6A5095]"
              type="text"
              value={coupon ?? ""}
              placeholder={"Cupom"}
            />
            <Button
              class="no-animation rounded-md h-[45px] w-[45px] bg-[#E7D9FD] text-[#6A5095]"
              type="submit"
              htmlFor="coupon"
              loading={loading}
            >
              Ok
            </Button>
          </form>
        )
        : (
          <Button
            class=" underline font-normal"
            onClick={() => setDisplay(true)}
          >
            {coupon || "Adicionar"}
          </Button>
        )}
    </div>
  );
}

export default Coupon;
