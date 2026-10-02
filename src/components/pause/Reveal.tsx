import { useEffect, useState } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

const Reveal = ({ initial, ...props }: HTMLMotionProps<"div">) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => setIsHydrated(true), []);

  return <motion.div key={isHydrated ? "client" : "server"} initial={isHydrated ? initial : false} {...props} />;
};

export default Reveal;