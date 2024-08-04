import { Suspense, useEffect, useState } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./casette/scene.gltf");
  return (
    <mesh>
      <hemisphereLight
        intensity={2.15}
        groundColor="black"
        position={[0, 5, 4]}
      />
      <pointLight intensity={1} position={[6, -1, 1]} />
      <spotLight
        position={[6, -1, 1]}
        angle={3}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.2}
        position={isMobile ? [0, -3, -2.2] : [2, -2.25, 1]}
        rotation={[0.02, 1.3, 0]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (evt) => {
      setIsMobile(evt.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCanvas(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showCanvas && (
        <Canvas
          frameloop="demand"
          shadows
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </>
  );
};

export default ComputerCanvas;
