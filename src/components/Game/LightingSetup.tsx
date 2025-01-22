'use client'
import React, { useRef } from 'react'
import * as THREE from 'three'
// import dat from 'dat.gui'

export function LightingSetup() {
  const directionalLightRef = useRef<THREE.DirectionalLight>(null)
  const pointLightRef = useRef<THREE.PointLight>(null)

  // useEffect(() => {
  //   // const gui = new dat.GUI()

  //   // Directional Light settings
  //   if (directionalLightRef.current) {
  //     const dirLight = directionalLightRef.current
  //     const dirFolder = gui.addFolder('Directional Light')
  //     dirFolder
  //       .addColor(dirLight, 'color')
  //       .name('Color')
  //       .onChange(() => {
  //         dirLight.color.set(dirLight.color)
  //       })
  //     dirFolder.add(dirLight, 'intensity', 0, 10).name('Intensity')
  //     dirFolder.add(dirLight.position, 'x', -100, 100).name('Position X')
  //     dirFolder.add(dirLight.position, 'y', -100, 100).name('Position Y')
  //     dirFolder.add(dirLight.position, 'z', -100, 100).name('Position Z')
  //   }

  //   // Point Light settings
  //   if (pointLightRef.current) {
  //     const ptLight = pointLightRef.current
  //     const ptFolder = gui.addFolder('Point Light')
  //     ptFolder
  //       .addColor(ptLight, 'color')
  //       .name('Color')
  //       .onChange(() => {
  //         ptLight.color.set(ptLight.color)
  //       })
  //     ptFolder.add(ptLight, 'intensity', 0, 10).name('Intensity')
  //     ptFolder.add(ptLight.position, 'x', -100, 100).name('Position X')
  //     ptFolder.add(ptLight.position, 'y', -100, 100).name('Position Y')
  //     ptFolder.add(ptLight.position, 'z', -100, 100).name('Position Z')
  //   }

  //   return () => gui.destroy()
  // }, [])

  return (
    <>
      <directionalLight
        ref={directionalLightRef}
        position={[-10, 10, 10]}
        intensity={1}
        // color="#000000" // Set to black as per your requirement
      />
      <pointLight
        ref={pointLightRef}
        position={[10, 10, 10]}
        intensity={1}
        // color="#000000" // Set to black as per your requirement
      />
      {/* Optional Ambient Light for Fill */}
      <ambientLight intensity={0.1} color="#ffffff" />
    </>
  )
}
