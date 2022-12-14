import { FC } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import Heading from "../../components/Heading";

import { contactType } from "../../types";

type contactsTypeProps = {
  contacts: Array<contactType>;
};

export const getStaticProps: GetStaticProps = async () => {
  const {data} = await axios.get("/users");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

const Contacts: FC<contactsTypeProps> = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:" />
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;
