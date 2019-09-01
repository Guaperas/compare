const initialState = {
  banks: [
    { "id": "00000001", "bank": "bankinter", "name": "bankinter", "tin": 1.7, "tae": 1, "min": 300, "max": 3000, "period": 12, "country": "España", "hacienda": 1, "impuesto": 2 },
    { "id": "03133311", "bank": "Banco Park", "name": "cuenta park", "tin": 20, "tae": 4, "min": 1, "max": 1000, "period": 1, "country": "España", "hacienda": 0.5, "impuesto": 2.4 }
  ],
  money: "",
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MONEY":
      return { ...state, money: action.money }
    case "SAVINGS":
      const key = action.savings.id;
      const obj = state.banks.filter(item => item.id === key)[0];

      if (typeof obj !== "undefined" && typeof obj.id !== "undefined" && obj.id === key) {
        return {
          ...state, banks: [...state.banks].map((item) => {
            if (item.id === key) {
              return { ...item, savings: action.savings.savings }
            }
            return item;
          })
        }
      }
      else {
        return { ...state, banks: [...state.banks, action.savings] }
      }
  }
  return state;
}

export default rootReducer;

//return { ...state, taeSavings: [...state.taeSavings] }

// if(state.taeSavings.id !== action.taeSavings.id){
//   return { ...state, taeSavings: [...state, action.taeSavings] }
//   }
//   else{
//     return { ...state, taeSavings: state.taeSavings.find(item => item.id === action.taeSavings.id).id = action.taeSavings.id}
//   }
//return { ...state, taeSavings: [...state.taeSavings].splice(state.taeSavings.indexOf(item), 1, action.taeSavings) }
//      const item = state.taeSavings.find(item => item.id === action.taeSavings.id)