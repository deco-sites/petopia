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
      <div class="bg-[#f9fafb] flex flex-row items-center w-full justify-between px-2">
        <div class="flex flex-1 justify-start items-center gap-x-3" >
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

        <div class=" flex-1 flex justify-end items-center gap-x-3	">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 21.3336L17.1286 14.4622C18.399 12.5316 18.9078 10.1983 18.5565 7.9141C18.2053 5.62989 17.019 3.55725 15.2273 2.09746C13.4357 0.637677 11.1661 -0.105409 8.85804 0.0120753C6.54997 0.12956 4.36759 1.09926 2.73342 2.73342C1.09926 4.36759 0.12956 6.54997 0.0120753 8.85804C-0.105409 11.1661 0.637677 13.4357 2.09746 15.2273C3.55725 17.019 5.62989 18.2053 7.9141 18.5565C10.1983 18.9078 12.5316 18.399 14.4622 17.1286L21.3336 24L24 21.3336ZM2.66867 9.33471C2.66867 5.65905 5.65905 2.66867 9.33471 2.66867C13.0104 2.66867 16.0007 5.65905 16.0007 9.33471C16.0007 13.0104 13.0104 16.0007 9.33471 16.0007C5.65905 16.0007 2.66867 13.0104 2.66867 9.33471Z"
              fill="#4F3C70"
            />
          </svg>

          <svg
            width="24"
            height="30"
            viewBox="0 0 24 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 21H18C18.3978 21 18.7794 21.158 19.0607 21.4393C19.342 21.7206 19.5 22.1022 19.5 22.5C19.5 22.8978 19.342 23.2794 19.0607 23.5607C18.7794 23.842 18.3978 24 18 24H4.5C4.10218 24 3.72064 23.842 3.43934 23.5607C3.15804 23.2794 3 22.8978 3 22.5V3H1.5C1.10218 3 0.720645 2.84196 0.43934 2.56066C0.158036 2.27936 0 1.89782 0 1.5C0 1.10218 0.158036 0.720644 0.43934 0.43934C0.720645 0.158035 1.10218 0 1.5 0H4.5C4.89782 0 5.27936 0.158035 5.56066 0.43934C5.84196 0.720644 6 1.10218 6 1.5V4.5015L6.1095 4.5H20.8905C22.608 4.5 24 5.8425 24 7.5C24 7.719 23.9745 7.9365 23.925 8.151L22.1985 15.651C21.8835 17.0235 20.6205 18 19.1625 18H6.1095L6 17.9985V21ZM5.25 30C4.65326 30 4.08097 29.7629 3.65901 29.341C3.23705 28.919 3 28.3467 3 27.75C3 27.1533 3.23705 26.581 3.65901 26.159C4.08097 25.7371 4.65326 25.5 5.25 25.5C5.84674 25.5 6.41903 25.7371 6.84099 26.159C7.26295 26.581 7.5 27.1533 7.5 27.75C7.5 28.3467 7.26295 28.919 6.84099 29.341C6.41903 29.7629 5.84674 30 5.25 30ZM18.75 30C18.1533 30 17.581 29.7629 17.159 29.341C16.7371 28.919 16.5 28.3467 16.5 27.75C16.5 27.1533 16.7371 26.581 17.159 26.159C17.581 25.7371 18.1533 25.5 18.75 25.5C19.3467 25.5 19.919 25.7371 20.341 26.159C20.7629 26.581 21 27.1533 21 27.75C21 28.3467 20.7629 28.919 20.341 29.341C19.919 29.7629 19.3467 30 18.75 30ZM6 7.5V15H19.2465L21 7.5H6Z"
              fill="#4F3C70"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Navbar;
