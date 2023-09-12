import { extendTheme } from '@chakra-ui/react'

const customFonts = {
  heading: 'NuevasFuentes, sans-serif',  
  body: 'NuevasFuentes, sans-serif'     
}

export const customTheme = extendTheme({ fonts: customFonts })  