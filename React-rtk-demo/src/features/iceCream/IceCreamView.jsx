import React from "react";
import { useSelector ,useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";
const IceCreamView = () => {
   
    const noOfIceCreams=useSelector(state=>state.iceCream.noOfIceCreams)
    const dispatch=useDispatch()
    return(
      <>
      <h2>No of IceCreams : {noOfIceCreams} </h2>
      <button onClick={()=>dispatch(ordered())}>Order</button>
      <button onClick={()=>dispatch(restocked(3))}>Restock</button>
      </>
   )
};

export default IceCreamView;
