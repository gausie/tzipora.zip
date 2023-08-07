import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  Center,
  Heading,
  Text,
  calc,
  Flex,
  Container,
  Highlight,
  useToken,
  Stack,
  Box,
} from "@chakra-ui/react";
import ReactCurvedText from "react-curved-text";

const $lineHeight = "1.4375rem";

export const Head: HeadFC = () => <title>Tzipora 🐣</title>;

export default function IndexPage(props: PageProps) {
  const xl4 = useToken("fontSizes", "4xl");

  return (
    <Container maxWidth="container.large">
      <Center height="100vh" textAlign="center">
        <Flex gap={$lineHeight} flexDir="column">
          <Heading
            as="h1"
            size="4xl"
            maxW="16ch"
            fontFamily="Luckybones"
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
          <Box alignSelf="center">
            <ReactCurvedText
              text="1st August 2023"
              width={255}
              height={75}
              cx={125}
              cy={-33}
              rx={125}
              ry={100}
              startOffset={53}
              textProps={{
                fill: "#9cc19b",
                fontFamily: "Luckybones",
                fontSize: xl4,
              }}
            />
            <ReactCurvedText
              text="י״ד בְּאָב תשפ״ג"
              width={255}
              height={75}
              cx={125}
              cy={-15}
              rx={130}
              ry={90}
              startOffset={53}
              textProps={{
                fill: "#6b9d6a",
                fontFamily: "Shlomo Light Bold",
                fontSize: xl4,
              }}
              svgProps={{
                style: { marginTop: -40 },
              }}
            />
          </Box>
        </Flex>
      </Center>
    </Container>
  );
}
