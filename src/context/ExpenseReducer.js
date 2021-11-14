export default (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
      case "DELETE_EXPENSE":
        return{
          ...state,
          expenses:state.expenses.filter((item)=>item.id!==action.payload)
        }
    default:
      return state;
  }
};
