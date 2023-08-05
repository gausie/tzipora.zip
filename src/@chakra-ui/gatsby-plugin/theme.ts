import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
    disableTransitionOnChange: false,
  },
  colors: {
    transparent: "transparent",
  },
  styles: {
    global: () => ({
      body: {
        bg: "#fdf6ef",
      },
    }),
  },
});
