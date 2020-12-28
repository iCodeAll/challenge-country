const Filter = (filterValue, countryData) => {
  const searchedCountries = countryData.filter(story =>
    story.name.toLowerCase().includes(filterValue.countryValue.toLowerCase())
  )
  const searchedCapital = searchedCountries.filter(story =>
    story.capital.toLowerCase().includes(filterValue.capitalValue.toLowerCase())
  )
  const searchedLanguage = searchedCapital.filter(story =>
    story.languages[0].name.toLowerCase().includes(filterValue.languageValue.toLowerCase())
  )
  const searchRegion = searchedLanguage.filter(story =>
    story.region.toLowerCase().includes(filterValue.regionValue.toLowerCase())
  )
  const searchPopularFrom = []
  if (filterValue.popularFrom) {
    searchRegion.map((item, index) => {
      if (Number(item.population) > Number(filterValue.popularFrom)) {
        searchPopularFrom.push(item)
      }
    })
  } else {
    searchRegion.map((item, index) => {
      searchPopularFrom.push(item)
    })
  }
  const searchPopularTo = []
  if (filterValue.popularTo) {
    searchPopularFrom.map((item, index) => {
      if (Number(item.population) < Number(filterValue.popularTo)) {
        searchPopularTo.push(item)
      }
    })
  } else {
    searchPopularFrom.map((item, index) => {
      searchPopularTo.push(item)
    })
  }
  return searchPopularTo
}
export default Filter
