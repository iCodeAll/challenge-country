import React from 'react'
import { TableBody, TableRow, TableCell } from '@material-ui/core'
const Body = (props) => {
  return (
    <TableBody>
      {props.props.data.map((item, index) => (
        <TableRow key={index}>
          <TableCell align='left'>{item.name}</TableCell>
          <TableCell align='left'>{item.capital}</TableCell>
          <TableCell align='left'>{item.languages[0].name}</TableCell>
          <TableCell align='left'>{item.region}</TableCell>
          <TableCell align='left'>{item.population}</TableCell>
          <TableCell align='left'>{item.timezones[0]}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}
export default Body
