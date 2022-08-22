import { createStyles, Container, Group, Anchor } from "@mantine/core";
import Link from "next/link";
import { useStyles } from "./styles";

interface AppFooterProps {
  links: { id: number; link: string; label: string }[];
}

export function AppFooter({ links }: AppFooterProps) {
  const { classes } = useStyles();
  const items = links.map(({ id, label, link }) => (
    <Link key={id} href={link}>
      <a color="dimmed" key={label} href={link}>
        {label}
      </a>
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
