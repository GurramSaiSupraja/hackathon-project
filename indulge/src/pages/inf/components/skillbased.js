import React from 'react'
import Select from 'react-select'

 function skillbased(){
    
    var Coursename=[
        {
            value:1,
            label:"C, C++, Java, Python, etc."
        },
        {
            value:2,
            label:"Full Stack Development (Frontend/Backend)"
        },
        {
            value:3,
            label:"AI/ ML/DL, Data Science  "
        },
        {
            value:4,
            label:"Business/Data Analytics, Product Management"
        },
        {
            value:5,
            label:"Others"
        },
        
    ];
  return (
    <div>
        <div className="fcontainer">
        <div className="header">
        Skill Based Hiring
           <br/>
           Students with certified technical expertise in the following skills (from Coursera, Udemy etc.)
        </div>
        <div className="container">
        <Select isMulti options={Coursename}></Select>
        </div>
    </div>
    </div>
  )
}

export default skillbased;
