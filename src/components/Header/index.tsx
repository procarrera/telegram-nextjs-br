import React from "react";
import { 
  Text, 
  chakra, 
  Flex, 
  HStack, 
  IconButton,  
  Spacer, 
  Box, 
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerBody,
  useDisclosure, 
  List,
  ListItem,
  Icon,
  } from '@chakra-ui/react'
import { ArrowRightIcon, HamburgerIcon } from '@chakra-ui/icons'
import Container from "../Container";
import Button from '../Button'
import Link from 'next/link'

const imgs = {
  emojis: "/images/backgrounds/emojis.png",
  logo: "/images/logos/logo.svg",
  nextBr: "/images/logos/next-br.svg"
}

const navMenu = [
  {
    nome: 'Início',
    url: '/'
  },
  {
    nome: 'Sobre',
    url: '#sobre'
  },
  {
    nome: 'Blog',
    url: '/blog'
  },
  {
    nome: 'Projetos',
    url: '/projetos'
  },
  {
    nome: 'Links Úteis',
    url: '/links-uteis'
  },
  {
    nome: 'Regras de Uso',
    url: '/regras-de-uso'
  },
]

const Header: React.FC = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Flex 
      as="header"
      flexDir="row"
      
      >
      <Container>
        <HStack
          h={[ 12, , , 20]}
          my={6}
          alignItems="center"
          justify={["center", , "flex-start"]}
          >
          <chakra.img src={imgs.nextBr} h="100%" className="logo branding"/>
          <Spacer />
          <HStack spacing={8} display={['none', , ,'flex']} >
            {navMenu.map((link, i) => {
              const { nome, url } = link
              return (
                <Link href={url} key={i}>
                  <Text 
                    className="nav-links"
                    as="span"
                    fontFamily="body" 
                    fontWeight="medium" 
                    color="indigoBlue.700"
                    pos="relative"
                    cursor="pointer"
                    zIndex={50}
                    _hover={{
                      _before: {
                        h: '.25rem'
                      }
                    }}
                    _before={{
                      transition: "all .2s ease-in-out",
                      content: '""',
                      pos: 'absolute',
                      height: '0rem',
                      width: "100%",
                      bgColor: 'orange.400',
                      bottom: 0,
                      zIndex: -1,
                      transformOrigin: "bottom"
                    }}
                    >{nome}</Text>
                </Link>
              )
            })}
          </HStack>
          <Spacer />
          <Box display={['none', , ,'flex']}>
            <Button colorScheme="orange">Faça parte</Button>
          </Box>
          <Box className="mobile-only" display={[, , ,'none']}>
            <IconButton 
              icon={<HamburgerIcon />} 
              aria-label="Menu Button" 
              ref={btnRef} 
              size="lg"
              color="indigoBlue.700"
              bgColor="transparent"
              onClick={onOpen}>
              Open
            </IconButton>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
              size="lg"
            >
              <DrawerOverlay>
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerBody pt={16}>
                  <List>
                    {navMenu.map((link, i) => {
                      const { nome, url } = link
                      return (
                        <Link href={url} key={i}>
                          <ListItem
                            role="group"
                            className="nav-links"
                            my={1}
                            >
                            <Icon 
                              as={ArrowRightIcon}
                              color="orange.300"
                              w={2}
                              h={2}
                              mt={-1}
                              opacity="0"
                              transform="rotateX(360deg)"
                              transition="all .5s ease-in-out"
                              _groupHover={{
                                opacity: '1',
                                transform: 'rotateX(0) translateX(1px)'
                              }}
                            />
                            <Text
                              as="span"
                              fontFamily="body" 
                              fontWeight="medium" 
                              fontSize="lg"
                              color="indigoBlue.700"
                              cursor="pointer"
                              transition="all .3s ease-in-out"
                              ml={-2}
                              _groupHover={{
                                ml: 2
                              }}
                            >

                              {nome}
                            </Text>
                          </ListItem>
                        </Link>
                      )
                    })}
                  </List>      
                  <Button mt={8} colorScheme="orange">Faça parte</Button>              
                  </DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </Box>

        </HStack>
      </Container>
      
    </Flex>
  );
};

export default Header;
