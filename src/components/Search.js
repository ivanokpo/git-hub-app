import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    //state for input in searchbar
    const [input, setInput] = useState("");
    const [repos, setRepos] = useState([]);
    
  
    //method for when the search bar is pressed, triggering a search in the database
    const onSearch = (e) => {
    const value = e.target.value
      const searchInput = value.toLowerCase();
      setInput(searchInput);
      console.log(input);
      
    };

    const searchGithub = () => {
        axios({
            method: "get",
            url: `https://api.github.com/users/${input}/repos`
        }).then(res => {
            setRepos(res.data)
            console.log(repos.name)
        })
    }
  
    return (
      <>
        <TextField 
        label="Search Git Repository"
        color="secondary"
        onChange={(e) => onSearch(e)}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => searchGithub()}>
        <AiOutlineSearch/>
        </IconButton>
          
        
      
      </>
    );
  };
  
export default Search;