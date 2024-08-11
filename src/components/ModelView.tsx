import { SetStateAction } from "react";
import { Dispatch } from "react";
import { MutableRefObject } from "react";
import { Group, Object3DEventMap } from "three";

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

const ModelView = ({}: Props) => {
  return <div>ModelView</div>;
};

export default ModelView;
