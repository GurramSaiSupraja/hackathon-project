import React from 'react'
import Form from './components/Form'
import Multiselect5 from './components/Multiselect5'
import Multiselect4 from './components/Mutliselect4'
import Skillbased from './components/skillbased'
import Thirdyrmsc from './components/thirdyrmsc'
import Secondyrmba from './components/secondyrmba'
import Secondyrmsc from './components/secondyrmsc'
import Secondyrmtech from './components/secondyrmtech'
import Phd from './components/phd'
import './jnfForm.css';
const JnfForm = () => {
  return (
    <div>

        <Form/>
        <Multiselect4/>
        <Multiselect5/>
        <Skillbased/>
        <Thirdyrmsc/>
        <Secondyrmtech/>
        <Secondyrmba/>
        <Secondyrmsc/>
        <Phd/>
    </div>
  )
}

export default JnfForm;
