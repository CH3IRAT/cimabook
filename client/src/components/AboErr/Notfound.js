import React from 'react'
import { useHistory } from 'react-router'
import { Button } from "react-bootstrap";

export const Notfound = () => {
    const history = useHistory();
    const handleClick =() =>{
        history.push("/")
    }

    return (

<div> 
<Button onClick={handleClick}  style={{width:"250", textAlign:"center"}} >  Home </Button>


     <img src="https://wallpaperboat.com/wp-content/uploads/2020/12/03/62926/error-404-06.jpg" style={{width:"100%"}} />


</div>


    )}
