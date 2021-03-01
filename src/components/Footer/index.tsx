import React from "react";
import Image from "next/image";
import { chakra, AspectRatio, Flex, Text } from "@chakra-ui/react";

const GitHub = '/images/logos/github_logo.svg'

const transition = "all .2s ease-in-out"

const Footer: React.FC = () => {
  return (
    <chakra.a mt="auto" href="https://github.com/orgs/nextjs-br" role="group">
      <Flex 
        bgColor="gray.800"
        py={4}
        flexDir="row"
        alignItems="center"
        justify="center"
        
        transition={transition}
        _groupHover={{
          bgColor: 'gray.700'
        }}
        role="group"
      >
        <Flex 
          as="h3" 
          flexDir="row"
          alignItems="center"
          color="whiteAlpha.900"
          transition={transition}
          _groupHover={{
            color: 'whiteAlpha.700'
          }}
        >
          <AspectRatio 
            ratio={1} 
            w={12} 
            color="whiteAlpha.900" 
            transition={transition}
            _groupHover={{
            opacity: '.8'
          }}>
            <Image src={GitHub} layout="fill" objectFit="contain"/>
          </AspectRatio>
          <Text as="span" textDecor="underline" ml={4}>GitHub repository</Text>
        </Flex>
      </Flex>
    </chakra.a>
  );
};

export default Footer;
