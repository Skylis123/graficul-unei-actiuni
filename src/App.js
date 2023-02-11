import Chart from "./Chart";
import {useState} from 'react';
import SearchBar from "./SearchBar";
import AddFavorite from "./AddFavorite";
import FavoriteList from "./FavoriteList";
import "./style.css";

function App() {
  
  const [companyName, setCompanyName] = useState("");
  const [companyFavorite, setCompanyFavorite] = useState([]);

  return (
    <div>
      <div>
        <SearchBar 
          companyName = {companyName} 
          setCompanyName = {setCompanyName}
        />
        <AddFavorite 
          companyName = {companyName} 
          companyFavorite = {companyFavorite} 
          setCompanyFavorite = {setCompanyFavorite}
        />
      </div>
      <div  className = "containerFavorite">
        <Chart 
          companyName = {companyName} 
        />
      </div>
        <div className = "containerFavoriteList">
          Favorite List
          <FavoriteList
            companyName = {companyName} 
            setCompanyName = {setCompanyName}
            companyFavorite = {companyFavorite} 
            setCompanyFavorite = {setCompanyFavorite}
          />
        </div>

    </div>
  )
}

export default App;
