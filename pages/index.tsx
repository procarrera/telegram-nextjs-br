import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  GridItem,
  AspectRatio,
  HStack,
  Stack,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from 'next/link'
import Container from "../src/components/Container";
import Text from "../src/components/Text"
import CustomGrid from "../src/components/Grid";
import Button from "../src/components/Button"

const imgs = {
  bgs: {
    emojis: "/images/backgrounds/emojis.png",
    telegram: "/images/backgrounds/telegram.jpg"
  },
  hero: "/images/hero/hero-2.png",
  sobre: "/images/sobre/about-2.png"
}

const section = {
    minH: [
    'auto', 
    ,  
    ,
    '60vh',
    , 
    '100vh'
  ],
  py: [
    6, 
    ,
    , 
    0,
    ,
    12
    
  ]
}

const linkJoin = 'https://t.me/nextjs_br'

export default function Home() {
  //const buttonSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg'})
  return (
    <>
      <Box as="section" 
      minH={section.minH} 
      py={section.py}>
        <Container>
          <CustomGrid>
            <GridItem
              className="greeting"
              colSpan={[2, 8, 5,]}
              rowStart={[2, , 1]}
              alignSelf="center"
              justify="center"
            >
              <Stack>
                <Text
                  type="h2"
                  color="orange.500">Bem-vindo ao mundo do Next.JS!</Text>
                <Text type="paragraph">
                  Somos um grupo brasileiro de Telegram dedicado ao aprendizado e evolução em <b>Next.JS</b>,
                uma <em>framework</em> de React para construção de sites da <b>Vercel</b>.
              </Text>
                <HStack spacing={4}>
                  <Button href={linkJoin} colorScheme="indigoBlue">
                    Quero fazer parte</Button>
                  <Button href="/#sobre" colorScheme="blueGreen">Saiba mais</Button>
                </HStack>
              </Stack>
            </GridItem>
            <GridItem
              className="hero-image"
              colSpan={[2, 8, 7]}
              colStart={[1, , , 6]}
              rowStart={[1]}
            >
              <AspectRatio ratio={1} w={["100%", '', '', '80%', , "100%"]} mx="auto" >
                <Image src={imgs.hero} layout="fill" objectFit="contain" quality="100" />
              </AspectRatio>
            </GridItem>
            <GridItem rowStart={2} colSpan={[2, 4, 12]} colStart={1} justifySelf="center" display={['none', , , 'block']}>
              <Link href="#sobre">
                <VStack spacing={0} role="group" cursor="pointer">
                  <Text as="span" color="indigoBlue.600">Rolar</Text>
                  <ChevronDownIcon
                    w={8}
                    h={8}
                    color="indigoBlue.600"
                    transform="translateY(-.5rem)"
                    transition="transform .2s ease-in-out"
                    _groupHover={{
                      transform: 'translateY(.5rem)'
                    }}
                  />
                </VStack>
              </Link>
            </GridItem>
          </CustomGrid>
        </Container>
      </Box>

      <Box as="section" id="sobre" minH={section.minH} py={section.py}>
        <Container>
          <CustomGrid>
            <GridItem colSpan={[2, 8, , 6]}>
              <AspectRatio ratio={1} w="full">
                <Image src={imgs.sobre} layout="fill" objectFit="contain" quality="100" />
              </AspectRatio>
            </GridItem>
            <GridItem colSpan={[2, 8, , 5]} colStart={[, , , 8]} alignSelf="center">
              <Text type="h2" color="blueGreen.700">Quem somos?</Text>
              <Text types="p" >
                Nosso objetivo é aprender em conjunto, através da divulgação de conteúdo e discussões acerca do desenvolvimento de apps e websites.
            </Text>
              <Text types="p" >
                Se você se interessa pelo assunto e deseja aprender ou contribuír, junte-se a nossa comunidade!
            </Text>
              <Text type="h2" color="blueGreen.700">
                Como fazer parte
            </Text>
              <Text type="p" >
                É simples! Basta ter cadastro no app <b>Telegram</b> e acessar <a href="https://t.me/nextjs_br">https://t.me/nextjs_br</a>.
            </Text>
              <HStack>
                <Button href={linkJoin} colorScheme="blueGreen">
                  Entrar no grupo
                  </Button>
                <Button href='/regras-de-uso' colorScheme="indigoBlue">
                  Conheça as regras de uso
                  </Button>
              </HStack>
            </GridItem>
          </CustomGrid>
        </Container>
      </Box>
    </>
  );
}
