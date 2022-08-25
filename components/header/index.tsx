import { FC, useState } from "react";
import { Header, Container, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { useStyles } from "./styles";
import { useRouter } from "next/router";
import { SwitchToggle } from "../switch-toggle";

interface AppHeaderProps {
  links: {
    id: number;
    link: string;
    label: { text: string; badge?: JSX.Element };
  }[];
}

export const AppHeader: FC<AppHeaderProps> = ({ links }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const { pathname } = useRouter();

  const items = links.map(({ id, label, link }) => (
    <Link key={id} href={link}>
      <a
        className={cx(classes.link, {
          [classes.linkActive]: pathname === link,
        })}
      >
        {label.text} <span className={cx(classes.badge)}>{label?.badge}</span>
      </a>
    </Link>
  ));

  return (
    <Header height={60}>
      <Container className={classes.header}>
        <Link href="/">
          <Image src="/logo.png" width={48} height={60} alt="logo" />
        </Link>

        <SwitchToggle />

        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
};
