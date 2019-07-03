import * as React from "react"
import { Box } from "../index"

const Layout: React.FC = () => {
  return (
    <Box
      color="red"
      maxWidth={300}
      boxSizing="border-box"
      backgroundColor="lightgray"
      border="1px solid blue"
    >
      <header>💎 hi this is diamond</header>
      <body>🌮</body>
      <footer>👞</footer>
    </Box>
  )
}

export default Layout
