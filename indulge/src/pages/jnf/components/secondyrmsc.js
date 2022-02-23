
import React from 'react'
import Select from 'react-select'

 function Secondyrmsc(){
    
    var Coursename=[
        {
            value:1,
            label:"Chemistry"
        },
        {
            value:2,
            label:"Mathematics & Computing"
        },
        {
            value:3,
            label:"Physics"
        },
        
    ];
  return (
    <div>
        <div className="fcontainer">
        <div className="header">
        2-Year MSc. Tech Programs
           <br/>
           Admitted through JAM
        </div>
        <div className="container">
        <Select isMulti options={Coursename}/>
        </div>
    </div>
    </div>
  )
}
export default Secondyrmsc;
