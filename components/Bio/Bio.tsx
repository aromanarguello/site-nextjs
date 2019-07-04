import * as React from 'react'
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
`

const Bio: React.FC = () => {
  return (
    <Text>
      {
        'I am a front-end engineer based in Miami, FL. I work for\nGeneral Electric in the Digital Technology Workplace space. I am part of\n\nan amazing team and help build amazing components and tools using my favorite\n\ntechnology, React. I am a huge proponent of best practices, testing and accessability.\n\nI am also supporing the creation of an open source project based out of Miami! 🌴'
      }
    </Text>
  )
}

export default Bio
