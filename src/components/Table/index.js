import React from 'react'
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { StyledTableContainer, StyledTableRow } from './styles'

const LeadsTable = (props) => {
  return (
    <StyledTableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Total {props.tableData.length}</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>E-mail</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          { props.tableData.map((entry, index) => (
            <StyledTableRow key={entry.email}>
              <TableCell>{index}</TableCell>
              <TableCell>{entry.Nome}</TableCell>
              <TableCell>{entry.email}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}

export default LeadsTable