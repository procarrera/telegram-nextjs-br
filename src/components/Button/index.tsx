import { Box, Button as ChakraButton } from '@chakra-ui/react'
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
}) => {

  return (
    <>
      <Box display={['block', , 'none']}> 
        <ChakraButton
          size="sm"
          color={!colorScheme ? color : 'white'}
          bgColor={!colorScheme ? bgColor : colorScheme + '.500'}
          _hover={{
            bgColor: !colorScheme ? bgColor : colorScheme + '.700'
          }}
          isActive={isActive}
          isFullWidth={isFullWidth}
          isDisabled={isDisabled}
          loadingText={loadingText}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          spinner={spinner}
          variant={variant}
        >{children}</ChakraButton>
      </Box>

      <Box display={['none', , 'block', ,'none']}>
        <ChakraButton
          size="md"
          color={!colorScheme ? color : 'white'}
          bgColor={!colorScheme ? bgColor : colorScheme + '.500'}
          _hover={{
            bgColor: !colorScheme ? bgColor : colorScheme + '.700'
          }}
          isActive={isActive}
          isFullWidth={isFullWidth}
          isDisabled={isDisabled}
          loadingText={loadingText}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          spinner={spinner}
          variant={variant}
        >{children}</ChakraButton>
      </Box>

      <Box display={['none', , , ,'block']}>
        <ChakraButton
          size="lg"
          color={!colorScheme ? color : 'white'}
          bgColor={!colorScheme ? bgColor : colorScheme + '.500'}
          _hover={{
            bgColor: !colorScheme ? bgColor : colorScheme + '.700'
          }}
          isActive={isActive}
          isFullWidth={isFullWidth}
          isDisabled={isDisabled}
          loadingText={loadingText}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          spinner={spinner}
          variant={variant}
        >{children}</ChakraButton>
      </Box>
    </>
  )

}
export default Button