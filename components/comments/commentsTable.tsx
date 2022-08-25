import React, { FC } from "react";
import { Table, Loader, Center, Container } from "@mantine/core";
import useSWR from "swr";

import { commentType } from "../../types";

const CommentsTable: FC<{
  commentsFromServer: Array<commentType>;
}> = ({ commentsFromServer }) => {
  const { data, error } = useSWR<commentType[]>("/comments", {
    fallbackData: commentsFromServer,
  });

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
    <Table captionSide="bottom" highlightOnHover>
      <caption>Some comments...</caption>
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
      <tfoot>{ths}</tfoot>
    </Table>
  );
};

export default CommentsTable;
