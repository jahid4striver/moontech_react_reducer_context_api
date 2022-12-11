import { data } from 'autoprefixer';
import React, { createContext, useEffect, useState } from 'react';
import { useReducer } from 'react';
import { useContext } from 'react';
import { actionTypes } from '../state/productReducer/actionTypes';
import { intState, productReducer } from '../state/productReducer/productReducer';

const PRODUCT_CONTEXT= createContext();


const ProductProvider = ({children}) => {

    // const [data, setData]= useState([]);

    
    const [state, dispatch ]= useReducer(productReducer, intState)
    
    console.log(state);

    useEffect(()=>{
        dispatch({type: actionTypes.PRODUCTS_START})
      fetch("products.json")
      .then(res=> res.json())
      .then(data=>
        // console.log(data),
        // setData(data)
        dispatch({type: actionTypes.PRODUCTS_SUCCESS, payload:data})
        ).catch(()=>{
            dispatch({type: actionTypes.PRODUCTS_ERROR});
        })
    },[])

  const value= {state, dispatch};


    return (
            <PRODUCT_CONTEXT.Provider value={value}>
                {children}
            </PRODUCT_CONTEXT.Provider>
    );
};


export const useProducts=()=>{
   const  context= useContext(PRODUCT_CONTEXT);
   return context;
}

export default ProductProvider;