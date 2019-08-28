const initialState = {
  banks: [
    { "id": "00000001", "bank": "bankinter", "name": "bankinter", "tin": 1.7, "tae": 1, "min": 300, "max": 3000, "period": 12, "country": "España", "hacienda": 1, "impuesto": 2 },
    { "id": "03133311", "bank": "Banco Park", "name": "cuenta park", "tin": 20, "tae": 4, "min": 1, "max": 1000, "period": 1, "country": "España", "hacienda": 0.5, "impuesto": 2.4 }
  ],
  money: "",
  taeSavings: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MONEY":
      return { ...state, money: action.money }
    case "TAE_SAVINGS":
      return { ...state, taeSavings: [...state.taeSavings, action.taeSavings] }
  }
  return state;
}

export default rootReducer;