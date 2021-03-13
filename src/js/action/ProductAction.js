import {ADD_PRODUCT,DELETE_PRODUCT,EDIT_PRODUCT,CHANHGE_QTE, ADD_CART, DELETE_CART}from '../const/ProductType'

export const addProduct=(payload)=>{
  //payload:id, name , qte,description,price
    return{
        type:ADD_PRODUCT,
        payload,
    };
};
export const deleteProduct=(payload)=>{
   //payload:id
    return{
        type:DELETE_PRODUCT,
        payload,
    };
};

export const editProduct=(payload)=>{
   //payload:id,newProduct(name,qte,description,price)
    return{
        type:EDIT_PRODUCT,
        payload,
    };
};
export const changeQte=(payload)=>{
    //payload: id,qte
    return{
         type:CHANHGE_QTE,
         payload,
     };
 };
 export const addCart=(payload)=>{
    //payload:id
    return{
         type:ADD_CART,
         payload,
     };
 };
 export const deleteCart=(payload)=>{
    //payload:id
    return{
         type:DELETE_CART,
         payload,
     };
 };
 