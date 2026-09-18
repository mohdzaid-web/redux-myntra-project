// import { MdPersonAddAlt1 } from "react-icons/md";
// import { FaFaceGrinHearts } from "react-icons/fa6";
// import { FaBagShopping } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// const Header = ()=>{
//   const bag =  useSelector(store=>store.bag)
//     return(
//         <>
//          <header>
//         <div className="logo_container">
//             <Link to='/'><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
//         </div>
//         <nav className="nav_bar">
//             <a href="#">Men</a>
//             <a href="#">Women</a>
//             <a href="#">Kids</a>
//             <a href="#">Home & Living</a>
//             <a href="#">Beauty</a>
//             <a href="#">Studio <sup>New</sup></a>
//         </nav>
//         <div className="search_bar">
//             <span className="material-symbols-outlined search_icon">search</span>
//             <input className="search_input" placeholder="Search for products, brands and more"/>
//         </div>
//         <div className="action_bar">
//             <div className="action_container">
//              <MdPersonAddAlt1></MdPersonAddAlt1>
//                 <span className="action_name">Profile</span>
//             </div>

//             <div className="action_container">
//                 <FaFaceGrinHearts />
               
//                 <span className="action_name">Wishlist</span>
//             </div>

//             <Link to='/bag' className="action_container" >
//             <FaBagShopping />
               
//                 <span className="action_name">Bag</span>
//                 <span className="bag-item-count">{bag.length}</span>
//             </Link>
//         </div>
//     </header>
//         </>
//     )
// }
// export default Header

// this code is only adding animation effect motions etc otherwise the fuctionality is same as upper one

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  motion,
  AnimatePresence,
} from "motion/react";

import {
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiSearch,
} from "react-icons/fi";

import { useSelector } from "react-redux";

import { useEffect, useState } from "react";

const Header = () => {

  const bagItems = useSelector(
    (store) => store.bag
  );

  const location = useLocation();

  const [bagPulse, setBagPulse] = useState(false);

  useEffect(() => {

    if (bagItems.length > 0) {

      setBagPulse(true);

      const timer = setTimeout(() => {
        setBagPulse(false);
      }, 500);

      return () => clearTimeout(timer);
    }

  }, [bagItems.length]);

  return (
    <motion.header
      className="premium-header"
      initial={{
        opacity: 0,
        y: -35,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      <div className="header-inner">

        <Link
          to="/"
          className="logo-container"
        >

          <motion.div
            className="myntra-logo"
            whileHover={{
              scale: 1.08,
              rotate: -3,
            }}
            whileTap={{
              scale: 0.94,
            }}
          >
            M
          </motion.div>

        </Link>

        <nav className="nav-bar">

          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Men
          </Link>

          <Link
            to="/"
            className="nav-link"
          >
            Women
          </Link>

          <Link
            to="/"
            className="nav-link"
          >
            Kids
          </Link>

          <Link
            to="/"
            className="nav-link"
          >
            Home & Living
          </Link>

          <Link
            to="/"
            className="nav-link"
          >
            Beauty
          </Link>

          <Link
            to="/"
            className="nav-link studio-link"
          >
            Studio
            <sup>NEW</sup>
          </Link>

        </nav>

        <div className="search-bar">

          <FiSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search for products, brands and more"
          />

        </div>

        <div className="action-bar">

          <motion.div
            className="action-container"
            whileHover={{
              y: -3,
            }}
          >
            <FiUser />
            <span>Profile</span>
          </motion.div>

          <motion.div
            className="action-container"
            whileHover={{
              y: -3,
            }}
          >
            <FiHeart />
            <span>Wishlist</span>
          </motion.div>

          <Link
            to="/bag"
            className="bag-action"
          >

            <motion.div
              className="action-container bag-icon-wrapper"
              animate={
                bagPulse
                  ? {
                      scale: [1, 1.18, 0.94, 1],
                    }
                  : {
                      scale: 1,
                    }
              }
              transition={{
                duration: 0.45,
              }}
            >

              <FiShoppingBag />

              <AnimatePresence>

                {bagItems.length > 0 && (

                  <motion.span
                    className="bag-count"
                    key={bagItems.length}
                    initial={{
                      scale: 0,
                      y: -8,
                    }}
                    animate={{
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      scale: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 18,
                    }}
                  >
                    {bagItems.length}
                  </motion.span>

                )}

              </AnimatePresence>

              <span>Bag</span>

            </motion.div>

          </Link>

        </div>

      </div>

    </motion.header>
  );
};

export default Header;