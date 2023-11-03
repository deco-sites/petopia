import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Drawers from "$store/islands/Header/Drawers.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface AlertProps {
  icon?: AvailableIcons;
  message: string
}


export interface Props {
  alerts: AlertProps[];
  /** @title Search Bar */
  searchbar?: Omit<SearchbarProps, "platform">;

  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: SiteNavigationElement[] | null;

  /** @title Logo */
  logo?: { src: ImageWidget; alt: string };
  message: string;
}

function Header({ alerts, searchbar, navItems, logo }: Props) {
  const platform = usePlatform();
  const items = navItems ?? [];

  return (
    <>
      <header style={{ height: "118px" }}>
        <Drawers menu={{ items }} searchbar={searchbar} platform={platform}>
          <div class="bg-black fixed w-full z-50">
            <Navbar
              items={items}
              searchbar={searchbar && { ...searchbar, platform }}
              logo={logo}
            />
            {
              alerts.length && 
              <Alert alerts={alerts} />
            }
          </div>
        </Drawers>
      </header>
    </>
  );
}

export default Header;
