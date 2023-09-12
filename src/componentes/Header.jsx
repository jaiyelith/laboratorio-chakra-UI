import { Box, Heading, Button, Stack, Flex, useMediaQuery } from '@chakra-ui/react';
import ImageBanner from '../imagen/fondo.jpeg';

const CustomHeader = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Box
        h='50vh'
        bg='black'
        bgImage={`url(${ImageBanner})`}
        bgRepeat='no-repeat'
        bgSize='cover'
      >
        <Flex
          direction='column'
          alignItems='center'
          justify='center'
          p={['0 10%', null, '0 20%']}
          h='100%'
          bg='rgb(0 0 0 / 60%)'
        >
          <Heading
            color='white'
            textAlign={['center', null, 'left']} 
            whiteSpace={['nowrap', null, 'normal']} 
            fontWeight='thin'
            letterSpacing='4px'
            fontFamily='NuevasFuentes, sans-serif'
            fontSize={['28px', null, '36px']}
          >
            DOMINA EL TERRENO
          </Heading>
          <Stack
            w={['100%', null, 'auto']}
            spacing='30px'
            marginTop='20px'
            direction={isMobile ? 'column' : 'row'} 
            alignItems={isMobile ? 'center' : 'flex-start'} 
          >
            <Button
              variant='outline'
              color='white'
              size='lg'
              letterSpacing='2px'
              fontWeight='light'
              borderRadius='0'
              borderWidth='2px'
              borderColor='white'
              cursor='pointer'
              _hover={{
                color: 'black',
                bg: 'white',
              }}
              bg='transparent'
              paddingX='20px' 
              paddingY='10px' 
            >
              VER DETALLES
            </Button>
            <Button
              variant='outline'
              color='white'
              size='lg'
              letterSpacing='2px'
              fontWeight='light'
              borderRadius='0'
              borderWidth='2px'
              borderColor='white'
              cursor='pointer'
              _hover={{
                color: 'black',
                bg: 'white',
              }}
              bg='transparent'
              paddingX='20px' 
              paddingY='10px' 
            >
              VER VIDEO
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default CustomHeader;







