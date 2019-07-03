import styled from "styled-components"
import {
  space,
  color,
  flex,
  width,
  display,
  maxWidth,
  border,
  MaxWidthProps,
  SpaceProps,
  ColorProps,
  FlexProps,
  WidthProps,
  BorderProps,
  compose
} from "styled-system"

export type ButtonProps = SpaceProps &
  FlexProps &
  ColorProps &
  WidthProps &
  MaxWidthProps &
  BorderProps & { boxSizing?: string }

export const layout = compose(
  space,
  display,
  width,
  maxWidth,
  color,
  border
)

const Box = styled.div<ButtonProps>(
  {
    boxSizing: "border-box",
    minWidth: 0
  },
  flex,
  layout
)

export default Box
