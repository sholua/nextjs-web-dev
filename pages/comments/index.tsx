import React from "react";
import useSWR from "swr";
import { Table, Loader, Center, Container } from "@mantine/core";

function Comments() {
  const { data, error } = useSWR(
    "http://localhost:4000/comments",
    (url: string) => fetch(url).then((r) => r.json())
  );

  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <Container style={{ width: 400, height: 200 }}>
        <Center>
          <Loader size="lg" variant="dots" />
        </Center>
      </Container>
    );

  const ths = (
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Email</th>
    </tr>
  );

  const rows = data.map((comment) => (
    <tr key={comment.id}>
      <td>{comment.id}</td>
      <td>{comment.name}</td>
      <td>{comment.email}</td>
    </tr>
  ));
  return (
    <Container>
      <Table captionSide="bottom" highlightOnHover>
        <caption>Some comments...</caption>
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
        <tfoot>{ths}</tfoot>
      </Table>
    </Container>
  );
}

export default Comments;
