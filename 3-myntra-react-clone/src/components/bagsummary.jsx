// import { useSelector } from "react-redux"

// const Bagsummary = ()=>{
//    const bagItemsids = useSelector(store=>store.bag)
//    const Items = useSelector(store=>store.items)
//   const finalitems = Items.filter((item)=>{
//     const itemindex = bagItemsids.indexOf(item.id)
//     return itemindex >=0
//   })
  
//   const CONVENIENCE_FEES=99
//   let totalItem = bagItemsids.length;
//   let totalMRP = 0;
//   let totalDiscount = 0;

//   finalitems.forEach((bagItem) => {
//     totalMRP += bagItem.original_price;
//     totalDiscount += bagItem.original_price - bagItem.current_price;
//   });

//   let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
 
//     return(
//           <div className="bag-summary">
        
//            <div className="bag-details-container">
//     <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
//     <div className="price-item">
//       <span className="price-item-tag">Total MRP</span>
//       <span className="price-item-value">₹{totalMRP}</span>
//     </div>
//     <div className="price-item">
//       <span className="price-item-tag">Discount on MRP</span>
//       <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
//     </div>
//     <div className="price-item">
//       <span className="price-item-tag">Convenience Fee</span>
//       <span className="price-item-value">₹99</span>
//     </div>
//     <hr/>
//     <div className="price-footer">
//       <span className="price-item-tag">Total Amount</span>
//       <span className="price-item-value">₹{finalPayment}</span>
//     </div>
//   </div>
//   <button className="btn-place-order">
//     <div className="css-xjhrni">PLACE ORDER</div>
//   </button>
//         </div>
//     )
// }
// export default Bagsummary


import {
  useSelector,
} from "react-redux";

import {
  motion,
} from "motion/react";

const Bagsummary = () => {

  const bagItemsids = useSelector(
    (store) => store.bag
  );

  const Items = useSelector(
    (store) => store.items
  );

  const finalitems = Items.filter(
    (item) => bagItemsids.includes(item.id)
  );

  const CONVENIENCE_FEES = 99;

  const totalItem =
    bagItemsids.length;

  let totalMRP = 0;

  let totalDiscount = 0;

  finalitems.forEach((bagItem) => {

    totalMRP += bagItem.original_price;

    totalDiscount +=
      bagItem.original_price -
      bagItem.current_price;
  });

  const finalPayment =
    totalMRP -
    totalDiscount +
    CONVENIENCE_FEES;

  return (
    <motion.aside

      className="premium-bag-summary"

      initial={{
        opacity: 0,
        x: 35,
      }}

      animate={{
        opacity: 1,
        x: 0,
      }}

      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
    >

      <div className="summary-glow" />

      <div className="summary-header">

        <span>ORDER SUMMARY</span>

        <h2>
          Price <em>Details</em>
        </h2>

      </div>

      <div className="summary-items">

        <motion.div
          className="summary-row"
          whileHover={{
            x: 4,
          }}
        >
          <span>
            Total MRP
          </span>

          <strong>
            ₹{totalMRP}
          </strong>
        </motion.div>

        <motion.div
          className="summary-row discount-row"
          whileHover={{
            x: 4,
          }}
        >
          <span>
            Discount on MRP
          </span>

          <strong>
            -₹{totalDiscount}
          </strong>
        </motion.div>

        <motion.div
          className="summary-row"
          whileHover={{
            x: 4,
          }}
        >
          <span>
            Convenience Fee
          </span>

          <strong>
            ₹{CONVENIENCE_FEES}
          </strong>
        </motion.div>

      </div>

      <div className="summary-divider" />

      <motion.div
        className="summary-total"

        animate={{
          scale:
            totalItem > 0
              ? [1, 1.01, 1]
              : 1,
        }}

        transition={{
          duration: 0.45,
        }}
      >

        <span>
          Total Amount
        </span>

        <strong>
          ₹{finalPayment}
        </strong>

      </motion.div>

      <div className="savings-box">

        <span>✦</span>

        You save ₹{totalDiscount} on
        this order

      </div>

      <motion.button

        className="btn-place-order"

        whileHover={{
          scale: 1.02,
          y: -2,
        }}

        whileTap={{
          scale: 0.97,
        }}
      >

        <span>
          PLACE ORDER
        </span>

        <b>→</b>

      </motion.button>

      <div className="secure-checkout">
        🔒 Secure & encrypted checkout
      </div>

    </motion.aside>
  );
};

export default Bagsummary;