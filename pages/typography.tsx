import {
  Box,
} from "@chakra-ui/react";

import Text from "../src/components/Text"
import ColumnSplit from '../src/components/ColumnSplit'
import Container from "../src/components/Container";

const section = {
  minH: ['', , , , '82vh'],
  py: [6, , 6, 12,]
}

export default function Typo() {
  return (
    <>
      <Box as="section" minH={section.minH} py={section.py}>
        <Container>
          <Text type="h1" as="h1">Kitsch retro</Text>

          <ColumnSplit>

            <Text type="h2">Typewriter delectus cred</Text>
            <Text type="p">
              Bushwick Schlitz. Est Shoreditch small batch, dolor Schlitz sapiente twee stumptown ex. Duis Carles pickled, cornhole Thundercats McSweeney's minim PBR vegan Tumblr irony.
            </Text>
            <Text type="p">
              Kogi eu Thundercats, sed scenester before they sold out et aesthetic. Elit cred Vice ethical pickled sartorial. Stumptown roof party freegan High Life vero, ea sed minim meggings.
            </Text>
            <Text type="h3">
              Truffaut disrupt sartorial deserunt
            </Text>
            <Text type="paragraph">
              Cosby sweater plaid shabby chic kitsch pour-over ex. Try-hard fanny pack mumblecore cornhole cray scenester. Assumenda narwhal occupy, Blue Bottle nihil culpa fingerstache. Meggings kogi vinyl meh, food truck banh mi Etsy magna 90's duis typewriter banjo organic leggings Vice.
            </Text>

            <Text type="h4" mt={16}>
              Fingerstache nesciunt lomo nostrud hoodie
            </Text>
            <Text type="paragraph">
              Laboris selfies occaecat umami, forage Tumblr American Apparel. Retro Terry Richardson culpa id swag polaroid Intelligentsia American Apparel eu, esse non post-ironic fugiat master cleanse.
            </Text>
            <Text type="paragraph">
              Direct trade gluten-free blog, fanny pack cray labore skateboard before they sold out adipisicing non magna id Helvetica freegan. Disrupt aliqua Brooklyn church-key lo-fi dreamcatcher.
            </Text>

          </ColumnSplit>
        </Container>
      </Box>
    </>
  );
}
