import React, { Fragment ,useContext} from 'react'
import Layout from './Layout'
import Theme from './Theme'
import { ThemeContext } from '../../context/ThemeContext'

const SettingsWrapper = () => {
    const theme= useContext(ThemeContext)
    const darkMode=theme.state.darkMode;
    return (
        <Fragment>
            <div className= {`SettingsWrapper ${!darkMode?"light":"dark"}`}  >
            <div className="Layout">
                <Layout/>
            </div>
            
            <div className="Theme">
                <Theme/>
            </div>
           </div>
        </Fragment>
    )
}

export default SettingsWrapper
