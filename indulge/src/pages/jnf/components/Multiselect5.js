
import React from 'react'
import Select from 'react-select'

 function Multiselect5(){
    
    var Coursename=[
        {
            value:1,
            label:"Computer Science & Engineering"
        },
        {
            value:2,
            label:"Mathematics & Computing"
        },
        {
            value:3,
            label:"Applied Geology"
        },
        {
            value:4,
            label:"Applied Geophysics"
        },
        
    ];
  return (
    <div>
        <div className="fcontainer">
        <div className="header">
           5-Year Dual Degree/Integrated M.Tech Programs
           <br/>
           Admitted through JEE ADVANCED
        </div>
        <div className="container">
        <Select isMulti options={Coursename}></Select>
        </div>
    </div>
    </div>
  )
}

export default Multiselect5;
