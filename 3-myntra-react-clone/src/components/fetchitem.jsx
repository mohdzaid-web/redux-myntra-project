// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { itemsAction } from "../store/itemSlice"
// import { fetchedAction } from "../store/fetchstatus"

// const Fetchitem = ()=>{
//  const fetchedstatus =   useSelector(store=>store.fetchstatus)
//  const dispatch = useDispatch()

//  useEffect(()=>{
//     if(fetchedstatus.fetchdone) return
//     const controller = new AbortController()
//     const signal = controller.signal
//      dispatch(fetchedAction.markfatchingstarted())
//     fetch('http://localhost:8080/items', {signal})
//     .then((res)=>res.json())
//     .then(({items})=>{ 
//         dispatch(fetchedAction.markfetchdone())
//         dispatch(fetchedAction.markfatchingfinished())
//       dispatch(itemsAction.addinitialitem(items[0]))
        
//     })
//     return ()=>{
//         controller.abort()
//     }
//  },[fetchedstatus])
//  return(
//  <>
 
//  </>
//  )
// }
// export default Fetchitem



// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { itemsAction } from "../store/itemSlice";
// import { fetchedAction } from "../store/fetchstatus";

// const Fetchitem = () => {
//   const fetchedstatus = useSelector((store) => store.fetchstatus);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (
//       fetchedstatus.fetchdone ||
//       fetchedstatus.currentlyfetching
//     ) {
//       return;
//     }

//     const controller = new AbortController();

//     dispatch(fetchedAction.markfatchingstarted());

//     fetch("http://localhost:8080/items", {
//       signal: controller.signal,
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error: ${res.status}`);
//         }

//         return res.json();
//       })
//       .then((data) => {
//         console.log("API DATA:", data);

//         dispatch(itemsAction.addinitialitem(data.items[0]));
//         dispatch(fetchedAction.markfetchdone());
//         dispatch(fetchedAction.markfatchingfinished());
//       })
//       .catch((error) => {
//         if (error.name !== "AbortError") {
//           console.error("FETCH ERROR:", error);
//           dispatch(fetchedAction.markfatchingfinished());
//         }
//       });

//     return () => {
//       controller.abort();
//     };
//   }, [
//     fetchedstatus.fetchdone,
//     fetchedstatus.currentlyfetching,
//     dispatch,
//   ]);

//   return null;
// };

// export default Fetchitem;

// this code is only adding animation effect motions etc otherwise the fuctionality is same as upper one


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemSlice";
import { fetchedAction } from "../store/fetchstatus";

const Fetchitem = () => {
  const fetchedstatus = useSelector((store) => store.fetchstatus);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("USE EFFECT RUNNING");

    if (
      fetchedstatus.fetchdone ||
      fetchedstatus.currentlyfetching
    ) {
     
      return;
    }

    dispatch(fetchedAction.markfatchingstarted());

    

  fetch(`${import.meta.env.VITE_API_URL}/items`)
      .then((res) => {
      

        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }

        return res.json();
      })
      .then((data) => {
       

        dispatch(
          itemsAction.addinitialitem(data.items[0])
        );

        dispatch(fetchedAction.markfetchdone());
        dispatch(fetchedAction.markfatchingfinished());
      })
      .catch((error) => {
      
        dispatch(
          fetchedAction.markfatchingfinished()
        );
      });
  }, [
    fetchedstatus.fetchdone,
    fetchedstatus.currentlyfetching,
    dispatch,
  ]);

  return null;
};

export default Fetchitem;