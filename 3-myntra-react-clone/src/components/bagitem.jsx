// import { useDispatch } from "react-redux"
// import { AiFillDelete } from "react-icons/ai";
// import { bagAction } from "../store/bagslice";

// const Bagitem = ({item})=>{
//   const dispatch = useDispatch()
//   const handleremoveitem = ()=>{
//     dispatch(bagAction.removefrombag(item.id))
//   }
//     return(
//         <div className="bag-item-container">
//     <div className="item-left-part">
//       <img className="bag-item-img" src={item.image}/>
//     </div>
//     <div className="item-right-part">
//       <div className="company">{item.company}</div>
//       <div className="item-name">{item.item_name}</div>
//       <div className="price-container">
//         <span className="current-price">Rs {item.current_price}</span>
//         <span className="original-price">Rs {item.original_price}</span>
//         <span className="discount-percentage">({item.discount_percentage}% OFF)</span>
//       </div>
//       <div className="return-period">
//         <span className="return-period-days">{item.return_period} days</span> return available
//       </div>
//       <div className="delivery-details">
//         Delivery by
//         <span className="delivery-details-days">{item.delivery_date}</span>
//       </div>
      
//     </div>

//     <div className="remove-from-cart" onClick={handleremoveitem}><AiFillDelete /></div>
//   </div>
//     )
// }
// export default Bagitem

// this code is only adding animation effect motions etc otherwise the fuctionality is same as upper one

import {
  useDispatch,
} from "react-redux";

import {
  motion,
} from "motion/react";

import {
  AiFillDelete,
} from "react-icons/ai";

import { bagAction } from "../store/bagslice";

const Bagitem = ({ item }) => {

  const dispatch = useDispatch();

  const handleremoveitem = () => {

    dispatch(
      bagAction.removefrombag(item.id)
    );
  };

  return (
    <motion.div

      className="premium-bag-item"

      layout

      initial={{
        opacity: 0,
        x: -35,
        scale: 0.96,
      }}

      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}

      exit={{
        opacity: 0,
        x: 100,
        scale: 0.92,
        height: 0,
        marginBottom: 0,
      }}

      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}

      whileHover={{
        y: -3,
      }}
    >

      <div className="bag-item-image-area">

        <motion.img
          className="bag-item-img"
          src={item.image}
          alt={item.item_name}

          whileHover={{
            scale: 1.07,
          }}

          transition={{
            duration: 0.4,
          }}
        />

      </div>

      <div className="bag-item-content">

        <div className="bag-item-top">

          <div>

            <motion.div
              className="bag-company"
              whileHover={{
                x: 3,
              }}
            >
              {item.company}
            </motion.div>

            <div className="bag-product-name">
              {item.item_name}
            </div>

          </div>

          <motion.button
            className="delete-button"
            onClick={handleremoveitem}

            whileHover={{
              scale: 1.15,
              rotate: 8,
            }}

            whileTap={{
              scale: 0.82,
              rotate: -15,
            }}
          >
            <AiFillDelete />
          </motion.button>

        </div>

        <div className="bag-price">

          <span className="bag-current-price">
            ₹{item.current_price}
          </span>

          <span className="bag-original-price">
            ₹{item.original_price}
          </span>

          <span className="bag-discount">
            {item.discount_percentage}% OFF
          </span>

        </div>

        <div className="bag-meta">

          <div>
            <span>↩</span>
            <strong>
              {item.return_period} days
            </strong>
            return available
          </div>

          <div>
            <span>✓</span>
            Delivery by
            <strong>
              {item.delivery_date}
            </strong>
          </div>

        </div>

      </div>

    </motion.div>
  );
};

export default Bagitem;