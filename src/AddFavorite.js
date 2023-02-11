import React from 'react'

export default function AddFavorite(props) {
  
  const addToFavorite = () => {
    props.setCompanyFavorite([...props.companyFavorite, props.companyName]);
  }  

  return (
    <div>
      <button onClick = {addToFavorite}>Add to Favorite</button>
    </div>
  )
}
