import React, { useState } from 'react'


export default function SearchBar(props) {

  const [tempCompanyName , setTempCompanyName] = useState("");

  const handleCompanyName = (event) => {
      setTempCompanyName(event.target.value);
  }

  const searchCompanyName = () => {
      props.setCompanyName(tempCompanyName);
  }

  return (
      <div>
          <input onChange = {handleCompanyName}/>
            <button onClick = {searchCompanyName}> Search </button>
      </div>
)
}
