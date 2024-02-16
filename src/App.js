import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./Header";
import Home from "./Home.jsx";
import About from "./About";
import Search from "./Search";
import axios from "axios";
import Showmore from "./Showmore";

function App() {

  const [searchresult, setsearchresult] = useState([]);
  const [searchtext, setsearchtext] = useState("");


  useEffect(() => {
    if (searchtext) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4676e3b67611b2e34f1ff3f5293f2bc9&language=en-US&query=${searchtext}&page=1&include_adult=false`)
        .then((req) => {
          setsearchresult(req.data)
        })
    }
  }, [searchtext])

  console.log(searchresult)



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header searchtext={searchtext} setsearchtext={setsearchtext} />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="search" element={<Search keytext={searchtext} keyresult={searchresult} />}></Route>
            <Route path="show/:id" element={<Showmore />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
