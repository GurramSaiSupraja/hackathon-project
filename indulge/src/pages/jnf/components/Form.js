import React from 'react'

const Form = () => {
    return (
        <div>

            <div className="fcontainer">
                <div className="header">
                    Job Notification Form(2021-22)
                </div>
                <div className="header">
                    Company overview
                </div>
                <div className="container">
                    <label id='la'>Name</label>
                    <input type="text" /><br />
                    <label>Website</label>
                    <input type="text" /><br />
                    <label>Category/sector</label>
                    <input type="text" /><br />
                </div>
                <div className="header">
                    JOB DETAILS
                </div>
                <div className="container">
                    <label>Designation</label>
                    <input type="text" /><br />
                    <label>Job description</label>
                    <input type="text" /><br />

                </div>
                <div className="header">
                    SALARY DETAILS
                </div>
                <div className="container">
                    <label>CTC(in LPA)</label>
                    <input type="text" /><br />
                    <label>CTC Breakup</label>
                    <input type="text" /><br />
                    <label>Bond Details(If any)</label>
                    <input type="text" /><br />
                </div>
                
           <div className="header">
           CONTACT PERSONNEL DETAILS
                </div>
                <div className="container">
                    <table >
                        <tr>
                         <td> </td>
                         <td>Primary Contact</td>
                         <td>Secondary Contact</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>Designation</td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>Email Adress</td>
                            <td><input type="email"/></td>
                            <td><input type="email"/></td>
                        </tr>
                        <tr>
                            <td>Mobile Number</td>
                            <td><input type="text"></input></td>
                            <td><input type="text"/></td>
                        </tr>
                    </table>
                </div>
                <div className="header">
           SELECTION PROCEDURE
                </div>
                <div className="container">
                    <label>Resume shortlisting  : </label>
                    <input type="radio"></input>                  
                    <label>Yes</label>
                    <input type="radio"></input>
                    <label>No</label>
                    <br/>
                    <label>Type of Test : </label>
                    <input type="checkbox"></input>
                    <label>Technical</label>
                    <input type="checkbox"></input>
                    <label>Aptitude</label>
                    <input type="checkbox"></input>
                    <label>Both</label>
                    <input type="checkbox"></input>
                    <label>None</label>
                    <br/>
                    <label>Other Qualification Rounds :</label>
                    <input type="checkbox"></input>
                    <label>GD</label>
                    <input type="checkbox"></input>
                    <label>Casestudy</label>
                    <input type="checkbox"></input>
                    <label>Interview</label>
                    <br/>
                    <label>Total number of rounds</label>
                    <input type="text" /><br />
                    <label>Number of offers available for IIT(ISM) students (Range would be sufficient)</label>
                    <input type="text" /><br />
                    <label>Eligibility Criteria (if any)</label>
                    <input type="text" /><br />
                </div>
                <div className="header">
                ELIGIBLE COURSES & DISCIPLINES
                </div>
                <div className="container">
                (List of courses and disciplines offered at IIT (ISM) are shown below. Please highlight or check by clicking as per your requirement)
           </div>
            </div>
        </div>
    )
}

export default Form
