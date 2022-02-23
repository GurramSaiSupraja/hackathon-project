import React from 'react'
import Select from 'react-select'

 function phd(){
    
    var Coursename=[
        {
            value:1,
            label:"Chemistry"
        },
        {
            value:2,
            label:"Applied Geology"
        },
        {
            value:3,
            label:"Applied Geophysics"
        },
        {
            value:4,
            label:"Mathematics & Computing"
        },
        {
            value:5,
            label:"Physics "
        },
        {
            value:6,
            label:"Chemical Engineering"
        },
        {
            value:7,
            label:"Civil Engineering"
        },
        {
            value:8,
            label:"Computer Science & Engineering"
        },
        {
            value:9,
            label:"Electrical Engineering"
        },
        {
            value:10,
            label:"Electronics Engineering     "
        },
        {
            value:11,
            label:"Fuel, Minerals & Metallurgical Engineering"
        },
        {
            value:12,
            label:"Environmental Science & Engineering"
        },
        {
            value:13,
            label:"Humanities & Social Sciences"
        },
        {
            value:14,
            label:"Management Studies"
        },
        {
            value:15,
            label:"Mechanical Engineering"
        },
        {
            value:16,
            label:"Mining Machinery Engineering"
        },
        {
            value:17,
            label:"Mining Engineering"
        },
        {
            value:18,
            label:"Petroleum Engineering"
        },
        
        

    ];
  return (
    <div>
        <div className="fcontainer">
        <div className="header">
        PhD Programs
       <br/>
           
           Admitted through GATE/NET
        </div>
        <div className="container">
        <Select isMulti options={Coursename}></Select>
        </div>
    </div>
    </div>
  )
}

export default phd;
