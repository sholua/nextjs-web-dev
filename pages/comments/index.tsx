import React from "react";
import { Container, Divider } from "@mantine/core";
import axios from "axios";
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
      <CommentsForm />
      <Divider my="sm" />
      <CommentsTable commentsFromServer={commentsFromServer} />
    </Container>
  );
};

Comments.getInitialProps = async (ctx) => {
  const res = await axios("/comments");
  const json = res.data;
  return { commentsFromServer: json };
};

export default Comments;
