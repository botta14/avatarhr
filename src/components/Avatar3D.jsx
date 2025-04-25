import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Avatar3D = () => {
    const avatarRef = useRef();

    // حركة الأفاتار مع الماوس
    useFrame(({ mouse }) => {
        if (avatarRef.current) {
            avatarRef.current.rotation.y = mouse.x * Math.PI;
            avatarRef.current.rotation.x = -mouse.y * Math.PI * 0.2;
        }
    });

    return (
        <Canvas camera={{ position: [0, 0, 5] }} style={{ height: "100vh" }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <mesh ref={avatarRef}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="blue" />
            </mesh>
            <OrbitControls />
        </Canvas>
    );
};

export default Avatar3D;
