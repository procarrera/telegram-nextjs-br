import { Box, Button as ChakraButton } from "@chakra-ui/react";
import Link from 'next/link'
const Button = ({
  children,
  color,
  bgColor,
  colorScheme,
  isActive,
  isFullWidth,
  isDisabled,
  loadingText,
  leftIcon,
  rightIcon,
  spinner,
  variant,
  href
}: any) => {

  const ButtonBlock = ({ children, size }) => {
    return (
      <ChakraButton
        size={size}
        color={!colorScheme ? color : "white"}
        bgColor={!colorScheme ? bgColor : colorScheme + ".500"}
        _hover={{
          bgColor: !colorScheme ? bgColor : colorScheme + ".700",
        }}
        isActive={isActive}
        isFullWidth={isFullWidth}
        isDisabled={isDisabled}
        loadingText={loadingText}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        spinner={spinner}
        variant={variant}
      >
        {children}
      </ChakraButton>
    )
  }
  const ButtonBlockWithHref = ({ children, href, size }) => {
    return (
      <Link href={href}>
        <ChakraButton
          size={size}
          color={!colorScheme ? color : "white"}
          bgColor={!colorScheme ? bgColor : colorScheme + ".500"}
          _hover={{
            bgColor: !colorScheme ? bgColor : colorScheme + ".700",
          }}
          isActive={isActive}
          isFullWidth={isFullWidth}
          isDisabled={isDisabled}
          loadingText={loadingText}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          spinner={spinner}
          variant={variant}
        >
          {children}
        </ChakraButton>
      </Link>
    )
  }
  return (
    <>
      <Box display={["block", , "none"]}>
        {!href
          ? <ButtonBlock size="sm">{children}</ButtonBlock>
          : <ButtonBlockWithHref size="sm" href={href}>{children}</ButtonBlockWithHref>
        }
      </Box>

      <Box display={["none", , "block", , "none"]}>
        {!href
          ? <ButtonBlock size="md">{children}</ButtonBlock>
          : <ButtonBlockWithHref size="md" href={href}>{children}</ButtonBlockWithHref>
        }
      </Box>

      <Box display={["none", , , , "block"]}>
        {!href
          ? <ButtonBlock size="lg">{children}</ButtonBlock>
          : <ButtonBlockWithHref size="lg" href={href}>{children}</ButtonBlockWithHref>
        }
      </Box>
    </>
  );
};
export default Button;
