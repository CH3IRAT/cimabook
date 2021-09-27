import React from 'react'
import {Input} from 'semantic-ui-react'

function MovieFiltre({filterText}) {
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <Input  placeholder='Search...'  onChange={(e)=>{filterText(e.target.value)}}  />
          

  
        </div>
    )
}

export default MovieFiltre
