// import { useDispatch, useSelector } from "react-redux"
// import { bagAction } from "../store/bagslice"
// import { GrAddCircle } from "react-icons/gr";
// import { MdAutoDelete } from "react-icons/md";

// const Homeitem = ({item})=>{
//     const dispatch = useDispatch()
//     const bagitems = useSelector(store=>store.bag)
//     const elementfound = bagitems.indexOf(item.id)>=0
//     const handleaddbag = ()=>{
//         dispatch(bagAction.addtobag(item.id))
//     }
//     const Removefrombag = ()=>{
//         dispatch(bagAction.removefrombag(item.id))
//     }
//     return(
//         <>
//           <div className="item-container">
//       <img className="item-image" src={item.image} alt="item image"/>
//       <div className="rating">
//           {item.rating.stars} ⭐ | {item.rating.count}
//       </div>
//       <div className="company-name">{item.company}</div>
//       <div className="item-name">{item.item_name}</div>
//       <div className="price">
//           <span className="current-price">Rs {item.current_price}</span>
//           <span className="original-price">Rs {item.original_price}</span>
//           <span className="discount">({item.discount_percentage}% OFF)</span>
//       </div>
//       {elementfound ? <button type="button" class="btn btn-danger" onClick={Removefrombag}><MdAutoDelete />Remove</button>:<button type="button" class="btn btn-success" onClick={handleaddbag}> <GrAddCircle />Add to Bag</button>}
      

//     </div>
//         </>
//     )
// }
// export default Homeitem

// this code is only adding animation effect motions etc otherwise the fuctionality is same as upper one

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  motion,
} from "motion/react";

import {
  GrAddCircle,
} from "react-icons/gr";

import {
  MdAutoDelete,
} from "react-icons/md";

import { bagAction } from "../store/bagslice";

const Homeitem = ({ item }) => {

  const dispatch = useDispatch();

  const bagitems = useSelector(
    (store) => store.bag
  );

  const elementfound =
    bagitems.indexOf(item.id) >= 0;

  const handleaddbag = () => {

    dispatch(
      bagAction.addtobag(item.id)
    );

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
  };

  const Removefrombag = () => {

    dispatch(
      bagAction.removefrombag(item.id)
    );
  };

  return (
    <motion.article
      className="premium-product-card"

      initial={{
        opacity: 0,
        y: 30,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.15,
      }}

      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}

      whileHover={{
        y: -8,
      }}
    >

      <div className="product-image-wrapper">

        <motion.img
          className="item-image"
          src={item.image}
          alt={item.item_name}

          whileHover={{
            scale: 1.06,
          }}

          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
        />

        <div className="image-shine" />

        <div className="product-rating">
          {item.rating.stars}
          <span>★</span>
          <b>|</b>
          {item.rating.count}
        </div>

      </div>

      <div className="product-content">

        <motion.div
          className="company-name"
          whileHover={{
            x: 3,
          }}
        >
          {item.company}
        </motion.div>

        <div className="item-name">
          {item.item_name}
        </div>

        <div className="price">

          <span className="current-price">
            ₹{item.current_price}
          </span>

          <span className="original-price">
            ₹{item.original_price}
          </span>

          <span className="discount">
            {item.discount_percentage}% OFF
          </span>

        </div>

        <motion.button
          type="button"

          className={
            elementfound
              ? "product-action remove"
              : "product-action add"
          }

          onClick={
            elementfound
              ? Removefrombag
              : handleaddbag
          }

          whileHover={{
            scale: 1.025,
          }}

          whileTap={{
            scale: 0.94,
          }}
        >

          {elementfound ? (
            <>
              <MdAutoDelete />
              Remove from Bag
            </>
          ) : (
            <>
              <GrAddCircle />
              Add to Bag
            </>
          )}

        </motion.button>

      </div>

    </motion.article>
  );
};

export default Homeitem;