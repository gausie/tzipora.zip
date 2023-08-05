import * as React from "react";
import { HeadFC } from "gatsby";

import { Stack, Text, Box } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="100%"
      spacing={10}
      mx={4}
    >
      <Box textAlign="center">
        <Text fontSize="6xl">404</Text>
        <Text fontSize="2xl">Page Not Found</Text>
      </Box>
    </Stack>
  );
}

export const Head: HeadFC = () => <title>Not found</title>;
