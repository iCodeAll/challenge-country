import React from 'react'
import { TableHead, TableRow, TableCell } from '@material-ui/core'
const Header = (props) => {
  return (
    <TableHead>
      <TableRow>
        {props.props.header.headerData.map((item, index) => {
          return (
            <TableCell key={index} align='left'><b>{item.name}</b></TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
}
export default Header
