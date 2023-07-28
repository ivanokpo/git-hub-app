import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import { AiOutlineSearch } from "react-icons/ai";
import Paper from '@mui/material/Paper';
import Results from "./Results";
import styled from "styled-components";
import Filter from './Filter';


const Search = () => {
    //state for input in searchbar
    const [input, setInput] = useState("");
    //state for fetched data
    const [repos, setRepos] = useState([]);

    
    useEffect(() => {
        
        setRepos([]);
    }, [input])
    
    //method for when the search bar is pressed, triggering a search in the database
    const onSearch = (e) => {
        e.preventDefault();
        const value = e.target.value

      setInput(value.toLowerCase());
      
      
    }; 

    const searchGithub = () => {
        console.log(input);
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
      <SearchBar>
          
        <TextField 
        label="Search Git Repository"
        id="filled-required"
        color="primary"
        variant='filled'
        onChange={(e) => onSearch(e)}
        sx={{ width: '30rem' }}
        />
        <IconButton type="button" sx={{ marginTop: '30px', marginLeft: '10px' }} aria-label="search" onClick={() => searchGithub()}>
        <AiOutlineSearch/>
        </IconButton>
        </SearchBar>
        <Filter repos={repos}/>
        
      
      
      </>
    );
  };

  const SearchBar = styled.div`


  
  `
  
export default Search;
