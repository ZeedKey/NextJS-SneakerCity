import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../../model/product";
import { AppDispatch, RootState } from "../../store";
import {
  addProduct,
  updateProduct,
  updateTotalSum,
} from "../../store/sessionReducer";
export const useCart = () => {
  const cart = useSelector((store: RootState) => store.sessionReducer);
  const dispatch = useDispatch<AppDispatch>();
  return {
    cart: cart.userCart,
    sum: cart.totalSum,
    setSum: (newSum: number) => {
      dispatch(updateTotalSum(newSum));
    },
    updateCart: (incomingCart: IProduct) => {
      dispatch(updateProduct(incomingCart));
    },
    pushToCart: (incomingCart: IProduct) => {
      dispatch(addProduct(incomingCart));
    },
  };
};
