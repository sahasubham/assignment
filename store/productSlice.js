import { createSlice } from "@reduxjs/toolkit";
import { db } from "../config/firbase";
import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  query,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const initialState = {
  //loadingStatus: STATUS.IDLE,
  error: "",
  productData: "",
  showModal: false,
  message: "",
  mode: "",
  products: [],
  productId: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getroduct(state, { payload }) {
      state.productData = payload;
    },
    modalState(state, { payload }) {
      state.showModal = payload;
    },
    setMessage(state, { payload }) {
      state.message = payload;
    },
    setMode(state, { payload }) {
      state.mode = payload;
    },
    getProducts(state, { payload }) {
      state.products = payload;
    },
    setProductId(state, { payload }) {
      state.productId = payload;
    },
  },
});

export const {
  getroduct,
  modalState,
  setMessage,
  setMode,
  getProducts,
  setProductId,
} = productSlice.actions;
export default productSlice.reducer;

/*Product Add Into Fire Store*/
export function productAdd(data) {
  return async function productAddThunk(dispatch, getState) {
    try {
      addDoc(collection(db, "products"), data)
        .then(() => {
          dispatch(modalState(true));
          dispatch(setMessage("Product added successful"));
          dispatch(setMode("Success"));
        })
        .catch((error) => {
          console.log(error.message);
        });
    } catch (err) {}
  };
}
/*Product List From Fire Store*/
export function productList() {
  return async function productListThunk(dispatch, getState) {
    try {
      const dataListQuery = query(collection(db, "products"));
      const dataList = await getDocs(dataListQuery);
      const list = dataList.docs.map((product) => ({
        ...product.data(),
        id: product.id,
      }));
      dispatch(getProducts(list));
    } catch (err) {}
  };
}
/*Remove Product From Fire Store*/
export function productRemove(id) {
  return async function productRemoveThunk(dispatch, getState) {
    try {
      await deleteDoc(doc(db, "products", id));
      dispatch(modalState(true));
      dispatch(setMessage("Product removed"));
      dispatch(setMode("Success"));
    } catch (err) {}
  };
}
/*Product From Fire Store By Id*/
export function productGet(id) {
  return async function productGetThunk(dispatch, getState) {
    try {
      const proRef = doc(db, "products", id);
      const proSnap = await getDoc(proRef);
      if (proSnap.exists()) {
        dispatch(getroduct(proSnap.data()));
      }
      console.log(proSnap.data());
    } catch (err) {}
  };
}

export function productModify(data, id) {
  return async function productModifyThunk(dispatch, getState) {
    try {
      console.log(data);
      console.log(id);
      const proRef = doc(db, "products", id);
      await updateDoc(proRef, data)
        .then(() => {
          dispatch(modalState(true));
          dispatch(setMessage("Product updated successful"));
          dispatch(setMode("Success"));
        })
        .catch((error) => {
          dispatch(modalState(true));
          dispatch(setMessage(error.message));
          dispatch(setMode("Error"));
        });
    } catch (err) {}
  };
}
