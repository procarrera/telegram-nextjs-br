import { createBreakpoints } from "@chakra-ui/theme-tools"

// Os breakpoints são delimitados por largura mínima do dispositivo. Essas medidas são escolhidas
// com base na incidência de telas disponíveis no mercado, evitando aproximações com os limiares 
// dos dispositivos. Não faz sentido trabalharmos com breakpoints em 764, 1400 etc. uma vez que 
// a possibilidade de um navegador ou elemento extra não considerado tomar espaço da tela, o 
// usuário acaba por enxergar os "breaks" em si.

const breakpoints = createBreakpoints({
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1600px",
})

export default breakpoints