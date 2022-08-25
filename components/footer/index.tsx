import { createStyles, Container, Group, Anchor } from "@mantine/core";
import Link from "next/link";
import { useStyles } from "./styles";

interface AppFooterProps {
  links: {
    id: number;
    link: string;
    label: { text: string; badge?: JSX.Element };
  }[];
}

export function AppFooter({ links }: AppFooterProps) {
  const { classes } = useStyles();
  const items = links.map(({ id, label, link }) => (
    <Link key={id} href={link}>
      <a color="dimmed" key={id} href={link}>
        {label.text}
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
