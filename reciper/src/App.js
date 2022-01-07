import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App=()=>{
  const APP_ID='42b11f1e';
  const APP_KEY='a3770c43d97175789cb9d55b05b25114';
  const [recipes,setRecipes]=useState([]);
  const[search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken');

  useEffect(async ()=>{getRecipes();},[query]);
  
const getRecipes= async()=>
{
const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
const data= await response.json();
setRecipes(data.hits);
console.log(data.hits); 
};

const updateSearch=e=>{
  setSearch(e.target.value);
};

const getSearch=e=>{
  e.preventDefault();
  setQuery(search);
  setSearch('')
}

  return(
<div className='App'>
<form onSubmit={getSearch}> 
  <input type="text" className='search-bar m-2' value={search}onChange={updateSearch}>

  </input>
  <button type='submit' className='search-button'>
    Search
  </button>
</form>
<div className='row justify-content-center '>
{recipes.map(recipe=>(
 
 <div className='col-xl-3 rounded  col-md-5 recipes m-2 '>

 <Recipe 
  key={recipe.recipe.label}
  title={recipe.recipe.label}
   calories={recipe.recipe.calories}
  image={recipe.recipe.image} 
  ingredients={recipe.recipe.ingredients}
  url={recipe.recipe.url}
  >
  
  </Recipe>
  </div>
  
))}
</div>;
</div>

  );
}

export default App;
