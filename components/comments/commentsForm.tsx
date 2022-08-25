import { Container, Button, TextInput, Space } from "@mantine/core";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import useSWR from "swr";

import { commentType } from "../../types";

export function CommentsForm() {
  const { data, mutate } = useSWR<commentType[]>("/comments");

  return (
    <div>
      Number of comments: {data?.length}
      <Formik
        initialValues={{ name: "", email: "test@test.com" }}
        onSubmit={async (values, formikHelpers) => {
          const newComment = await axios.post("/comments", values);
          mutate([...data, newComment.data], {
            revalidate: false,
          });
          formikHelpers.resetForm();
        }}
      >
        <Form>
          <Container>
            <Field
              autoComplete="off"
              as={TextInput}
              name="name"
              label="Comment"
            />
            <Space h="md" />

            <Button type="submit">Add Comment</Button>
          </Container>
        </Form>
      </Formik>
    </div>
  );
}
