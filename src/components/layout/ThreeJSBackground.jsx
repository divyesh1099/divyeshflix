import React, { useRef, useEffect } from 'react';

const ThreeJSBackground = () => {
    const mountRef = useRef(null);
    useEffect(() => {
        if (!window.THREE) return; 

        const scene = new window.THREE.Scene();
        const camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new window.THREE.WebGLRenderer({ canvas: mountRef.current, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const geometry = new window.THREE.TorusKnotGeometry(10, 3, 100, 16);
        const material = new window.THREE.MeshStandardMaterial({ color: 0xff0000, wireframe: true, roughness: 0.5 });
        const torusKnot = new window.THREE.Mesh(geometry, material);
        torusKnot.position.z = -30;
        scene.add(torusKnot);

        const light = new window.THREE.PointLight(0xffffff, 1, 100);
        light.position.set(10, 10, -10);
        scene.add(light);
        
        const ambientLight = new window.THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            torusKnot.rotation.x += 0.001;
            torusKnot.rotation.y += 0.001;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <canvas ref={mountRef} className="fixed top-0 left-0 -z-10" />;
};

export default ThreeJSBackground;
