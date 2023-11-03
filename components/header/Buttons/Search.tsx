import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useUI } from "$store/sdk/useUI.ts";

export default function SearchButton() {
  const { displaySearchDrawer, displaySearchPopup } = useUI();

  return (
    <>
      <Button
        class="text-[#3e2f57] hidden sm:block bg-transparent"
        aria-label="search icon button"
        onClick={() => {
          console.log("CLICK")
          displaySearchPopup.value = !displaySearchPopup.value;
        }}
      >
        <Icon id="MagnifyingGlass" size={24} strokeWidth={0.1} />
      </Button>
      <Button
        class="stroke-[#3e2f57] text-[#3e2f57] sm:hidden"
        aria-label="search icon button"
        onClick={() => {
          displaySearchDrawer.value = !displaySearchDrawer.value;
        }}
      >
        <Icon id="MagnifyingGlass" size={24} strokeWidth={0.1} />
      </Button>
    </>
  );
}
