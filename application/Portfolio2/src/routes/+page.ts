// import type { PageLoad } from './$types';
// import * as THREE from 'https://unpkg.com/svelthree@latest/dist/svelthree.mjs';

// export const load = (async () => {
//     return () => {
    
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x7e2ea3);
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//     const renderer = new THREE.WebGLRenderer({antialias: true});
//     renderer.domElement.id = "three-canvas";
//     // renderer.antialias = true;
//     window.onresize = () => {
//       const width = window.innerWidth;
//       const height = window.innerHeight;
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//       renderer.setSize(width, height);
//     }
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);
//     const geometry = new THREE.BoxGeometry(1, 1, 1);
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     camera.position.z = 5;

//     function animate() {
//       requestAnimationFrame(animate);
//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     }
//     animate();
//       // Our Javascript will go here.
//     };
// }) satisfies PageLoad;