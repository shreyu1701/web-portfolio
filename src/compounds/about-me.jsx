import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import modelPath from "../assets/3D-Model/678197dbd86b55e2cf637263.glb";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";

function Model() {
  const model = { modelPath };
  const gltf = useLoader(GLTFLoader, model.modelPath);

  return <primitive object={gltf.scene} url={modelPath} />;
}

function AboutMe() {
  return (
    <div
      id="aboutme"
      className="flex flex-col md:flex-row rounded-lg shadow-lg p-8 w-full"
    >
      <div className="flex-1 mb-4 md:mb-0">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Model />
        </Canvas>
      </div>
      <div className="md:ml-8 text-center md:text-left ">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">About Me</h1>
        <div className="text-lg font-geo">
          <p className="mb-4">
            I'm Shreyansh Koladiya, a web developer with 2+ years of experience.
            I specialize in creating dynamic, responsive, and accessible
            websites using 3D models and modern technologies like HTML, CSS,
            JavaScript, React, and React Three.js.
          </p>
          <p className="mb-4">
            I’m currently expanding my expertise in 3D web design and enjoy
            solving complex technical challenges.
          </p>
          <p className="mb-4">
            Highlight your education, certifications (if any), and a personal
            note about your passion for web development.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
