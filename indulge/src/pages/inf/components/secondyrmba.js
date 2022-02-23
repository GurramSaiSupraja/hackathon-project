import React from 'react'
import Select from 'react-select'

 function secondyrmba(){
    
    var Coursename=[
        {
            value:1,
            label:"Business Analytics"
        },
        {
            value:2,
            label:"Finance"
        },
        {
            value:3,
            label:"Human Resources"
        },
        {
            value:4,
            label:"Marketing"
        },
        {
            value:5,
            label:"Operations "
        },
        {
            value:6,
            label:"General"
        },
        
    ];
  return (
    <div>
        <div className="fcontainer">
        <div className="header">
        2-Year MBA Programs
           <br/>
           Admitted through CAT
        </div>
        <div className="container">
        <Select isMulti options={Coursename}></Select>
        </div>
    </div>
    </div>
  )
}

export default secondyrmba;
