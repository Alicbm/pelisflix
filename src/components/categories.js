import React from "react"
import { AppContext } from "./appContext"
import '../styles/categories.css'
import { Link } from "react-router-dom";
import { useFunctionsJson } from "../hooks/useFunctionsJson";

export function Categories(){
  const { selectOneCategory } = React.useContext(AppContext); 
  const { eachCategory } = useFunctionsJson();

  return(
    <div className="categories-container">
      <h2 className="categories-title">Categories</h2>
      {eachCategory?.genres.map(item => (
        <Link 
          to='/category' 
          className="categories-name"
          onClick={() => selectOneCategory(item)}
          key={item.id}
          id={item.id}
        >
          <div className="categories-name">{item.name}</div>
        </Link>
      ))}
    </div>
  )
}