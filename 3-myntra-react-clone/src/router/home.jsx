// import { useSelector } from "react-redux"
// import Homeitem from "../components/Homeitem"
// const Home = ()=>{
//  const items =  useSelector(store =>store.items )
// return(
//     <>
//       <main>
//             <div className="items-container">
//                 {items.map((item) =>  (<Homeitem key={item.id} item={item}/>))}
            
//             </div>
//         </main>
//     </>
// )
// }
// export default Home

// this code is only adding animation effect motions etc otherwise the fuctionality is same as upper one

import {
  useSelector,
} from "react-redux";

import Homeitem from "../components/Homeitem";

import {
  motion,
} from "motion/react";

const Home = () => {

  const items = useSelector(
    (store) => store.items
  );

  return (
    <main className="home-page">

      <section className="hero-section">

        <div className="hero-content">

          <motion.span
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            THE NEW SEASON
          </motion.span>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
          >
            Define Your
            <br />
            <strong>Everyday Style.</strong>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            Discover styles made for the way
            you live, move and express yourself.
          </motion.p>

        </div>

      </section>

      <section className="products-section">

        <div className="section-heading">

          <span>CURATED FOR YOU</span>

          <h2>
            Trending
            <em> Collections</em>
          </h2>

          <div className="heading-line" />

        </div>

        <div className="items-container">

          {items.map((item, index) => (
            <Homeitem
              key={item.id}
              item={item}
              index={index}
            />
          ))}

        </div>

      </section>

    </main>
  );
};

export default Home;