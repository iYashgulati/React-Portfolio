'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create neon cube
    const geometry = new THREE.BoxGeometry(12, 12, 12);
    const material = new THREE.MeshStandardMaterial({
      color: 0x667eea,
      emissive: 0x667eea,
      emissiveIntensity: 0.5,
      metalness: 0.3,
      roughness: 0.4
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add wireframe overlay for neon effect
    const wireframeGeometry = new THREE.EdgesGeometry(geometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0x9ab9ef,
      linewidth: 2
    });
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    cube.add(wireframe);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0x667eea, 2, 50);
    light1.position.set(10, 10, 10);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xf093fb, 2, 50);
    light2.position.set(-10, -10, 10);
    scene.add(light2);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      targetRotationY = mouseX * Math.PI * 0.5;
      targetRotationX = mouseY * Math.PI * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Smooth rotation following mouse
      cube.rotation.x += (targetRotationX - cube.rotation.x) * 0.05;
      cube.rotation.y += (targetRotationY - cube.rotation.y) * 0.05;

      // Add slow auto-rotation when not moving mouse
      cube.rotation.x += 0.002;
      cube.rotation.y += 0.003;

      // Color shift
      const hue = 0.6 + Math.sin(time * 0.5) * 0.1;
      material.color.setHSL(hue, 1, 0.5);
      material.emissive.setHSL(hue, 1, 0.4);

      // Animate lights
      light1.position.x = Math.sin(time * 0.7) * 15;
      light1.position.z = Math.cos(time * 0.7) * 15;

      light2.position.x = Math.cos(time * 0.5) * 15;
      light2.position.z = Math.sin(time * 0.5) * 15;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}
