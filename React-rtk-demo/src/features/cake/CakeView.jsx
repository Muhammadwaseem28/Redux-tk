import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {ordered ,restocked} from './cakeSlice'


const CakeView = () => {
    const noofcakes=useSelector(state=>state.cake.noOfCakes)
    const dispatch=useDispatch()
  return( <div>
           <h2>No Of Cakes : {noofcakes}</h2>
           <button onClick={()=>dispatch(ordered())}>Order Cake</button>
           <button onClick={()=>dispatch(restocked(5))}>Restock cake</button>
  </div>
  )
};

export default CakeView;
