import { ChevronDownIcon } from "@chakra-ui/icons";
import { Heading, Text, GridItem, AspectRatio, Button, HStack, Stack, Icon, VStack, chakra,} from "@chakra-ui/react";
import Image from "next/image";
import Link from 'next/link'
import Section from '../src/components/Container'
import CustomGrid from "../src/components/Grid";

const imgs = {
  bgs: {
    emojis: "/images/backgrounds/emojis.png",
    telegram: "/images/backgrounds/telegram.jpg"
  },
  hero: "/images/hero/hero.png",
  sobre: "/images/sobre/about.png"
}

export default function Home() {
  return (
    <>
    <Section>
      <CustomGrid>
        <GridItem 
          className="greeting"
          colSpan={[2, 4, , 5]}
          rowStart={[2, , 1]}
          alignSelf="center"
          justify="center"
        >
          <Stack>
            <Heading 
              fontSize="2xl"
              
              letterSpacing="tight"
              color="blueGreen.700">Bem-vindo ao mundo do Next.JS!</Heading>
            <Text>
              Somos um grupo brasileiro de Telegram dedicado ao aprendizado e evolução em <b>Next.JS</b>, 
              uma <em>framework</em> de React para construção de sites da <b>Vercel</b>.
            </Text>
            <HStack spacing={4}>
              <Button 
                size="lg" 
                colorScheme="indigoBlue"
                >Quero fazer parte</Button>
              <Button 
                size="lg" 
                colorScheme="blueGreen"
                >Saiba mais</Button>
            </HStack>
          </Stack>
        </GridItem>
        <GridItem
          className="hero-image"
          colSpan={[2, 4, , 7]}
          colStart={[ , 2, , 6]}
          rowStart={[1]}
        >
          <AspectRatio ratio={1} w="100%">
            <Image src={imgs.hero} layout="fill" objectFit="contain" />
          </AspectRatio>
        </GridItem>
        <GridItem rowStart={2} colSpan={2} colStart={5} justifySelf="center" display={[ 'none', , ,'block' ]}>
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
    </Section>

    <Section>
      <CustomGrid>
        <GridItem colSpan={[2, 4, , 6]}>
          <AspectRatio ratio={1} w="full">
            <Image src={imgs.sobre} layout="fill" objectFit="contain" />
          </AspectRatio>
        </GridItem>
        <GridItem colSpan={[2, 4, , 5]} colStart={[ , 5, , 8]} alignSelf="center">
          <Heading color="blueGreen.700" fontSize="2xl">Quem somos?</Heading>
          <Text>
            Nosso objetivo é aprender em conjunto, através da divulgação de conteúdo e discussões acerca do desenvolvimento de apps e websites.
          </Text>
          <Text>
            Se você se interessa pelo assunto e deseja aprender ou contribuír, junte-se a nossa comunidade!
          </Text>
          <Heading  color="blueGreen.700" fontSize="xl">
            Como fazer parte
          </Heading>
          <Text>
            É simples! Basta ter cadastro no app <b>Telegram</b> e acessar <a href="https://t.me/nextjs_br">https://t.me/nextjs_br</a>, ou clique no botão abaixo para ser levado até o grupo.
          </Text>
          <Button size="lg" colorScheme="indigoBlue">
            Entrar
          </Button>
        </GridItem>
      </CustomGrid>
    </Section>
    </>
  );
}
