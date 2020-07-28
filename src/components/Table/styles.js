import styled from 'styled-components';
import { TableContainer, TableRow } from '@material-ui/core'

export const StyledTableContainer = styled(TableContainer)`
  max-height: 60vh;
  margin: 30px 0;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-track {
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
  }
`;

export const StyledTableRow = styled(TableRow)`

  &:nth-of-type(even) {
    background: #f5f5f5;
  }
`
