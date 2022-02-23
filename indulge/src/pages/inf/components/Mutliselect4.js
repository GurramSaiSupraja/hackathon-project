import React from 'react'
import Select from 'react-select'

 const Multiselect4 = () => {
    
    var Coursename=[
        {
            value:1,
            label:"Chemical Engineering"
        },
        {
            value:2,
            label:"Civil Engineering"
        },
        {
            value:3,
            label:"Computer Science and Engineering"
        },
        {
            value:4,
            label:"Electrical Engineering"
        },
        {
            value:5,
            label:"Electrical & Communication Engineering"
        },
        {
            value:6,
            label:"Electrical & Instrumentation Engineering"
        },
        {
            value:7,
            label:"Engineering Physics"
        },
        {
            value:8,
            label:"Environmental Engineering"
        },
        {
            value:9,
            label:"Mechanical Engineering"
        },
        {
            value:10,
            label:"Mineral & Metallurgical Engineering"
        },
        {
            value:11,
            label:"Mining Engineering"
        },
        {
            value:12,
            label:"Mining Machinery Engineering"
        },
        {
            value:13,
            label:"Petroleum Engineering"
        },
    ];
  return (
    <div>
        <div className="fcontainer">
        <div className="header">
           4-Year B.Tech Programs
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

export default Multiselect4
