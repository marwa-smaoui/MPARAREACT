import { ADD_CART, DELETE_CART } from "../const/ProductType";

const initialState = {
  shopProduct: [],
  count: 0,
};
const ShopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART:
      return {
        ...state,
        count: state.count + 1,
        shopProduct: [...state.shopProduct, payload],
      };
    case DELETE_CART:
      return {
        ...state,
        shopProduct: state.shopProduct.filter(
          (product) => product.id !== payload
        ),
      };

    default:
      return state;
  }
};

export default ShopReducer;
