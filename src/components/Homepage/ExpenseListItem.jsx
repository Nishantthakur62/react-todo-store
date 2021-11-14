import React, { Fragment, useContext } from "react";
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete, AiOutlineDelete } from 'react-icons/ai';
import { useHistory } from "react-router";
import { GlobalContext } from "../../context/ExpenseContext";
import { ThemeContext } from "../../context/ThemeContext";

const ExpenseListItem = ({idx,item}) => {
  let calcdate = item.date.split("-");
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let monthName=month[Number(calcdate[1]-1)] 
  let dateNumber=Number(calcdate[2])
  let yearNumber=Number(calcdate[0])
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  let {DeleteExpense}=useContext(GlobalContext)

  const DeleteItem=(idx)=>{
    DeleteExpense(idx)
  }
  return (
    <Fragment>
      <li className={`expense-item ${darkMode ? "item-dark" : "item-light"}`} key={idx} item={item} >
      <span>
      
      <h5>{item.description}</h5>
        
           <h6>{dateNumber}-{monthName}-{yearNumber}</h6>
      </span>
      <div className="right">

      <strong>₹{parseInt(item.amount)} 
      </strong>
      <span className="editIcon" >
      <FaEdit/>
      </span>
      <span className="deleteIcon" onClick={()=>DeleteItem(item.id)}>
        <AiFillDelete/>
      </span>
      </div>
    </li>
    </Fragment>
    
  );
};

export default ExpenseListItem;
