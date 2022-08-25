import { FC, ReactNode } from "react";
import { AppHeader } from "./header";
import { AppFooter } from "./footer";
import { Badge } from "@mantine/core";

type layoutProps = {
  children: ReactNode;
};

const links = [
  {
    id: 1,
    label: {
      text: "Home",
    },
    link: "/",
  },
  {
    id: 2,
    label: {
      text: "Posts",
      badge: (
        <Badge color="indigo" size="xs" variant="filled">
          SSG
        </Badge>
      ),
    },
    link: "/posts",
  },
  {
    id: 3,
    label: {
      text: "Contacts",
      badge: (
        <Badge color="indigo" size="xs" variant="filled">
          SSR
        </Badge>
      ),
    },
    link: "/contacts",
  },
];

const Layout: FC<layoutProps> = ({ children }) => (
  <>
    <AppHeader links={links} />
    {children}
    <AppFooter links={links} />
  </>
);

export default Layout;
