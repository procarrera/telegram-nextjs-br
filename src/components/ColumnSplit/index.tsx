import { Box } from "@chakra-ui/react";

const ColumnSplit = ({
  children,
}: any) => {
  return (
    <Box
      sx={{
        columnCount: [2, , , , 3],
        columnWidth: "28ch",
        columnGap: [, , '3rem', '4rem']
      }}
    >
      {children}
    </Box>
  )
};
export default ColumnSplit;
