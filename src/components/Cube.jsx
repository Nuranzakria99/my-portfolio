/*
    Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import {  useGLTF } from '@react-three/drei';

const Cube = (props) => {
  const { nodes, materials } = useGLTF('/models/scene.gltf')

  return (
    <group {...props} dispose={null}>
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005_0.geometry}
        material={materials['Material.006']}
        position={[-1.004, 0.014, -0.014]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.882}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004_0.geometry}
        material={materials['Material.005']}
        position={[1.006, 0.014, -0.014]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.882}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003_0.geometry}
        material={materials['Material.004']}
        position={[0, 0.014, -1.009]}
        scale={0.882}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002_0.geometry}
        material={materials['Material.003']}
        position={[0, 1.002, 0.014]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.882}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_0.geometry}
        material={materials['Material.002']}
        position={[0, -0.013, 1.003]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.882}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_0.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_0.geometry}
        material={materials['Material.001']}
        position={[0, -1.001, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.882}
      />
    </group>
  </group>
  );
};

useGLTF.preload('/models/scene.gltf')

export default Cube;