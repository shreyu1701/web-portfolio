import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import modelPath from "../assets/3D-Model/678197dbd86b55e2cf637263.glb";
import CountUp from "../hooks/count-up";

function Model({ scrollYRef }) {
  const gltf = useLoader(GLTFLoader, modelPath);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current && scrollYRef.current !== null) {
      modelRef.current.rotation.y = scrollYRef.current / 90;
      modelRef.current.position.y = -(scrollYRef.current / 150);
    }
  });

  return (
    <mesh ref={modelRef} scale={[6, 6, 6]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

function HeroSection() {
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const counterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3, staggerChildren: 0.5 } },
  };

  const counterItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex flex-col items-center p-6 sm:p-10 w-full"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-6xl"
        variants={textVariants}
      >
        <div className="flex flex-col-reverse md:flex-row items-center">
          <motion.div
            className="flex-1 text-center md:text-left"
            variants={textVariants}
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              I’m Shreyansh Koladiya
            </h1>
            <h2 className="text-2xl sm:text-4xl font-allan text-orange-500 mb-4">
              as{" "}
              <ReactTyped
                strings={["Web Developer.", "UI/UX Designer."]}
                typeSpeed={100}
                loop
                backSpeed={20}
                cursorChar="|"
                showCursor={true}
              />
            </h2>
            <p className="text-2xl sm:text-lg mb-4">
              I create{" "}
              <span className="text-yellow-500 font-bold">functional</span>,
              visually appealing, and{" "}
              <span className="text-yellow-500 font-bold">user-centric</span>{" "}
              websites to bring{" "}
              <span className="text-orange-500 font-bold">ideas</span> to life.
            </p>
            <motion.div
              className="flex justify-center md:justify-start space-x-6 text-lg sm:text-xl"
              variants={counterVariants}
            >
              <motion.div
                className="text-center"
                variants={counterItemVariants}
              >
                <p className="font-bold text-3xl text-yellow-500">
                  <CountUp
                    from={0}
                    to={5}
                    separator=","
                    direction="up"
                    duration={5}
                    className="count-up-text"
                  />
                </p>
                <p>Projects</p>
              </motion.div>
              <motion.div
                className="text-center"
                variants={counterItemVariants}
              >
                <p className="font-bold text-3xl text-orange-500">
                  <CountUp
                    from={0}
                    to={2}
                    separator=","
                    direction="up"
                    duration={5}
                    className="count-up-text"
                  />
                </p>
                <p>Experiences</p>
              </motion.div>
              <motion.div
                className="text-center"
                variants={counterItemVariants}
              >
                <p className="font-bold text-3xl text-orange-400">
                  <CountUp
                    from={0}
                    to={3}
                    separator=","
                    direction="up"
                    duration={5}
                    className="count-up-text"
                  />
                </p>
                <p>Certifications</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 h-[300px] sm:h-[400px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
          >
            <Canvas className="w-full h-full">
              <PerspectiveCamera
                makeDefault
                fov={75}
                near={0.1}
                far={1000}
                position={[0, 6, 10]}
              />
              <ambientLight intensity={1.5} />
              <Model scrollYRef={scrollYRef} />
            </Canvas>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;
