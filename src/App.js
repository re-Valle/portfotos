import { useState, useEffect, useRef } from 'react';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  const carrossel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth)
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])

  return (
    <div className="App">
      <motion.div ref={carrossel} className="carrossel" whileTap={{ cursor: "grabbing" }}>
        <motion.div 
        className="interno"
        drag="x"
        dragConstraints={{ right: 1550, left: -width }}
        initial={{ x: 0 }}
        animate={{ x: 1550 }}
        transition={{ duration: 0.8 }}
        >

          <motion.div className="imagem">
            <motion.img src="https://source.unsplash.com/720x900/?praise" alt="Foto Praise do Portifólio"/>            
            <motion.img src="https://source.unsplash.com/720x900/?worship" alt="Foto Worship do Portifólio"/>
            <motion.img src="https://source.unsplash.com/720x900/?hillsong" alt="Foto Hillsong do Portifólio"/>
            <motion.img src="https://source.unsplash.com/720x900/?Jesus" alt="Foto Jesus do Portifólio"/>
            <motion.img src="https://source.unsplash.com/720x900/?pray" alt="Foto Pray do Portifólio"/>
          </motion.div>

        </motion.div>
      </motion.div>      
    </div>
  );
}

export default App;
