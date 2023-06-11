import React, {useState, useEffect, memo} from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Animation.css"
const AnimatedList = ({ data, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(data)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, interval);

        // Clean up the timer when the component is unmounted
        return () => clearInterval(timer);
    }, [interval, data.length]);

    const animationVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
    };

    return (
        <div className="lander">
                <motion.div
                    layout
                    key={currentIndex}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={animationVariants}
                    transition={{ duration: 2 }}
                    className="list-item"
                >
                    <div className="stylish-lander">
                        <div className="content-container">
                            <h1 className="title">{data[currentIndex].title}</h1>
                            <p className="description">
                                {data[currentIndex].description}
                            </p>
                            <div className="cta-container">
                                <button className="cta-button">Get Started</button>
                            </div>
                        </div>
                    </div>

                </motion.div>
        </div>
    );
};

export default memo(AnimatedList);
