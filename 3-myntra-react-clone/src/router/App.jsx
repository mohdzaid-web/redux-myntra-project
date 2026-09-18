// import Header from "../components/Hearder"
// import Footer from "../components/Footer"
// import Fetchitem from "../components/fetchitem"
// import { Outlet } from "react-router-dom"
// import { useSelector } from "react-redux"
// import Loadingspinner from "../components/loading"

// function App() {
//   const fetchedstatus =   useSelector(store=>store.fetchstatus)

//   return (
//     <>
//      <Header />
//      <Fetchitem />
//      {fetchedstatus.currentlyfetching ? <Loadingspinner/>:  <Outlet/>}
   
//   <Footer />
//     </>
//   )
// }

// export default App

// this code is only adding animation effect motions etc otherwise the fuctionality is same as upper one

// import Header from "../components/Header";
import Header from "../components/Hearder";
import Footer from "../components/Footer";

// import Fetchitem from "../components/Fetchitem";
import Fetchitem from "../components/fetchitem";
import Loadingspinner from "../components/loading";

import {
  Outlet,
  useLocation,
} from "react-router-dom";

import { useSelector } from "react-redux";

import {
  AnimatePresence,
  motion,
} from "motion/react";

const App = () => {
  const fetchedstatus = useSelector(
    (store) => store.fetchstatus
  );

  const location = useLocation();

  return (
    <div className="app-shell">

      <Header />

      <Fetchitem />

      <AnimatePresence mode="wait">

        <motion.div
          key={location.pathname}
          className="page-transition"
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -12,
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {fetchedstatus.currentlyfetching ? (
            <Loadingspinner />
          ) : (
            <Outlet />
          )}

        </motion.div>

      </AnimatePresence>

      <Footer />

    </div>
  );
};

export default App;