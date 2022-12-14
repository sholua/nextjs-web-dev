import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import axios from "axios";
import PostInfo from "../../components/PostInfo";

import { postType } from "../../types";

type postTypeProps = {
  post: postType;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get("/posts");

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const { data } = await axios.get(`/posts/${id}`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: data },
  };
};

const Post: FC<postTypeProps> = ({ post }) => (
  <>
    <Head>
      <title>Contact page</title>
    </Head>
    <PostInfo post={post} />
  </>
);

export default Post;
