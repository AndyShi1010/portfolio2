import * as THREE from 'three';
import { base } from '$app/paths'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


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
    let renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canv, alpha: true  });
    renderer.setClearColor( 0x000000, 0 );
    const scene = new THREE.Scene();
    scene.background = null
    const loader = new GLTFLoader();
    // const gltf = useLoader(GLTFLoader, '../assets/models/test/untitled.gltf')
    loader.load(`${base}/Avocado.gltf`, (gltf) => {
        scene.add(gltf.scene);
    });
    const light = new THREE.PointLight( 0xffffff, 1, 0, 2 );
    light.position.set( -20, -20, 20 );
    scene.add( light );
    const light2 = new THREE.PointLight( 0xffffff, 1, 0, 2 );
    light2.position.set( -20, -20, -20 );
    scene.add( light2 );
    const camera = new THREE.PerspectiveCamera(4, (window.innerWidth / 2) / window.innerHeight, 0.1, 1000);
    const gridHelper = new THREE.GridHelper( 1, 20 );
    scene.add( gridHelper );
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    const controls = new OrbitControls( camera, renderer.domElement );
    // controls.target.set( 0, 0.5, 0 );
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;

    camera.position.z = 2;
    animate(renderer, camera, scene);
    window.addEventListener('resize', () => {
        resize(renderer, camera);
    });

}
