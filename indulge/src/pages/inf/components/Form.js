import React from 'react'
import Multiselect5 from './Multiselect5'
import Multiselect4 from './Mutliselect4'
import Skillbased from './skillbased'
import Thirdyrmsc from './thirdyrmsc'
import Secondyrmba from './secondyrmba'
import Secondyrmsc from './secondyrmsc'
import Secondyrmtech from './secondyrmtech'
import Phd from './phd'
const Form = () => {
    return (
        <div>

            <div className="fcontainer">
                <form>
                <div className="header">
                    INTERNSHIP NOTIFICATION FORM(2021-22)
                    <u/>
                </div>
                <div className="header">
                    COMPANY OVERVIEW
                </div>
                <div className="container">
                    <label>Name of Company
                    <input type="text" />
                    </label><br />
                    <label>Category/sector</label>
                    <input type="text" /><br />
                    <label>Website</label>
                    <input type="text" /><br />
                </div>
                <div className="header">
                    INTERN PROFILE
                </div>
                <div className="container">
                    <label>Job Designation</label>
                    <input required type="text"/><br/>
                    <label>Job description</label>
                    <input type="text" /><br />
                    <label>Mode of Internship(Virtual/ Physical)</label>
                    <input type="text" /><br />
                    <label>Place of Posting(In case of physical internship)</label>
                    <input type="text" /><br />
                </div>

                <div className="header">
                    STIPEND DETAILS
                </div>
                <div className="container">
                    <label>Stipend per month</label>
                    <input type="text" /><br />
                    <label>PPO provision on performance basis (Yes / No)</label>
                    <input type="text" /><br />
                    <label>CTC for PPO selects</label>
                    <input type="text" /><br />
                </div>
                
           <div className="header">
           CONTACT PERSONNEL DETAILS
                </div>
                <div className="container">
                    <table >
                        <tr>
                         <td> </td>
                         <td>First Contact Person</td>
                         <td>Second Contact Person</td>
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
           
           <Multiselect4/>
        <Multiselect5/>
        <Skillbased/>
        <Thirdyrmsc/>
        <Secondyrmtech/>
        <Secondyrmba/>
        <Secondyrmsc/>
        <Phd/>
        <button type="submit">Submit</button>
        
        </form>
            </div>
            
           </div>
       
    )
}

export default Form
