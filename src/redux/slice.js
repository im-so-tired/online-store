import { createSlice } from "@reduxjs/toolkit";

let constArray = [];

const slice = createSlice({
  name: "main",
  initialState: {
    catalog: [],
    loading: false,
    basketItems: [],
    total: 0,
  },
  reducers: {
    toggleLoading(state, action) {
      state.loading = action.payload.bool;
    },
    changeCatalog(state, action) {
      state.catalog = action.payload.array;
      constArray = action.payload.array;
    },
    addBasketItem(state, action) {
      let newArray = state.basketItems.filter(
        (item) => item.id === action.payload.item.id
      );
      newArray.length === 0
        ? state.basketItems.push({ ...action.payload.item, amount: 1 })
        : (state.basketItems = state.basketItems.map((item) => {
            if (item.id === action.payload.item.id) {
              item.amount += 1;
            }
            return item;
          }));
    },
    deleteBasketItem(state, action) {
      state.basketItems = state.basketItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    getTotal(state) {
      let total = 0;
      state.basketItems.map((item) => {
        total += item.price * item.amount;
      });
      state.total = total;
    },
    changeAmount(state, action) {
      state.basketItems = state.basketItems
        .map((item, index) => {
          if (item.id === action.payload.id) {
            item.amount = Number(action.payload.amount);
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
    },
    filter(state, action) {
      if(action.payload.bool){
				state.catalog = state.catalog.concat(constArray.filter(item=>item.type===action.payload.type))
			}else{
				state.catalog = state.catalog.filter(item=>item.type!==action.payload.type)
			}
    },
  },
});
export const fetchData = () => {
  return async function (dispatch) {
    try {
      dispatch(toggleLoading({ bool: true }));
      const response = await fetch("http://localhost:3001/clothes");
      const data = await response.json();
      dispatch(changeCatalog({ array: data }));
      dispatch(toggleLoading({ bool: false }));
    } catch (error) {
      throw error;
    }
  };
};

export default slice.reducer;
export const {
  toggleLoading,
  changeCatalog,
  addBasketItem,
  deleteBasketItem,
  getTotal,
  changeAmount,
  filter,
} = slice.actions;
