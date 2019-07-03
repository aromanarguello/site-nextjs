import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    light: "#f9f7f7",
    gray: "#dbe2ef",
    blue: "#3f72af",
    navy: "#112d4e"
  },
  headings: {
    small: {
      fontSize: ["1em", "1.25em", "1.5em"]
    },
    big: {
      fontSize: ["2em", "2.5em", "3em"]
    }
  }
}

interface IThemeProviderProps {
  children?: React.ReactElement
}

export const Theme = ({ children }: IThemeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
