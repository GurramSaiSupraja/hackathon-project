
import React from 'react'
import Select from 'react-select'

 function thirdyrmsc(){
    
    var Coursename=[
        {
            value:1,
            label:"Applied Geology"
        },
        {
            value:2,
            label:"Applied Geophysics"
        },
        
    ];
  return (
    <div>
        <div className="fcontainer">
        <div className="header">
        3-Year MSc. Tech Programs
           <br/>
           Admitted through JAM
        </div>
        <div className="container">
        <Select isMulti options={Coursename}></Select>
        </div>
    </div>
    </div>
  )
}

export default thirdyrmsc;
