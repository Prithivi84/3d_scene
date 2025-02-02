import React, { useState } from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../assets/Loader'
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';

function home() {

  const [isRotating, setIsRotating] =useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize =()=>{
    let screenScale=null;
    let screenPostion=[0,-6.5, -43];
    let rotation= [0.1,4.7, 0];

    if(window.innerWidth<768){
      screenScale =[0.9,0.9,0.9];
    }
    else{
      screenScale =[1,1,1];
    }
    return [screenScale,screenPostion, rotation];
  }
  
  const adjustPlaneForScreenSize =()=>{
    let screenScale, screenPostion;
    // let rotation= [0.1,4.7, 0];

    if(window.innerWidth<768){
      screenScale =[1.5,1.5,1.5];
      screenPostion=[0.-1.5,0]
    }
    else{
      screenScale =[3,3,3];
      screenPostion=[0,-4,-4];
    }
    return [screenScale,screenPostion];
  }
  const [islandScale,islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [PlaneScale,PlanePosition ]=adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        popup
      </div> */}

    <Canvas 
    className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing':'cursor-grab'}`}
    camera={{near:0.1, far:1000}}
    >

      <Suspense fallback={<Loader/>}>
        <directionalLight position={[1,1,1]} intensity={1}/>
        <ambientLight intensity={0.5}/>
        {/* <pointLight /> */}
        {/* <spotLight/> */}
        <hemisphereLight skyColor='#b131ff' groundColor="#000000" intensity={1}/>


        <Bird/>
        <Sky isRotating={isRotating}/>
        <Island
          position={islandPosition}
          scale={islandScale}
          rotation={islandRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
        />
        <Plane
        position={PlanePosition}
        scale={PlaneScale}
        isRotating={isRotating}
        rotation={[0,20,0]}
        />        
      </Suspense>

    </Canvas>


    </section>
  )
}

export default home

