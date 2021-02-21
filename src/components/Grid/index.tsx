import React from "react";
import { Grid } from "@chakra-ui/react";

const CustomGrid: React.FC = ({children}) => {
  return (
    <Grid
      gridTemplateColumns={[
        'repeat(2, .5fr)',
        'repeat(8, .125fr)',
        ,
        'repeat(12, .083333333fr)',
      ]}
      alignItems="center"
      columnGap={8}
      h="100%"
    >
      {children}
    </Grid>
  );
};

export default CustomGrid;
