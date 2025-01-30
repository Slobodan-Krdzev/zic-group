import { motion } from "framer-motion";
import { links } from "./CentralLinksWrapper";
import MobileNavLink from "./MobileNavLink";

const MobileNavMenu = () => {
  return (
      <motion.div
        key={"mobileNav"}
        initial={{ y: `-6%`, opacity: 0 }} // Start off-screen (above)
        animate={{ y: "0%", opacity: 1 }} // Slide into view
        exit={{ y: "-8%", opacity: 0 }} // Slide back up on unmount
        transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth transition
        style={{ top: "83px", backgroundColor: "#000C1A" }}
        className="fixed bottom-0 left-0 right-0 z-50"
      >
        <div
          className="w-11/12 m-auto overflow-y-auto "
          style={{ borderTop: "0.5px solid #18293C" }}
        >
          <ul>
            {links.map((l) => <MobileNavLink key={l.link} item={l} />)}
          </ul>
        </div>
      </motion.div>
  );
};

export default MobileNavMenu;
