import Head from "next/head";
import Main from "../components/Main";
import {
  Box,
  Center,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export async function getStaticProps(context) {
  const res = await fetch("http://143.198.235.244/api");
  const data = await res.json();

  return {
    props: { data },
  };
}
export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>PANDA CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Center h="100vh">
        <Box>
          <Heading>List of Names:</Heading>
          <br />
          <UnorderedList>
            {data.map((names) => (
              <ListItem>{names.name}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Center>
    </>
  );
}
