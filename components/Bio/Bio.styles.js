import styled from 'styled-components'

const Text = styled.p`
  margin: 0;
  color: ${({
    theme: {
      colors: { blue }
    }
  }) => blue};
  font-size: ${({
    theme: {
      headings: { small }
    }
  }) => small[1]};
  width: 100%;
  padding: 10px 0;
`

export { Text }
