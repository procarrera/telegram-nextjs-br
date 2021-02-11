import React from "react";
import { Box, chakra, Flex } from '@chakra-ui/react'
import Container from "../Container";

const imgs = {
  emojis: "/images/backgrounds/emojis.png",
  logo: "/images/logos/logo.svg",
  nextBr: "/images/logos/next-br.svg"
}

const Header: React.FC = () => {
  return (
    <Flex 
      flexDir="column"
      bgImage={["none", ,`url(${imgs.emojis})`]}
      bgSize={[ , , "contain", "auto"]}
      bgPosition={[, ,"top right", "right"]}
      bgRepeat="no-repeat"
      >
      <Container>
        <Flex
          h={20}
          my={6}
          alignItems="center"
          justify={["center", , "flex-start"]}
          
          >
          <chakra.img src={imgs.logo} h="100%"/>
          <chakra.img src={imgs.nextBr} h="100%"/>
        </Flex>
      </Container>
      <Box bgColor="telegram.400" py={2} textAlign="center" color="white">
        Ainda não é membro do grupo?
        <chakra.a 
          pl={2} 
          fontWeight="semibold"
          href="https://t.me/nextjs_br">
          Entre agora!
        </chakra.a>
      </Box>
    </Flex>
  );
};

export default Header;
