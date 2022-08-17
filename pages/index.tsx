import Head from "next/head";
import Docs from "../components/Docs";
import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss";

export const getStaticProps = async () => {
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

const Home = ({ docs }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Next.js Application" />
    <Docs docs={docs} />
  </div>
);

export default Home;
