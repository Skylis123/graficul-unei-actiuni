import React from 'react'
import "./style.css";

export default function FavoriteList(props) {

  const deleteFavorite = (name) => {
    props.setCompanyFavorite(props.companyFavorite.filter((stocks) => stocks != name)); 
  }  
  
  const searchFavorite = (name) => {
    props.setCompanyName(name);
  }

  return (
    <div>
        {props.companyFavorite.map((names) => {
            return (
                <div key = {names} className = "favoriteList">
                    <button onClick = {() => deleteFavorite(names)} className = "deleteFavoriteBtn"> X </button>
                    <label onClick = {() => searchFavorite(names)} className = "favoriteElements">{names}</label>
                </div>
            )
        })}       
    </div>
  )
}
