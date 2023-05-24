import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

function resize(rend: THREE.WebGLRenderer, cam: THREE.PerspectiveCamera) {
    const width = window.innerWidth / 2;
    const height = window.innerHeight;
    cam.aspect = width / height;
    cam.updateProjectionMatrix();
    rend.setSize(width, height);
}

function animate(rend: THREE.WebGLRenderer, cam: THREE.PerspectiveCamera, scene: THREE.Scene) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    rend.render(scene, cam);
    requestAnimationFrame(() => {
        animate(rend, cam, scene)
    });
}

export const createScene = (canv: Element) => {
    let renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canv });
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x7e2ea3);
    scene.add(cube);
    const camera = new THREE.PerspectiveCamera(75, (window.innerWidth / 2) / window.innerHeight, 0.1, 1000);
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 5;
    animate(renderer, camera, scene);
    window.addEventListener('resize', () => {
        resize(renderer, camera);
    });

}
