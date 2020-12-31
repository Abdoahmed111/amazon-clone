export const initialState = {
  basket: [],
};

// Selector
export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    // ADD TO BASKET CASE
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    // REMOVE FORM BASKET CASE
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product ( id: ${action.id} as its not in basket!d)`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    // SET USER CASE
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
