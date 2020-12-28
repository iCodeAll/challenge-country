import React, { useState, useEffect } from 'react'
import CountryTable from './component/CountryTable'
import Filter from './component/Filter'
import tableHeader from './component/data/tableHeaderData.json'
import { API_ENDPOINT } from './component/API'
const App = () => {
  const [initData, setInitData] = useState([])
  const [countryData, setCountryData] = useState([])
  const [searchValue, setSearchValue] = useState({ regionValue: '', countryValue: '', capitalValue: '', languageValue: '', popularFrom: '', popularTo: '' })
  useEffect(() => {
    fetch(`${API_ENDPOINT.url}`)
      .then(response => response.json())
      .then(result => {
        setCountryData(result)
        setInitData(result)
      })
  }, [])
  const changeValue = (name, value) => {
    if (name === 'delete') {
      const filterValue = { regionValue: '', countryValue: '', capitalValue: '', languageValue: '', popularFrom: '', popularTo: '' }
      setSearchValue({ regionValue: '', countryValue: '', capitalValue: '', languageValue: '', popularFrom: '', popularTo: '' })
      Filter(filterValue, initData)
      setCountryData(initData)
    } else {
      const filterValue = { ...searchValue, [name]: value }
      setSearchValue({ ...searchValue, [name]: value })
      const search = Filter(filterValue, initData)
      setCountryData(search)
    }
  }
  return (
    <CountryTable data={countryData} header={tableHeader} parentMethod={changeValue} searchValues={searchValue} />
  )
}
export default App
