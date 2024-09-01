import React, { useState } from "react";
import { motion } from "framer-motion";
import icecream from './assets/ice-cream.png'
import icecream1 from './assets/ice-cream1.png'
import icecream2 from './assets/ice-cream2.png'
import icecream3 from './assets/ice-cream3.png'
import { FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";

const App = () => {
  const contents = [
    {
      title: "Chocolate Ice Cream",
      image: icecream2,
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus soluta unde magnam quos quaerat officia quam cupiditate fugiat dolor alias ratione dolores, ipsum facere laboriosam vitae nostrum? Accusantium, ea asperiores.",
      backgroundColor: "#371300",
    },
    {
      title: "Rainbow Ice Cream",
      image: icecream3,
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus soluta unde magnam quos quaerat officia quam cupiditate fugiat dolor alias ratione dolores, ipsum facere laboriosam vitae nostrum? Accusantium, ea asperiores.",
      backgroundColor: "#0b7ef3",
    },
    {
      title: "Easy Vanilla Ice Cream",
      image: icecream,
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus soluta unde magnam quos quaerat officia quam cupiditate fugiat dolor alias ratione dolores, ipsum facere laboriosam vitae nostrum? Accusantium, ea asperiores.",
      backgroundColor: "#ff10f0",
    },
    {
      title: "Strawberry Ice Cream",
      image: icecream1,
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus soluta unde magnam quos quaerat officia quam cupiditate fugiat dolor alias ratione dolores, ipsum facere laboriosam vitae nostrum? Accusantium, ea asperiores.",
      backgroundColor: "#ff69b4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : contents.length - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex < contents.length - 1 ? prevIndex + 1 : 0
    );
  };


  return (
    <motion.div
      key={currentIndex} // Trigger animation on key change
      initial={{ scale: 0.3 }}
      animate={{
        backgroundColor: contents[currentIndex].backgroundColor,
        scale: 1, // Animate scale on click
      }}
      transition={{ duration: 0.6 }}
    >
      <div className="content_container">
      <div className="content_left">
        <h2>{contents[currentIndex].title}</h2>
        <p>{contents[currentIndex].text}</p>
        <button className="cta_button">Buy Now</button>
        <div className="slider">
          <div onClick={handlePrev}>
            <FaArrowCircleLeft className="arrow"/>
          </div>
          <div onClick={handleNext}>
            <FaArrowCircleRight className="arrow"/>
          </div>
        </div>
      </div>
      <hr />
      <div className="content_right">
        <motion.img
        initial={{ x: direction * 1000, opacity: 0 }} // Start off-screen
        animate={{ x: 0, opacity: 1 }} // Slide in to center
        exit={{ x: -direction * 1000, opacity: 1 }} // Slide out to the opposite side
        transition={{ duration: 0.5 }}
          src={contents[currentIndex].image}
          alt={contents[currentIndex].title}
        />   
         
      </div>
      </div>
    </motion.div>
  );
};

export default App;
