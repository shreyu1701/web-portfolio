import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import modelPath from "../assets/3D-Model/678197dbd86b55e2cf637263.glb";

function Model({ scrollYRef }) {
  const gltf = useLoader(GLTFLoader, modelPath);
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current && scrollYRef.current !== null) {
      modelRef.current.rotation.y = scrollYRef.current / 90; // Rotate based on scroll
      modelRef.current.position.y = -(scrollYRef.current / 150); // Move vertically
    }
  });

  return (
    <mesh ref={modelRef} scale={[8, 8, 8]}>
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

  // Framer Motion Variants
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
      className="flex flex-col items-center p-10"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8 w-full"
        variants={textVariants}
      >
        <div className="flex flex-col md:flex-row">
          {/* Text Section */}
          <motion.div className="flex-1 font-dm" variants={textVariants}>
            <h1 className="text-4xl font-bold mb-4 max-sm:text-3xl">
              I’m Shreyansh Koladiya
            </h1>
            <h2 className="text-3xl max-sm:text-2xl font-pacifico text-orange-500 mb-4 font-allan">
              as{" "}
              <ReactTyped
                strings={[" Web Developer.", "UI/UX Designer."]}
                typeSpeed={100}
                loop
                backSpeed={20}
                cursorChar="|"
                showCursor={true}
              />
            </h2>

            <p className="text-2xl max-sm:text-xl mb-4">
              I create{" "}
              <span className="text-yellow-500 font-bold font-allan">
                functional
              </span>
              , visually appealing, and{" "}
              <span className="text-yellow-500 font-bold font-allan">
                user-centric
              </span>{" "}
              websites to bring{" "}
              <span className="text-orange-500 font-bold font-allan">
                ideas
              </span>{" "}
              to life.
            </p>

            {/* Counters with Animation */}
            <motion.div
              className="flex space-x-8 text-2xl max-sm:text-xl max-sm:flex-col max-sm:space-x-0 max-sm:space-y-4"
              variants={counterVariants}
            >
              <motion.div
                className="text-center"
                variants={counterItemVariants}
              >
                <p className="font-bold text-yellow-500">5+</p>
                <p>Projects</p>
              </motion.div>
              <motion.div
                className="text-center"
                variants={counterItemVariants}
              >
                <p className="font-bold text-orange-500">2+</p>
                <p>Experiences</p>
              </motion.div>
              <motion.div
                className="text-center"
                variants={counterItemVariants}
              >
                <p className="font-bold text-orange-400">3+</p>
                <p>Certifications</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* 3D Model */}
          <motion.div
            className="flex-auto m-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
          >
            <Canvas>
              <PerspectiveCamera
                makeDefault
                fov={88}
                near={0.1}
                far={1000}
                position={[0, 6, 10]}
              />
              <ambientLight />
              <Model scrollYRef={scrollYRef} />
            </Canvas>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;
