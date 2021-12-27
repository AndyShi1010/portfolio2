import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'

export default function Model(props) {
  // const group = useRef()
  // const { nodes, materials } = useGLTF('../assets/models/test/untitled.gltf')
  // return (
  //   <group ref={group} {...props} dispose={null}>
  //     <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.Material} />
  //   </group>
  // )
  const gltf = useLoader(GLTFLoader, '../assets/models/test/untitled.gltf')
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  )
}

// useGLTF.preload('../assets/models/test/untitled.gltf')
