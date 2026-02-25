import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

type Props = {
  scale: number[];
  item: {
    title: string;
    color: string[];
    img: string;
  };
  size: string;
};

const IPhone = ({ scale, item }: Props) => {
  const { scene } = useGLTF("/models/scene.glb");

  // Clone scene + materials so multiple instances don't share the same objects
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = Array.isArray(child.material)
          ? child.material.map((m: THREE.Material) => m.clone())
          : child.material.clone();
      }
    });
    return clone;
  }, [scene]);

  // Apply the selected model color to all standard materials
  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material instanceof THREE.MeshStandardMaterial) {
          child.material.color.set(item.color[0]);
          child.material.needsUpdate = true;
        }
      }
    });
  }, [clonedScene, item]);

  return (
    <primitive
      object={clonedScene}
      scale={scale}
      position={[0, 0, 0]}
      rotation={[0.1, 0, 0]}
    />
  );
};

useGLTF.preload("/models/scene.glb");

export default IPhone;
