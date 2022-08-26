import React, { FC, useState } from "react";
import { Table, Loader, Center, Container, Pagination } from "@mantine/core";
import useSWR from "swr";

import { commentType } from "../../types";
import { AxiosResponseHeaders } from "axios";

const CommentsTable: FC<{
  commentsFromServer: Array<commentType>;
}> = ({ commentsFromServer }) => {
  const [activePage, setPage] = useState(1);
  const {
    data: { data, headers },
    error,
  } = useSWR<{ data: commentType[]; headers?: AxiosResponseHeaders }>(
    `/comments?_limit=2&_page=${activePage}`,
    {
      fallbackData: { data: commentsFromServer },
    }
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

  const pagesCount = headers ? Math.ceil(+headers["x-total-count"] / 2) : 3;

  return (
    <>
      <Table captionSide="bottom" highlightOnHover>
        <caption>Some comments...</caption>
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
        <tfoot>{ths}</tfoot>
      </Table>
      <Pagination page={activePage} onChange={setPage} total={pagesCount} />
    </>
  );
};

export default CommentsTable;
