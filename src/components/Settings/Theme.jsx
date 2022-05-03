import React,{useContext}from 'react'
import { GlobalContext } from '../../context/ExpenseContext';

const Theme = () => {
    let{ChangeTheme,themeType}= useContext(GlobalContext); 
    function handleClick(e){
       ChangeTheme(e.target.classList[0]);
    }
    

    return (
        <div>
           <h1>Choose Theme</h1>
           <button className={`blue ${themeType==="blue"||themeType===""?"selected":{}}`} onClick={(e)=>handleClick(e)}>
            To The Sky
           </button>
           <button className={`green ${themeType==="green"?"selected":{}}`} onClick={(e)=>handleClick(e)}>
            To The Ground
           </button>
           <button className={`red ${themeType==="red"?"selected":{}}`} onClick={(e)=>handleClick(e)}>
            To The Mars
           </button>
        </div>
    )
}

export default Theme
