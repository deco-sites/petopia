import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useUI } from "$store/sdk/useUI.ts";

export default function MenuButton() {
  const { displayMenu } = useUI();

  return (
    <Button
      class="btn btn-sm border-none	md:hidden"
      aria-label="open menu"
      onClick={() => {
        displayMenu.value = true;
      }}
    >
      <Icon
        id="Bars3"
        size={30}
        strokeWidth={0.01}
        class="fill-current text-[#4F3C70]"
      />
    </Button>
  );
}
