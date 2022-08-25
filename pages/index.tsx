import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import { Title, Text, Button, Container } from "@mantine/core";
import Docs from "../components/Docs";
import { useStyles } from "./index.styles";
import { docType } from "../types";

type homeProps = {
  docs: Array<docType>;
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/docs`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { docs: data },
  };
};

const Home: FC<homeProps> = ({ docs }) => {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <Head>
        <title>Home</title>
      </Head>

      <div className={classes.inner}>
        <Title className={classes.title}>
          Test{" "}
          <a className={classes.highlight} href="https://nextjs.org/">
            NextJS
          </a>{" "}
          project
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Server Side Rendering, Static Generation, using SWR hook, API Routes
            and more...
          </Text>
        </Container>

        <div className={classes.controls}>
          <Docs docs={docs} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
