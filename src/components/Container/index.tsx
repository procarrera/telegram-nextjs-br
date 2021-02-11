import React from "react";
import { Box } from "@chakra-ui/react";

const Container: React.FC = ({children}) => {
  return (
    <Box 
      w="full"
      maxW={[
        "100%",
        ,
        "48rem", // ~760px
        "62rem", // ~1020px
        "90rem"  // ~1440px
      ]}
      px={[8, 0]}
      mx="auto"
      className="container">
      {children}
    </Box>
  );
};

export default Container;
