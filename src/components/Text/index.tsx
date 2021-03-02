import { Box } from "@chakra-ui/react";

const Text = ({
  children,
  type, ...props
}: any) => {
  return (
    <Box
      textStyle={type}
      as={(type === 'p' || type === "paragraph") ? 'p' : type }
      {...props}
    >
      {children}
    </Box>
  )
};
export default Text;
