import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  GridItem,
  HStack,
  VStack,
  Code,
  List,
  ListItem,
  Link as ChakraLink,
  Grid,
  Switch,
  Stack,
} from "@chakra-ui/react";
import Headroom from 'react-headroom'
import Link from 'next/link'
import ColumnSplit from "../src/components/ColumnSplit";
import Container from "../src/components/Container";


const section = {
  minH: ['', , , , '82vh'],
  py: [6, , 6, 12,]
}

const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const categorias = ["Cursos", "Tuts", "Docs", "Outros"]

export default function Links() {
  const [order, setOrder] = useState(false);
  const [type, setType] = useState(false);
  console.log(order)
  function sortAlfa() {
    if (order === false) {
      return sortCats().sort()
    } else {
      return sortCats().reverse()
    }
  }
  function sortCats() {
    if (type === false) {
      return alfabeto
    } else {
      return categorias
    }
  }

  const CardLink = ({ cmd, link }) => {
    return (
      <ListItem
        role="group"
        p={2}
        borderRadius="lg"
        cursor="pointer"
        transition="all .2s ease-in-out"
        _hover={{
          bgColor: 'accent.50'
        }}
      >
        <Code>{cmd}</Code> - <ChakraLink
          fontFamily="body"
          fontSize="sm"
          color="indigoBlue.700"
          fontWeight="normal"
          _groupHover={{ 
            textDecor: 'none',
            _after: {
              w: '100%'
            }
          }}
        >{link}</ChakraLink>
      </ListItem>
    )
  }

  return (
    <>
      <Box as="section" minH={section.minH} py={section.py}>
        <Container>
          <Box color="orange.600" textStyle="h1">Links Úteis</Box>
          <Box textStyle="paragraph" mb={6}>
            Links catalogados por {!type ? "ordem alfabética" : "categorias"}{order && !type && " reversa"}.
          </Box>
        </Container>
        <Headroom>
          <Box bgColor="white.50">
            <Container>
              <Stack>
                <Text as="span">Ordem</Text>
                <HStack>
                  <Text as="span" textTransform="uppercase">Alfabética</Text>
                  <Switch onChange={() => { setType(!type) }} size="sm" />
                  <Text as="span" textTransform="uppercase">Categorias</Text>
                </HStack>
                <HStack>
                  <Text as="span" textTransform="uppercase">Desc</Text>
                  <Switch onChange={() => { setOrder(!order) }} size="sm" />
                  <Text as="span" textTransform="uppercase">Asc</Text>
                </HStack>
              </Stack>
              <HStack w="100%" display={['none', , 'block']} className="index" pb={12}>
                {sortAlfa().map((item, i) => {
                  return (
                    <Link href={`#${item}`}>
                      <Text
                        as="span"
                        key={i}
                        cursor="pointer"
                        color="indigoBlue.500"
                        display="inline-block"
                        _hover={{
                          color: 'orange.500',
                          _after: {
                            color: 'indigoBlue.500'
                          }
                        }}
                        fontFamily="body"
                        fontWeight="normal"
                        pos="relative"
                        _notLast={{
                          _after: {
                            content: '" - "',
                            color: 'indigoBlue.500',
                          }
                        }}
                      >
                        {item}
                      </Text>
                    </Link>
                  )
                })}
              </HStack>
            </Container>
          </Box>
        </Headroom>
        <Container>
          <VStack w="100%" display={['block', , 'none']} className="index" pb={12}>
            {sortAlfa().map((item, i) => {
              return (
                <Link href={`#${item}`}>
                  <Text
                    as="span"
                    key={i}
                    cursor="pointer"
                    color="indigoBlue.500"
                    display="inline-block"
                    _hover={{
                      color: 'orange.500',
                      _after: {
                        color: 'indigoBlue.500'
                      }
                    }}
                    fontFamily="body"
                    fontWeight="normal"
                    pos="relative"
                    _notLast={{
                      _after: {
                        content: '" - "',
                        color: 'indigoBlue.500',
                      }
                    }}
                  >
                    {item}
                  </Text>
                </Link>
              )
            })}
          </VStack>
          <ColumnSplit>
            {sortAlfa().map((item, i) => {
              return (
                <Grid
                  gridTemplateColumns={!type ? ['auto .85fr'] : 'auto'}
                  mb={4}
                >
                  <GridItem
                    borderTop={!type ? "1px" : '0'}
                    borderColor="blueGreen.400"
                    pt={2}
                    pb={!type ? 0 : 2}
                    id={item}
                    as={Heading}
                    colSpan={1}
                    colStart={1}
                    rowSpan={1}
                    mt="0"
                    mb="auto"
                    fontSize={!type ? "4xl" : "xl"}
                  >{item}</GridItem>
                  <GridItem
                    borderTop="1px"
                    borderColor={"blueGreen.400"}
                    pt={2}
                    rowSpan={!type ? 1 : 2}
                    colSpan={1}
                    colStart={!type ? 2 : 1}
                    as={List}
                  >
                    <CardLink cmd="next-cmd" link="https://nextjs.org/docs/cmd" />
                    <CardLink cmd="next-cmd" link="https://nextjs.org/docs/cmd" />
                    <CardLink cmd="next-cmd" link="https://nextjs.org/docs/cmd" />
                    <CardLink cmd="next-cmd" link="https://nextjs.org/docs/cmd" />
                    <CardLink cmd="next-cmd" link="https://nextjs.org/docs/cmd" />
                  </GridItem>
                </Grid>
              )
            })}

          </ColumnSplit>
        </Container>
      </Box>
    </>
  );
}
