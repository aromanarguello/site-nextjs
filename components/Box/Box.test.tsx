import * as React from "react"
import { render } from "@testing-library/react"
import Box from "./Box"

test("Box snapshot", () => {
  const box = render(<Box />)
  expect(box).toMatchSnapshot()
})
