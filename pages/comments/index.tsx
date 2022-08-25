import React from "react";
import { Container, Divider } from "@mantine/core";
import { CommentsForm } from "../../components/comments/commentsForm";
import ComponentsTable from "../../components/comments/commentsTable";

function Comments() {
  return (
    <Container>
      <CommentsForm />
      <Divider my="sm" />
      <ComponentsTable />
    </Container>
  );
}

export default Comments;
