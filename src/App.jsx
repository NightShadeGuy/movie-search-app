import React, { useState, useEffect } from 'react'
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Movie from "./components/Movie"

export default function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [inputVal, setInputVal] = useState(""); 
  const [search, setSearch] = useState("");
  const [login, setLogin] = useState(false);
  const [formData, setFormData] = useState(
    {
        email: "",
        password: "",
        isRemember: false,
        successFullyLogin: false,
        darkMode: false
    }
);

  const defaultVal = search.length > 0 ? search : "Dragon ball super";

    useEffect(() => {
    const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${defaultVal}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'You should put your  RapidAPI-Key here',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };
    
    async function getApi() {
      const response = await fetch(url, options);
      const result = await response.json();
      setMoviesData(result.d)
      console.log(result.d);
    }  

    getApi(); 
  }, [search])          
 

  function handleChange(event) { 
    setInputVal(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      setSearch(inputVal);
      setInputVal(""); 
    } 
  }

  function handleFormData(event) {
    const {name, value, type, checked} = event.target;
    setFormData(prevForm => {
        return {
            ...prevForm,
            [name]: type === "checkbox" ? checked : value
        }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLogin(false);
    setFormData(prevFormData => {
        return {...prevFormData, successFullyLogin: true}
    })
  }

  function handleLogin() {
    setLogin(true);  
  };

  const moviesList = moviesData.map(item => {
   return  <Movie key={item.id}
                  id={item.id}
                  title={item.l}
                  img={item.i.imageUrl}                
                  rank={item.rank}
                  cast={item.s}
                  yr={item.y}
                  formData={formData}            
            />
})  

const fontColor = {
   color: formData.darkMode ? "black" : "",
   background: formData.darkMode ? "linear-gradient(120deg, white, whitesmoke)" : "linear-gradient(120deg, black, rgb(18, 18, 79), black)"
}

  return (
     <div>
        <Navbar inputVal={inputVal}
                handleChange={handleChange} 
                handleKeyPress={handleKeyPress}
                formData={formData}
                setFormData={setFormData}
                handleFormData={handleFormData}
                handleSubmit={handleSubmit}
                login={login}
                setLogin={setLogin}
                handleLogin={handleLogin}
        />
        <Sidebar />
          <main className="content" style={fontColor}>
              { search.length > 0 && <h2 className="container-search" style={fontColor}>Search result for "{search.toLowerCase()}"</h2> }
              <div className="container" style={{ background: formData.darkMode ? "linear-gradient(white, whitesmoke)" : ""}}>
                  {moviesList}
              </div>  
              { formData.successFullyLogin && <h2 className="container-search" style={fontColor}>Favorites</h2> }
          </main>      
     </div>
  )
}


