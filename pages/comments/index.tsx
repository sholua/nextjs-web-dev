import React from "react";
import { Container, Divider } from "@mantine/core";
import axios from "axios";
import Head from "next/head";
import { CommentsForm } from "../../components/comments/commentsForm";
import CommentsTable from "../../components/comments/commentsTable";
import { NextPage } from "next";
import { commentType } from "../../types";

interface Props {
  commentsFromServer?: Array<commentType>;
}

const Comments: NextPage<Props> = ({ commentsFromServer }) => {
  return (
    <Container>
      <Head>
        <title>Comments</title>
      </Head>
      <CommentsForm />
      <Divider my="sm" />
      <CommentsTable commentsFromServer={commentsFromServer} />
    </Container>
  );
};

Comments.getInitialProps = async (ctx) => {
  const res = await axios("/comments?_limit=2");
  const json = res.data;
  return { commentsFromServer: json };
};

export default Comments;
