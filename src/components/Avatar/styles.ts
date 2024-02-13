import styled from 'styled-components'

interface FotoPerfilProps {
  src: string
}

export const FotoPerfil = styled.img<FotoPerfilProps>`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-bottom: 24px;
`
