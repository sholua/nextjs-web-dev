import { FC, ReactNode } from "react";
import { AppHeader } from "./header";
import { AppFooter } from "./footer";

type layoutProps = {
  children: ReactNode;
};

const links = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "Posts", link: "/posts" },
  { id: 3, label: "Contacts", link: "/contacts" },
];

const Layout: FC<layoutProps> = ({ children }) => (
  <>
    <AppHeader links={links} />
    {children}
    <AppFooter links={links} />
  </>
);

export default Layout;
