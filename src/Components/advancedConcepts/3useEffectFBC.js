import React, { useEffect } from "react";

const useEffectHook = props => {
  useEffect(() => {
    //useEffect runs for mount and update and 
    // is kind of mix of compDidMount and CompDidUpdate
    // we can do API calls here
    console.log("useEffect");
  });
// variation1: only run for specific variable(state/prop) change 
// (say for prop.a and prop.b)
// useEffect(()=>{
//  --
// }, [prop.a, prop.b])
// ------
// we can add as many useEffects we want to have in this component
// multiple logic can be called for one or more variables
// ------
// variation2: useEffect should be called only at the mounting cycle
// pass empty array as the dependency array and thus it will never run again
// useEffect(()=> {
//   --
// },[])

// variation3: useEffect for componentWillUnmount
// here the function can return a function as well which will
// get executed while component is being unmounted
// useEffect(()=>{
//   return ()=>{
//     --unmounting logic
//   }
// },[prop,a]);

/////below variation is not tested::!! caution !!
// variation4: to execute the unmount callback before the useEffect fn
// useEffect(()=>{
//    --somelogic: will execute afterthe inner fn
//   return ()=>{
//   --gets called before its outer function, (see, there is no dependecy array)
//   }
// })

  return <p>hi</p>;
};
export default useEffectHook;