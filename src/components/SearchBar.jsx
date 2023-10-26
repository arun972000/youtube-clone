import { Paper, IconButton, } from "@mui/material"
import { Search } from "@mui/icons-material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const SearchBar = () => {
    const navigate=useNavigate()
    const [searchTerm,setSearchTerm]=useState("")
    const handlesubmit=(e)=>{
        e.preventDefault()
        if(searchTerm){
            navigate(`/search/${searchTerm}`)
            searchTerm("")
        }
    }
    return (
        <Paper component="form" onSubmit={handlesubmit} sx={{ borderRadius: 20, border: "1px solid #e3e3e3", boxSadoe: "none", pl: 2, mr: { sm: 5 } }}>
            <input className="search-bar" placeholder="search..." value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value) }} />
            <IconButton type="submit" sx={{ color: "red" }}><Search /></IconButton>
        </Paper>
    )
}

export default SearchBar