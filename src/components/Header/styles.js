import styled from 'styled-components';
import { Grid, IconButton } from '@material-ui/core'

export const GridContainer = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Logo = styled.img`
  margin-right: 30px;
  height: 60px;
`

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`

export const UploadFileButton = styled(IconButton)`
  background: linear-gradient(45deg, #d4298f 30%, #e62c53 90%);
  color: white !important;
  margin: 0 40% !important;
`