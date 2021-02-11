import { AspectRatio, Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";

const imgs = {
  bgs: {
    emojis: "/images/backgrounds/emojis.png",
    telegram: "/images/backgrounds/telegram.jpg"
  }
}

export default function Home() {
  return (
    <Box
      as={Flex} 
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      flex="1"
      w="screenW"
      pt={[8, , 0]}
      color="gray.900"
      bgImage={`url(${imgs.bgs.telegram})`}
      >
      <Flex 
        flexDirection="column"
        lineHeight={10}
        alignItems={["center", "flex-start"]}
        
        mx={[6, , ,0]}
        bgImage={`url(${imgs.bgs.telegram})`}
        >
        <Text as="span" fontSize="5xl" fontWeight="black">Bem-vindo!</Text>
        <Text as="span" fontSize="xl">
          Somos um grupo de Telegram destinado ao aprendizado e evolução em{" "}
          <b>Next.JS</b>
        </Text>
        <SimpleGrid 
          columns={[1, 3]}  
          justifySelf={[, ,'center']}
          my={6}
          spacing={8}
          >
          {['1','2','3'].map((img, i) => {
            return (
              <AspectRatio 
                ratio={260/626} 
                minW={64}>
                <Image src={`/images/misc/feed-${img}.png`} key={i} layout="fill" objectFit="contain"/>
              </AspectRatio>
            )
          })}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
