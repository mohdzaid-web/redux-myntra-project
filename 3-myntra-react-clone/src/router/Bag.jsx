

// import { useSelector } from "react-redux"
// import Bagitem from "../components/bagitem"
// import Bagsummary from "../components/bagsummary"

// const Bag = ()=>{
//   const bagItems = useSelector(store=>store.bag)
//   const Items = useSelector(store=>store.items)
//   const finalitems = Items.filter((item)=>{
//     const itemindex = bagItems.indexOf(item.id)
//     return itemindex >=0
//   })
//     return(
       
//     <main>
//       <div className="bag-page">
//         <div className="bag-items-container">
//           {finalitems.map(item=><Bagitem item={item}/>)}
          
        
//         </div>
//         <Bagsummary />

//       </div>
//     </main>
//     )
// }
// export default Bag

// this code is only adding animation effect motions etc otherwise the fuctionality is same as upper one

import {
  useSelector,
} from "react-redux";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import Bagitem from "../components/bagitem";
import Bagsummary from "../components/bagsummary";

const Bag = () => {

  const bagItems = useSelector(
    (store) => store.bag
  );

  const Items = useSelector(
    (store) => store.items
  );

  const finalitems = Items.filter(
    (item) => bagItems.includes(item.id)
  );

  return (
    <main className="bag-page-wrapper">

      <motion.div
        className="bag-page"

        initial={{
          opacity: 0,
          y: 20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.5,
        }}
      >

        <div className="bag-title-area">

          <span>YOUR SELECTION</span>

          <h1>
            Shopping <em>Bag</em>
          </h1>

          <p>
            Review your selected pieces before
            completing your order.
          </p>

        </div>

        <div className="bag-layout">

          <div className="bag-items-container">

            <AnimatePresence mode="popLayout">

              {finalitems.map((item) => (

                <Bagitem
                  key={item.id}
                  item={item}
                />

              ))}

            </AnimatePresence>

            {finalitems.length === 0 && (

              <motion.div
                className="empty-bag"

                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}

                animate={{
                  opacity: 1,
                  scale: 1,
                }}
              >

                <div className="empty-bag-icon">
                  🛍
                </div>

                <h2>Your bag is empty</h2>

                <p>
                  Add something beautiful to
                  your collection.
                </p>

              </motion.div>

            )}

          </div>

          <Bagsummary />

        </div>

      </motion.div>

    </main>
  );
};

export default Bag;