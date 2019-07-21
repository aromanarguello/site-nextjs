import * as React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 250px;
  height: 300px;
  border: ${({
    theme: {
      colors: { navy }
    }
  }) => `1px solid ${navy}`};
`

const Avatar: React.FC = () => {
  return (
    <Image
      src="https://res.cloudinary.com/dzeqyvxo2/image/upload/c_scale,h_1124,q_42/v1562175024/headshot_mfr0uy.jpg"
      alt="avatar"
    />
  )
}

export default Avatar
