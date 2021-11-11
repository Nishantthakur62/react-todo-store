export const themeReducer=(state, action) =>
  {
    switch (action.type)
    {
      case"DARKMODE":return {darkMode:true};
      case"LIGHTMODE":return{darkMode:false};
      default:return state;
    }
  };
  //what is action?
  //->
  
  //what is state?
  //->state is mapped with dispatch with the help of reducer 

  //what is DarkMode?
  //->DarkMode is a boolean variable for the context.(aka context's variable)

  //what is type?
  //->type is the case name.(type:"DARKMODE" or type: "LIGHTMODE")