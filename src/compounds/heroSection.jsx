import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, SpotLight } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import modelPath from "../assets/3D-Model/678197dbd86b55e2cf637263.glb";
import { ReactTyped } from "react-typed";

function Model() {
  const model = { modelPath };
  const gltf = useLoader(GLTFLoader, model.modelPath);
  const Ref = useRef();

  useFrame((state, delta) => {
    // Ref.current.rotation.x += delta;
    Ref.current.rotation.y += delta;
    Ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
  });

  return (
    <>
      <mesh ref={Ref}>
        <primitive object={gltf.scene} />
      </mesh>
    </>
  );
}

function heroSection() {
  return (
    <div className="flex flex-col items-center p-10">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 font-dm">
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
                cursorChar=""
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
            <div className="flex space-x-8 text-2xl max-sm:text-xl max-sm:flex-col max-sm:space-x-0 max-sm:space-y-4">
              <div className="text-center ">
                <p className="font-bold text-yellow-500">5+</p>
                <p>Projects</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-orange-500">2+</p>
                <p>Experiences</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-orange-400">3+</p>
                <p>Certifications</p>
              </div>
            </div>
          </div>
          <div className="flex-auto ">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight />
              <OrbitControls enableZoom={false} />
              <Model />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default heroSection;