import {
  View,
  PerspectiveCamera,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { Suspense } from "react";
import type { Dispatch, MutableRefObject, SetStateAction } from "react";
import type { Group, Object3DEventMap } from "three";
import * as THREE from "three";
import Lights from "./Lights";
import IPhone from "./IPhone";

type Props = {
  index: number;
  groupRef: MutableRefObject<Group<Object3DEventMap>>;
  gsapType: string;
  controlRef: MutableRefObject<unknown>;
  setRotationState: Dispatch<SetStateAction<number>>;
  item: {
    title: string;
    color: string[];
    img: string;
  };
  size: string;
};

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}: Props) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef as any}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(groupRef.current.rotation.y)}
      />

      <group
        ref={groupRef}
        name={index === 1 ? "small" : "large"}
        position={[0, 0, 0]}
      >
        <Suspense fallback={null}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>

      <Environment preset="city" background={false} />
    </View>
  );
};

export default ModelView;
