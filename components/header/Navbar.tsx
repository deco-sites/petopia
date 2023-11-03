import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { MenuButton, SearchButton } from "$store/islands/Header/Buttons.tsx";
import CartButtonLinx from "$store/islands/Header/Cart/linx.tsx";
import CartButtonShopify from "$store/islands/Header/Cart/shopify.tsx";
import CartButtonVDNA from "$store/islands/Header/Cart/vnda.tsx";
import CartButtonVTEX from "$store/islands/Header/Cart/vtex.tsx";
import CartButtonWake from "$store/islands/Header/Cart/wake.tsx";
import Searchbar from "$store/islands/Header/Searchbar.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";

function Navbar({
  items,
  searchbar,
  logo,
}: {
  items: SiteNavigationElement[];
  searchbar?: SearchbarProps;
  logo?: { src: string; alt: string };
}) {
  const platform = usePlatform();

  return (
    <>
      <div class="bg-[#f9fafb] flex flex-row h-20 items-center w-full justify-between px-2">
        <div class="flex flex-1 justify-start items-center gap-x-3">
          <MenuButton />
          {logo && (
            <a
              href="/"
              aria-label="Store logo"
              class="block px-4 py-3 w-[160px]"
            >
              <Image
                className="object-cover"
                src={logo.src}
                alt={logo.alt}
                width={82}
                height={27}
              />
            </a>
          )}
        </div>
        <div class="hidden md:flex">
          <ul class="flex gap-4 items-center">
            <li>
              <a href="#" class="text-md text-[#8465BA]">
                Black Friday Pet
              </a>
            </li>
            <li>
              <a href="#" class="text-md text-[#8465BA]">
                Categoria em oferta
              </a>
            </li>
            <li>
              <a href="#" class="text-md text-[#8465BA]">
                Cadastre-se e ganhe
              </a>
            </li>
          </ul>
        </div>
        <div class=" flex-1 flex justify-end items-center gap-x-3	">
          <div class="flex gap-1">
            <SearchButton />
            <Searchbar searchbar={searchbar} />

            {platform === "vtex" && <CartButtonVTEX />}
            {platform === "vnda" && <CartButtonVDNA />}
            <a
              class="flex items-center sm:hidden"
              href="https://www.deco.cx"
            >
              <Icon
                id="User"
                size={24}
                class="fill-[transparent] text-[#6A5095]"
                strokeWidth={2}
              />
              <span class="text-xs w-[95px] block fill-[transparent] text-[#6A5095]">
                Entrar
                Cadastrar-se
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
