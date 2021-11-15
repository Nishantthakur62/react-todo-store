import React,{useContext} from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import SettingsWrapper from './SettingsWrapper';

const UserSettings = () => {
    const theme= useContext(ThemeContext)
    const darkMode=theme.state.darkMode;
    return (
        <div>
           <div className={`"form-heading" ${!darkMode?"form-heading-light":"form-heading-dark"}`}>
                <div className="container">
                    <h1>Settings</h1>
                </div>
            </div>
            <SettingsWrapper/>
        </div>
    )
}

export default UserSettings
