import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../assets/models/test/untitled.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('../assets/models/test/untitled.gltf')
