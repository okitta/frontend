// 1. Import `extendTheme`
import { ThemeConfig, extendTheme } from "@chakra-ui/react"


const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme(
    {config},
    {
  colors: {
    brand: {
      100: "#3d84f7",
    },
  },
  styles:{
    global: ()=>{
        body:{
            bg:'whiteAlpha.200'
        }
    }
  }
})