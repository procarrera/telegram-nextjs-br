import { ChakraProvider, Flex } from '@chakra-ui/react'
import overrides from '../theme'

import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={overrides} >
      <Flex direction="column" minH="screenH">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
