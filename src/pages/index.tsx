import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Center, Heading, Text, calc, Flex, Container, Highlight } from "@chakra-ui/react";

const $lineHeight = "1.4375rem";

export const Head: HeadFC = () => <title>Tzipora 🐣</title>;

export default function IndexPage(props: PageProps) {
  return (
    <Container maxWidth="container.large">
      <Center height="100vh" textAlign="center">
        <Flex gap={$lineHeight} flexDir="column">
          <Heading
            as="h1"
            size="4xl"
            maxW="16ch"
            fontFamily="'Luckybones'"
            fontStyle="normal"
            fontWeight="bold"
            lineHeight={calc($lineHeight).multiply(4).toString()}
            display="flex"
            flexDirection="column"
          >
            <Text as="span" color="#fbb8c2">
              Tzipora
            </Text>
            <Text as="span" color="#f8b699">
              Rachel
            </Text>
            <Text as="span" color="#b6b8dd">
              Zislis-Gaus
            </Text>
          </Heading>
          <Heading
            fontFamily="Shlomo Light Bold"
            display="flex"
            flexDirection="row-reverse"
            gap={2}
            justifyContent="center"
          >
            <Text as="span" color="#3b64ab">
              <Highlight
                query="צ"
                styles={{ fontFamily: "Shlomo Stam", color: "#3b64ab" }}
              >
                צפּורה
              </Highlight>
            </Text>
            <Text as="span" color="#6690cc">
              רחל
            </Text>
          </Heading>
        </Flex>
      </Center>
    </Container>
  );
}
