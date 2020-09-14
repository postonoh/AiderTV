import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import requests from "./requests";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {  
  
  const [{}, dispatch] = useStateValue(); 
 
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending); 
  useEffect(() => {
    
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
 

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">    
        <div className="app__Body">
          <Header setSelectedOption={setSelectedOption} />
          <Nav setSelectedOption={setSelectedOption} />
          <Results selectedOption={selectedOption} />        
        </div>
    </div>
  );
}

export default App;
