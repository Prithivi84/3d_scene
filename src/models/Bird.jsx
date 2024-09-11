import React, { useEffect, useRef } from 'react'
import bird from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Bird() {
  const birdRef =useRef();
    const {scene, animations}=useGLTF(bird);
    const {actions}=useAnimations(animations,birdRef);

    useEffect(()=>{
      actions["Take 001"].play();
    },[]);

    useFrame((_, delta)=>{
      // birdRef.current.rotation +=0.15 *delta;
    })

  return (
    <mesh 
    position={[-3,1,1]} 
    scale={[0.003, 0.003, 0.003]}
    ref={birdRef}
    >

      <primitive object={scene}/>
    </mesh>
  )
}

export default Bird
