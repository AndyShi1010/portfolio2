import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { Suspense, useRef } from 'react';
import { OrbitControls } from '@react-three/drei'


// import { PerspectiveCamera } from 'three';
// import { Suspense } from 'react';
// import { useGLTF } from '@react-three/drei'
import Model from './Model'


export default function ThreeCanvas (props) {
    // extend({ OrbitControls });
    // const CameraControls  = () => {
    //     const {
    //         camera,
    //         gl: { domElement },
    //     } = useThree();
    //     const controls = useRef();
    //     useFrame((state) => controls.current.update());
    //     return <orbitControls ref={controls} args={[camera, domElement]} />
    // }
    const hideLoader = () => {
        document.querySelector(".loader").classList.add("load-complete");
    }

    return (
        <Canvas className="three-canvas" camera={{fov: 75, aspect: window.innerWidth/window.innerHeight, near: 0.1, far: 1000}}>
            <gridHelper size={200} divisions={50}></gridHelper>
            <ambientLight intensity={1.0} color={0xffffff}></ambientLight>
            {/* <CameraControls /> */}
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
        </Canvas>
    );
}