import * as React from "react"
import { Box } from "../index"
import styled from "styled-components"

const StyledBox = styled(Box)`
  color: ${({
    theme: {
      colors: { blue }
    }
  }) => blue};
`

const Layout: React.FC = () => {
  return (
    <StyledBox
      width={800}
      height={500}
      margin="0 auto"
      boxSizing="border-box"
      flex="content"
      flexDirection="column"
      border="1px solid blue"
    >
      <header>💎 hi this is diamond</header>
      <body>🌮</body>
      <footer>👞</footer>
    </StyledBox>
  )
}

export default Layout
