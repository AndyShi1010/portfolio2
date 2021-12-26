import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export default function ThreeCanvas () {
    return (
        <Canvas>
            <gridHelper size={200} divisions={50}></gridHelper>
            <ambientLight intensity={0.1} color={0xffffff}></ambientLight>
            {/* <PerspectiveCamera fov={75} aspect={window.innerWidth/window.innerHeight} near={0.1} far={1000}></PerspectiveCamera> */}
        </Canvas>
    );
}