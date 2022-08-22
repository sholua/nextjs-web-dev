import { useEffect } from "react";
import { useRouter } from "next/router";
import { Title, Text, Button, Container, Group } from "@mantine/core";
import { useStyles } from "./styles";

const Error = () => {
  const { classes } = useStyles();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 8000);
  }, [router]);

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Group position="center">
        <Button onClick={() => router.replace("/")} variant="subtle" size="md">
          Take me back to home page
        </Button>
      </Group>
    </Container>
  );
};

export default Error;
