'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { getWheelRotationAngle } from './utils/getWheelRotationAngle'
import { getWheelActiveColors } from './utils/getWheelActiveColors'
import { Color, PCFSoftShadowMap } from 'three'

export default function SpinWheel({ rotationSpeed, isLoading, initialValue }) {
  const [hasRotated, setHasRotated] = useState(false) // Track if the wheel has rotated at least once
  const { nodes, materials, isReady } = useGLTF('/wheel.glb')
  const { gl, scene } = useThree() // Access renderer for shadow setup
  const directionalLightRef = useRef(null)
  // console.log('nodes', nodes)
  // console.log('materials', materials);

  const wheelRef = useRef()

  useEffect(() => {
    // Function to set the wheel rotation angle based on the initial value
    const setWheelRotation = async () => {
      // Check if loading is complete and if wheel reference is available
      if (!isLoading && wheelRef.current) {
        // Get the rotation angle for the wheel based on the initial face value
        const angle = await getWheelRotationAngle(initialValue)
        if (angle) {
          // Set the wheel's rotation to the calculated angle
          wheelRef.current.rotation.set(0, 0, angle.z)
          // console.log('angle', angle);
        }
      }
    }

    // Retrieve the active face colors based on the initial face value
    const faceColors = getWheelActiveColors(initialValue)
    console.log('faceColors', faceColors)

    // Enable shadows if WebGL and directional light reference are available
    if (gl && directionalLightRef.current && faceColors) {
      gl.shadowMap.enabled = true // Enable shadow map in WebGL renderer
      gl.shadowMap.type = PCFSoftShadowMap // Set shadow mapping type for smoother shadows

      // Configure the directional light's shadow properties
      directionalLightRef.current.castShadow = true
      directionalLightRef.current.shadow.mapSize.width = 1024 // Shadow map width
      directionalLightRef.current.shadow.mapSize.height = 1024 // Shadow map height
      directionalLightRef.current.shadow.camera.near = 1 // Near clipping plane for shadow camera
      directionalLightRef.current.shadow.camera.far = 100 // Far clipping plane for shadow camera
    }

    // Apply colors to the specified meshes in the scene if nodes are available
    if (nodes) {
      // Loop over each mesh name in the faceColors object
      Object.keys(faceColors).forEach((meshName) => {
        // Retrieve the mesh object for the specified mesh name
        const meshToHighlight = nodes[meshName]

        // console.log('meshToHighlight', meshToHighlight);
        if (meshToHighlight) {
          // Set default color as a fallback in case highlighting fails
          const originalColor = new Color('#432660') // #432660 similar color
          // Set the highlight color from faceColors for this specific mesh
          const highlightColor = new Color(faceColors[meshName])
          // console.log('highlightColor', highlightColor);
          // Enable casting and receiving shadows on the mesh
          // meshToHighlight.castShadow = true
          // meshToHighlight.receiveShadow = true

          if (isLoading) {
            // If loading, apply the original color and reset hasRotated
            meshToHighlight.material.color.copy(originalColor)
            setHasRotated(true)
            console.log('print the first time')
          } else if (hasRotated) {
            // Once rotation has happened, apply the highlight color to the mesh
            console.log(`Applying highlight color to ${meshName}`)
            meshToHighlight.material.color.copy(highlightColor)
          } else {
            // Default case for meshes without highlighting
            // meshToHighlight.material.color.copy(originalColor)
          }

          // Ensure the material updates immediately with new color
          meshToHighlight.material.needsUpdate = true
          // Recompute vertex normals if needed for smoother shading
          meshToHighlight.geometry.computeVertexNormals()
        } else {
          // Log a warning if the mesh name was not found in the nodes
          // console.warn(`Mesh ${meshName} not found in nodes`);
        }
      })
    }

    // Call function to set the rotation based on initial value
    setWheelRotation()
  }, [initialValue, isLoading, nodes, hasRotated, gl, scene])

  // Rotate the wheel while spinning
  useFrame(() => {
    if (isLoading && wheelRef.current) {
      wheelRef.current.rotation.z += rotationSpeed
    }
  })

  if (isReady) {
    return <Loader /> // Replace with a loading indicator
  }

  return (
    <>
      <group ref={wheelRef} dispose={null}>
        <group name="Scene">
          {/* CASE 3 ==> FACE x2 */}
          <group
            name="slot1"
            position={[0, 0, -0.278]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.018}
          >
            <mesh
              name="Circle004"
              geometry={nodes.Circle004.geometry}
              material={materials.slot1m}
            />
            <mesh
              name="Circle004_1"
              geometry={nodes.Circle004_1.geometry}
              material={materials.emmision}
            />
          </group>
          <group
            name="slot2"
            position={[0, 0, -0.278]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.018}
          >
            <mesh
              name="Circle005"
              geometry={nodes.Circle005.geometry}
              material={materials.slot2m}
            />
            <mesh
              name="Circle005_1"
              geometry={nodes.Circle005_1.geometry}
              material={materials['emmision.001']}
            />
          </group>

          <group
            name="slot3"
            position={[0, 0, -0.278]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.018}
          >
            <mesh
              name="Circle007"
              geometry={nodes.Circle007.geometry}
              material={materials.slot3m}
            />
            <mesh
              name="Circle007_1"
              geometry={nodes.Circle007_1.geometry}
              material={materials['emmision.002']}
            />
          </group>
          {/* CASE 1 ==> Face x5 */}
          <group
            name="slot4"
            position={[0, 0, -0.278]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.018}
          >
            {/* the background */}
            <mesh
              name="Circle008"
              geometry={nodes.Circle008.geometry}
              material={materials.slot4m}
            />
            {/* the text */}
            <mesh
              name="Circle008_1"
              geometry={nodes.Circle008_1.geometry}
              material={materials['emmision.003']}
            />
          </group>
          {/* CASE 6 ==> FACE x10 */}
          <group
            name="slot5"
            position={[0, 0, -0.278]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.018}
          >
            {/* the background */}
            <mesh
              name="Circle010"
              geometry={nodes.Circle010.geometry}
              material={materials.slot5m}
            />
            {/* the text */}
            <mesh
              name="Circle010_1"
              geometry={nodes.Circle010_1.geometry}
              material={materials['emmision.004']}
            />
          </group>
          <group
            name="slot6"
            position={[0, 0, -0.278]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.018}
          >
            <mesh
              name="Circle013"
              geometry={nodes.Circle013.geometry}
              material={materials.slot6m}
            />
            <mesh
              name="Circle013_1"
              geometry={nodes.Circle013_1.geometry}
              material={materials['emmision.005']}
            />
          </group>
          <group
            name="slot7"
            position={[0, 0, -0.278]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.018}
          >
            <mesh
              name="Circle014"
              geometry={nodes.Circle014.geometry}
              material={materials.slot7m}
            />
            <mesh
              name="Circle014_1"
              geometry={nodes.Circle014_1.geometry}
              material={materials['emmision.006']}
            />
          </group>
          <group
            name="slot8"
            position={[0, 0, -0.278]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.018}
          >
            <mesh
              name="Circle015"
              geometry={nodes.Circle015.geometry}
              material={materials.slot8m}
            />
            <mesh
              name="Circle015_1"
              geometry={nodes.Circle015_1.geometry}
              material={materials['emmision.007']}
            />
          </group>
          {/* CASE 2 ===> FAACE x4 */}
          <group
            name="slot9"
            position={[0, 0, -0.278]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.018}
          >
            {/* the background */}
            <mesh
              name="Circle016"
              geometry={nodes.Circle016.geometry}
              material={materials.slot9m}
            />
            {/* the text */}
            <mesh
              name="Circle016_1"
              geometry={nodes.Circle016_1.geometry}
              material={materials['emmision.008']}
            />
          </group>
          <group
            name="slot10"
            position={[0, 0, -0.278]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.018}
          >
            <mesh
              name="Circle017"
              geometry={nodes.Circle017.geometry}
              material={materials.slot10m}
            />
            <mesh
              name="Circle017_1"
              geometry={nodes.Circle017_1.geometry}
              material={materials['emmision.009']}
            />
          </group>
          <group
            name="slot11"
            position={[0, 0, -0.278]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.018}
          >
            <mesh
              name="Circle018"
              geometry={nodes.Circle018.geometry}
              material={materials.slot11m}
            />
            <mesh
              name="Circle018_1"
              geometry={nodes.Circle018_1.geometry}
              material={materials['emmision.010']}
            />
          </group>
          <group
            name="slot12"
            position={[0, 0, -0.278]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.018}
          >
            <mesh
              name="Circle022"
              geometry={nodes.Circle022.geometry}
              material={materials.slot12m}
            />
            <mesh
              name="Circle022_1"
              geometry={nodes.Circle022_1.geometry}
              material={materials['emmision.011']}
            />
          </group>
          {/* CASE 4 ==> FACE x7 */}
          <group
            name="slot13"
            position={[0, 0, -0.278]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.018}
          >
            {/* the background */}
            <mesh
              name="Circle024"
              geometry={nodes.Circle024.geometry}
              material={materials.slot13m}
            />
            {/* the text */}
            <mesh
              name="Circle024_1"
              geometry={nodes.Circle024_1.geometry}
              material={materials['emmision.012']}
            />
          </group>
          {/* CASE 5 ==> FACE x20 */}
          <group
            name="slot14"
            position={[0, 0, -0.278]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.018}
          >
            {/* the background */}
            <mesh
              name="Circle025"
              geometry={nodes.Circle025.geometry}
              material={materials.slot14m}
            />
            {/* the text */}
            <mesh
              name="Circle025_1"
              geometry={nodes.Circle025_1.geometry}
              material={materials['emmision.013']}
            />
          </group>
          <group
            name="slot15"
            position={[0, 0, -0.278]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.018}
          >
            <mesh
              name="Circle026"
              geometry={nodes.Circle026.geometry}
              material={materials.slot15m}
            />
            <mesh
              name="Circle026_1"
              geometry={nodes.Circle026_1.geometry}
              material={materials['emmision.014']}
            />
          </group>
          <group
            name="slot16"
            position={[0, 0, -0.278]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.018}
          >
            <mesh
              name="Circle027"
              geometry={nodes.Circle027.geometry}
              material={materials.slot16m}
            />
            <mesh
              name="Circle027_1"
              geometry={nodes.Circle027_1.geometry}
              material={materials['emmision.015']}
            />
          </group>

          <mesh
            name="Circle002"
            geometry={nodes.Circle002.geometry}
            material={nodes.Circle002.material}
            position={[-0.103, -0.395, -0.192]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={4.014}
          />

          <mesh
            name="NurbsPath027"
            geometry={nodes.NurbsPath027.geometry}
            material={materials['Material.001']}
            rotation={[Math.PI / 2, -0.127, 0]}
            scale={[0.255, 0.213, 0.205]}
          />
          <group
            name="NurbsPath028"
            position={[0, 0, -0.112]}
            rotation={[Math.PI / 2, -0.127, 0]}
            scale={[0.255, 0.213, 0.205]}
          >
            <mesh
              name="NurbsPath028_1"
              geometry={nodes.NurbsPath028_1.geometry}
              material={materials['Material.006']}
            />
            <mesh
              name="NurbsPath028_2"
              geometry={nodes.NurbsPath028_2.geometry}
              material={materials['Material.007']}
            />
          </group>
          <mesh
            name="NurbsPath030"
            geometry={nodes.NurbsPath030.geometry}
            material={materials['Material.001']}
            rotation={[Math.PI / 2, -0.127, 0]}
            scale={[0.255, 0.213, 0.205]}
          />
          <mesh
            name="NurbsPath032"
            geometry={nodes.NurbsPath032.geometry}
            material={materials['Material.001']}
            rotation={[Math.PI / 2, -0.127, 0]}
            scale={[0.255, 0.213, 0.205]}
          />
        </group>
      </group>
      {/* The Arrow Mesh */}
      <group
        name="NurbsPath002"
        position={[-0.044, 5.419, 1.034]}
        //   position={[0, 0, 0]}
        rotation={[1.992, -0.293, 0]}
        scale={[0.184, 0.153, 0.148]}
      >
        <mesh
          name="NurbsPath010"
          geometry={nodes.NurbsPath010.geometry}
          material={materials['Material.001']}
        />
        <mesh
          name="NurbsPath010_1"
          geometry={nodes.NurbsPath010_1.geometry}
          material={materials['Material.005']}
        />
      </group>
      {/* the stand mesh */}
      <group
        name="Circle009"
        position={[0, -4.974, -1.411]}
        rotation={[-Math.PI, 0, 0]}
        scale={[1.041, 0.742, 1.041]}
      >
        <mesh
          name="Circle009_1"
          geometry={nodes.Circle009_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          name="Circle009_2"
          geometry={nodes.Circle009_2.geometry}
          material={materials['Material.004']}
        />
      </group>
    </>
  )
}

useGLTF.preload('/wheel.glb')
