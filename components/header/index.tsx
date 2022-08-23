import { FC, useState } from "react";
import { Header, Container, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { useStyles } from "./styles";
import { useRouter } from "next/router";

interface AppHeaderProps {
  links: { id: number; link: string; label: string }[];
}

export const AppHeader: FC<AppHeaderProps> = ({ links }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const { pathname } = useRouter();

  const items = links.map(({ id, label, link }) => (
    <Link key={id} href={link}>
      <a
        key={label}
        className={cx(classes.link, {
          [classes.linkActive]: pathname === link,
        })}
      >
        {label}
      </a>
    </Link>
  ));

  return (
    <Header height={60}>
      <Container className={classes.header}>
        <Link href="/">
          <Image src="/logo.png" width={48} height={60} alt="logo" />
        </Link>
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
