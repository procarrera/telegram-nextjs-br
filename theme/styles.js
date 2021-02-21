const styles = {
  global: {
    'html': {
      fontSize: '18px',
      lineHeight: '27px',
    },
    'body': {
      fontFamily: ["Inter, sans-serif"],
      fontSize: '1rem',
      lineHeight: '1.5rem',
      color: 'white.700'
    },
    'a': {
      fontFamily: 'display',
      color: 'blueGreen.700',
      fontWeight: 'bold',
      position: 'relative',
      transition: 'all .2s ease-in-out',
      zIndex: 50,
      _after: {
        transition: 'all .2s ease-in-out',
        content: '""',
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        bgColor: 'orange.400',
        h: '1px',
        w: '0%',
        transformOrigin: 'left'

      },
      _hover: {
        color: 'blueGreen.600',
        _after: {w: "100%"}
      }
      
    },
    'p': {
      marginTop: '0rem',
      marginBottom: '1.5rem'
    },
  },
  backgroundImage: (theme) => ({ // acho que a gente pode 
    "emojis-pattern": "url('/emojis.png')",
    "telegram-pattern": "url('/background.jpg')",
  }),
  backgroundColor: (theme) => ({
    ...theme("colors"),
    "tele-blue": "#32AFED",
  }),
}

export default styles
