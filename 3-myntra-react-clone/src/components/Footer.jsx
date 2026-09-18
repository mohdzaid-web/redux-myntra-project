// const Footer = ()=>{
//     return(
//         <>
//           <footer>
//         <div className="footer_container">
//             <div className="footer_column">
//                 <h3>ONLINE SHOPPING</h3>

//                 <a href="#">Men</a>
//                 <a href="#">Women</a>
//                 <a href="#">Kids</a>
//                 <a href="#">Home & Living</a>
//                 <a href="#">Beauty</a>
//                 <a href="#">Gift Card</a>
//                 <a href="#">Myntra Insider</a>
//             </div>

//             <div className="footer_column">
//                 <h3>ONLINE SHOPPING</h3>

//                 <a href="#">Men</a>
//                 <a href="#">Women</a>
//                 <a href="#">Kids</a>
//                 <a href="#">Home & Living</a>
//                 <a href="#">Beauty</a>
//                 <a href="#">Gift Card</a>
//                 <a href="#">Myntra Insider</a>
//             </div>

//             <div className="footer_column">
//                 <h3>ONLINE SHOPPING</h3>

//                 <a href="#">Men</a>
//                 <a href="#">Women</a>
//                 <a href="#">Kids</a>
//                 <a href="#">Home & Living</a>
//                 <a href="#">Beauty</a>
//                 <a href="#">Gift Card</a>
//                 <a href="#">Myntra Insider</a>
//             </div>
//         </div>
//         <hr/>

//         <div className="copyright">
//             © 2023 www.myntra.com. All rights reserved.
//         </div>
//     </footer>
//         </>
//     )
// }
// export default Footer

// this code is only adding animation effect motions etc otherwise the fuctionality is same as upper one

import {
  motion,
} from "motion/react";

import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

const Footer = () => {

  return (
    <motion.footer

      className="premium-footer"

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
      }}

      transition={{
        duration: 0.6,
      }}
    >

      <div className="footer-top">

        <div className="footer-brand">

          <motion.div
            className="footer-logo"
            whileHover={{
              scale: 1.08,
              rotate: -3,
            }}
          >
            M
          </motion.div>

          <h2>
            Style that
            <br />
            <em>moves with you.</em>
          </h2>

          <p>
            Discover fashion that fits your
            personality, lifestyle and moments.
          </p>

          <div className="social-icons">

            <motion.a
              href="#"
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
            >
              <FiInstagram />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
            >
              <FiFacebook />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
            >
              <FiTwitter />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
            >
              <FiYoutube />
            </motion.a>

          </div>

        </div>

        <div className="footer-column">

          <h3>ONLINE SHOPPING</h3>

          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>

        </div>

        <div className="footer-column">

          <h3>USEFUL LINKS</h3>

          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policy</a>

        </div>

        <div className="footer-column">

          <h3>EXPERIENCE</h3>

          <a href="#">Myntra App</a>
          <a href="#">Myntra Insider</a>
          <a href="#">Gift Cards</a>
          <a href="#">Sitemap</a>
          <a href="#">Careers</a>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 Myntra. All rights reserved.
        </span>

        <span>
          Crafted for modern fashion.
        </span>

      </div>

    </motion.footer>
  );
};

export default Footer;