const formatDate = date => {
  date = date.split('-');
  return`${date[2]}/${date[1]}/${date[0]}` 
}

export default formatDate