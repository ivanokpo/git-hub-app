import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import { AiOutlineSearch } from "react-icons/ai";
import Paper from '@mui/material/Paper';
import Results from "./Results";

const Search = () => {
    //state for input in searchbar
    const [input, setInput] = useState("");
    //state for fetched data
    const [repos, setRepos] = useState([]);
    
  
    //method for when the search bar is pressed, triggering a search in the database
    const onSearch = (e) => {
    const value = e.target.value
      
      setInput(value.toLowerCase());
      console.log(input);
      
    };

    const searchGithub = () => {
        axios({
            method: "get",
            url: `https://api.github.com/users/${input}/repos`
        }).then(res => {
            setRepos(res.data)
            console.log(repos)
        })
    }
  
    return (
      <>
      <Paper
      component="form"
      sx={{ display: 'flex', alignItems: 'center', width: 400 }}
    >
        <TextField 
        label="Search Git Repository"
        color="secondary"
        onChange={(e) => onSearch(e)}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => searchGithub()}>
        <AiOutlineSearch/>
        </IconButton>
        </Paper>

        <Results data={repos}/>
      </>
    );
  };
  
export default Search;