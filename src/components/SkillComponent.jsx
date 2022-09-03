import React from 'react'
import JavaLogo from '../components/images/Java-logo.png'
import PythonLogo from '../components/images/Python-logo.png'
import JavaScriptLogo from '../components/images/JavaScript-logo.png'
import CSharpLogo from '../components/images/CSharp-logo.png'
import AndroidLogo from '../components/images/Android-logo.png'
import ReactLogo from '../components/images/React-logo.png'

export const SkillComponent = () => {
  return (
    <div>
        <div className='skill-schema'>
            <div className='skill-title'>
              <h1>My Skills</h1>
            </div>  
            <div className='skills'>
              <div id="java">
                <h1>Java</h1>
                <img src={JavaLogo} alt='JavaLogo'/>
              </div>
              <div id='python'>
                <h1>Python</h1>
                <img src={PythonLogo} alt='PythonLogo'/>
              </div>
              <div id='javascript'>
                <h1>JavaScript</h1>
                <img src={JavaScriptLogo} alt='JavaScriptLogo'/>
              </div>
              <div id='c-sharp'>
                <h1>C#</h1>
                <img src={CSharpLogo} alt='CSharpLogo'/>
              </div>
              <div id='android'>
                <h1>Android</h1>
                <img src={AndroidLogo} alt='AndroidLogo'/>
              </div>
              <div id='react'>
                <h1>React</h1>
                <img src={ReactLogo} alt='ReactLogo'/>
              </div>
            </div>
        </div>
    </div>
  )
}
