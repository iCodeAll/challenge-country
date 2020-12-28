import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Table, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Select, MenuItem, FormControl, Button } from '@material-ui/core'

import Header from './table/Header'
import Body from './table/Body'
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  selectWidth: {
    width: '100%'
  },
  range: {
    display: 'flex'
  }
}))
const CountryTable = (props) => {
  const classes = useStyles()
  const handleChange = (name) => (event) => {
    if (name === 'delete') {
      props.parentMethod(name, 1)
    } else {
      props.parentMethod(name, event.target.value)
    }
  }
  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            {props.header.headerData.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <TableCell key={index} align='left'>
                    <>
                      {item.search ? (
                        <>
                          {item.component === 'input' ? (
                            <TextField id='outlined-basic' label={item.searchLabel} value={item.value === 'countryValue' ? props.searchValues.countryValue : (item.value === 'capitalValue' ? props.searchValues.capitalValue : props.searchValues.languageValue)} onChange={handleChange(`${item.value}`)} variant='outlined' />
                          ) : (
                            <>
                              {
                                item.component === 'dropbox' ? (
                                  <FormControl variant='outlined' className={classes.selectWidth}>
                                    <Select
                                      labelId='demo-simple-select-outlined-label'
                                      id='demo-simple-select-outlined'
                                      value={props.searchValues.regionValue}
                                      onChange={handleChange('regionValue')}
                                      label={item.searchLabel}
                                    >
                                      {props.header.regionData.map((list, i) => {
                                        return (
                                          <MenuItem key={i} value={list.name}>{list.name}</MenuItem>
                                        )
                                      })}
                                    </Select>
                                  </FormControl>
                                ) : (
                                  <>
                                    <div className={classes.range}>
                                      <TextField id='outlined-basic1' label='From' type='number' value={props.searchValues.popularFrom} variant='outlined' onChange={handleChange('popularFrom')} />
                                      <TextField id='outlined-basic2' label='To' variant='outlined' type='number' value={props.searchValues.popularTo} onChange={handleChange('popularTo')} />
                                    </div>
                                  </>
                                )
                              }
                            </>
                          )}
                        </>
                      ) : (
                        <Button variant='contained' color='primary' onClick={handleChange('delete')}>
                          Clear
                        </Button>
                      )}
                    </>
                  </TableCell>
                </React.Fragment>
              )
            })}
          </TableRow>
        </TableHead>
        <Header props={props} />
        <Body props={props} />
      </Table>
    </TableContainer>
  )
}
export default CountryTable
