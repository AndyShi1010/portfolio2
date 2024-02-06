<script lang="ts">
    import { onMount } from 'svelte';
    import { base } from '$app/paths'
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
    // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
    import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
    import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
    // import { UnrealBloomPass } from './TransparentBackgroundFixedUnrealBloomPass'
    import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
    import { loading } from '../stores';
    let canvas: Element;

    onMount(() => {
        initScene(canvas)

    });

    function initScene(canvas: Element) {
        let renderer = new THREE.WebGLRenderer({antialias: true, canvas: canvas, alpha: true});
        renderer.setClearColor(0x000000, 1);
        renderer.setSize(window.innerWidth, window.innerHeight);
        // renderer.setSize(window.innerWidth < 1080 ? window.innerWidth : window.innerWidth / 2, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        const scene = new THREE.Scene();

        const texture = new THREE.TextureLoader().load(`${base}/Bkg.jpg`)
        scene.background = texture;
        // const light = new THREE.AmbientLight( 0xffffff, 0.5 );
        // scene.add(light);

        // const width = window.innerWidth < 1080 ? window.innerWidth : window.innerWidth / 2;
        const width = window.innerWidth;
        const height = window.innerHeight;
        const camera = new THREE.PerspectiveCamera(4, width / height, 0.1, 1000);
        camera.position.z = window.innerWidth < 1080 ? 100 : 70;
        camera.position.x = window.innerWidth < 1080 ? 0 : -2;

        const bloom = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            0.4,
            1,
            0.05
        );
        const renderScene = new RenderPass(scene, camera);
        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloom);


        // const controls = new OrbitControls( camera, renderer.domElement );
        // controls.update();
        // controls.enablePan = false;
        // controls.enableDamping = true;
        // const axesHelper = new THREE.AxesHelper( 5 );
        // scene.add( axesHelper );
        // const gridHelper = new THREE.GridHelper( 1, 20 );
        // scene.add( gridHelper );

        const loader = new GLTFLoader();
        loader.loadAsync(`${base}/FlowerTestBaked.gltf`).then((gltf) => {
            let model = gltf.scene;
            let modelId = model.id;
            model.rotation.x = 1
            // model.rotation.y = 100;
            scene.add(model);
            loading.set(false); 
            animate(renderer, camera, scene, modelId, composer);
            window.addEventListener('resize', () => {
                resize(renderer, camera);
            });
            window.addEventListener('mousemove', (e) => {
                let centerX = window.innerWidth * 0.5;
                let centerY = window.innerHeight * 0.5;
                
                // model.rotation.z = (e.clientX - centerX) / centerX * -0.2;
                model.rotation.x = 1 + (e.clientY - centerY) / centerY * 0.2;
            })
        });
    }

    function resize(rend: THREE.WebGLRenderer, cam: THREE.PerspectiveCamera) {
        // const width = window.innerWidth < 1080 ? window.innerWidth : window.innerWidth / 2;
        const width = window.innerWidth;
        const height = window.innerHeight;
        cam.aspect = width / height;
        cam.position.z = window.innerWidth < 1080 ? 100 : 70;
        cam.position.x = window.innerWidth < 1080 ? 0 : -2;
        cam.updateProjectionMatrix();
        rend.setSize(width, height);
    }

    function animate(rend: THREE.WebGLRenderer, cam: THREE.PerspectiveCamera, scene: THREE.Scene, modelId: number, composer: EffectComposer) {
        let model = scene.getObjectById(modelId);
        if (model) {
            model.rotation.y += 0.01
        }
        composer.render();
        // cam.rotation.z += Math.PI/100
        // console.log(controls.getAzimuthalAngle(), controls.getPolarAngle(), controls.getDistance())
        // console.log("animate", rend, cam, scene)
        // rend.render(scene, cam);
        requestAnimationFrame(() => {
            animate(rend, cam, scene, modelId, composer)
        });
    }
</script>

<!-- {loading} -->
<canvas id="three-canvas" bind:this={canvas}></canvas>
 
<style>
    #three-canvas {
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        z-index: -3;
    }
</style>