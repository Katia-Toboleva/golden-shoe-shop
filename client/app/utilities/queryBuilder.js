export  const queryBuilder = (queries) => {
  const arr = Object.entries(queries).filter(item => !!item[1]);
  return arr.reduce((acc, currentVal, index) => {
    return index === 0 ?
    `${acc}?${currentVal[0]}=${currentVal[1]}` :
    `${acc}&${currentVal[0]}=${currentVal[1]}`
  }, '')
}