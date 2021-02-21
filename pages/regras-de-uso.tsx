import { ChevronDownIcon } from "@chakra-ui/icons";
import { 
  Box,
  Heading, 
  Text, 
  SimpleGrid,
  GridItem, 
  AspectRatio, 
  Button, HStack, 
  Stack, 
  VStack, 
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from 'next/link'
import Container from "../src/components/Container";
import CustomGrid from "../src/components/Grid";

const imgs = {
  bgs: {
    emojis: "/images/backgrounds/emojis.png",
    telegram: "/images/backgrounds/telegram.jpg"
  },
  hero: "/images/hero/hero-2.png",
  sobre: "/images/sobre/about-2.png"
}

const section = {
  minH: [ '', , , ,'82vh'  ],
  py: [ 6, , 6, 12, ]
}

const typography = {
  major: ['h1','2xl'],
  heading: ['h2','xl'],
  topic: ['h4', 'md']
}

export default function Regras() {
  const { major, heading, topic } = typography
  return (
    <>
    <Box as="section" minH={section.minH} py={section.py}>
      <Container>
        <Heading color="orange.600" as={major[0]} size={major[1]}>Regras de Uso</Heading>
        <SimpleGrid columns={[1, , 2]} spacingX={['0', , 16, 24]}>
          <Box>
          <Heading color="blueGreen.700" as={heading[0]}  size={heading[1]}>Direito Autoral</Heading>
            <Text>Todo o material protegido sob a Lei dos Direitos Autoral - Lei N.º 9.610/98 -, é de propriedade de seu autor original. Videos, apostilas etc. são protegidos e têm seu compartilhamento vedado, exceto em caso explícito que dite o contrário. </Text>
            <Text>Ou seja, cursos profissionais cuja venda é realizada pelo autor, não devem ser compartilhados neste grupo. No entanto, todo e qualquer material aberto e de livre compartilhamento pode sim, ser compartilhado por aqui. </Text>

            <Heading color="blueGreen.700" as={topic[0]} size={topic[1]}>E como saber se o material é ou não livre?</Heading>
            <Text>Basta usar o bom senso. Todos sabem quando o envio de material é ou não, pirataria. </Text>

            <Heading color="blueGreen.700" as={topic[0]} size={topic[1]}>E se ainda assim eu quiser postar material pirata?</Heading>
            <Text>A publicação de material considerado pirata será deletada pela administração do grupo e o autor da publicação será notificado sobre o assunto. Não pretendemos expulsar ninguém, até porque acreditamos na "boa fé" da comunidade e sabemos que, em grande maioria, os usuários querem apenas compartilhar conhecimento. </Text>
            <Text>Entretanto, precisamos manter essa regra clara, afim de evitarmos confusões sobre a finalidade do grupo, que não é compartilhar material de terceiros e, sim, conhecimento.</Text>
            <Heading color="blueGreen.700" as={heading[0]}  size={heading[1]}>Flood</Heading>
            <Text>
            Não é raro que um assunto se desvie de Next ou React e vá parar noutro lugar (como por exemplo, CSS, UI, iconografia etc.). Aliás, não vemos problema algum nisso. Todos podemos aprender com a experiência do próximo.
            </Text>
          </Box>
          <Box mt={[ , , 20]}>
            <Text>
            Mas quando a conversa em um grupo de desenvolvimento em Next.JS passa a falar apenas de outras coisas, as coisas podem ficar um pouco confusas. Pense da seguinte maneira: se você passa o dia sem acessar o Telegram e, ao final dele, quer ver o que foi dito no grupo sobre X e descobre que só se fala de A, B e C desde cedo, qual o sentido do grupo ser sobre X? Além de confundir usuários mais novos e desviar tópicos, isso causa poluição visual e atrapalha a vida de quem não tem assunto nem em A, nem em B, nem e C. 
            </Text>
            <Text>
            Então, sejamos sensatos. Todos aqui são muito tranquilos e podem conversar sobre qualquer outra coisa no privado, certo? 
            </Text>

            <Heading color="blueGreen.700" as={heading[0]}  size={heading[1]}>Protocolo para dúvidas e pedidos de ajuda</Heading>
            <Text>
            Ao publicar sua dúvida ou pedir ajuda, tente fornecer a maior quantidade possível de informações acerca do problema. Se for um erro, traga um print do console, um da tela do dispositivo, esclareça para os outros o que é esperado e qual o resultado obtido, se o tiver. 
E se for novato e não souber fazer nada disso, bom, essa é sua dúvida.
            </Text>
            <Text>
            O console é a ferramenta básica de todo navegador moderno, onde você pode avaliar o andamento de sua aplicação virtual. Ele é acessado através do "inspetor de seu navegador" e você pode ter também acesso ao código fonte, às classes CSS, aos mecanismos de análise de performance etc. Tudo isso vai lhe ajudar a entender melhor o que é que está acontecendo e porque as coisas estão aparecendo em sua tela como estão.
            </Text>
            <Text>
            No final, a ideia por trás deste protocolo não é bem uma "regra", mas uma forma de facilitar a vida de todo mundo. Os contextos de cada dev são diferentes e, muitas vezes, se o que você vê em sua tela, não significa a mesma coisa para outro dev.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
    </>
  );
}
