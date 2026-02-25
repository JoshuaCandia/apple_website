const Lights = () => {
  return (
    <>
      <spotLight
        position={[0, 10, 0]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
        castShadow
      />
      <spotLight
        position={[0, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={2}
        castShadow
      />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
    </>
  );
};

export default Lights;
