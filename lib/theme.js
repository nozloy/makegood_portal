import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('##ffffff', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#ff17a6', '#ff63c3')(props),
      textUnderlineOffset: 3,
    })
  },
  Button: {
    variants: {
      'makegoodButton': {
        bg:'#B22181',
        color:'whiteAlpha.900',
        _hover: {
          bg: '#B93295',
          shadow: '0 4px 6px -2px #dc98ca '}
      }
    }

  }

}

const fonts = {
  heading: 'Roboto',
}

const colors = {
  grassTeal: '#B22181',
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const shadows = {
  //outline: '0 0 0 3px #B22181',
}


const theme = extendTheme({ config, styles, components, fonts, colors, shadows })
export default theme