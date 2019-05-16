import * as THREE from 'three';
import SceneSubject from './SceneSubject';
import * as Sky from '../threeSky';
//import GeneralLights from './GeneralLights';

export default canvas => {

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const mousePosition = {
        x: 0,
        y: 0,
        xDamped: 0,
        yDamped: 0
    }

    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene);

    function buildScene() {
        const scene = new THREE.Scene();
        scene.mouse = mousePosition;
        scene.width = screenDimensions.width;
        scene.height = screenDimensions.height;

        const fogColor = new THREE.Color( 0x000000 );
        scene.background = fogColor

        scene.fog = new THREE.Fog(fogColor, 10, 400);

        // SKY SECTION
        
        const sky = new Sky();
        sky.scale.setScalar( 450000 );
        sky.material.uniforms.turbidity.value = 1;
        sky.material.uniforms.rayleigh.value = 0.01;
        sky.material.uniforms.luminance.value = 1;
        sky.material.uniforms.mieCoefficient.value = 0.0003;
        sky.material.uniforms.mieDirectionalG.value = 0.99995;
        
        scene.add( sky );

        // SUN HELPER
        const sunSphere = new THREE.Mesh(
          new THREE.SphereBufferGeometry( 20000, 16, 8 ),
          new THREE.MeshBasicMaterial( { color: 0xffffff } )
        );
        sunSphere.visible = false;

        scene.add( sunSphere );
        
        const theta = Math.PI * ( -0.03 );
        const phi = 2 * Math.PI * ( -.25 );

        sunSphere.position.x = 400000 * Math.cos( phi );
        sunSphere.position.y = 400000 * Math.sin( phi ) * Math.sin( theta );
        sunSphere.position.z = 400000 * Math.sin( phi ) * Math.cos( theta );
        
        sky.material.uniforms.sunPosition.value.copy( sunSphere.position );

        // AMBIENT LIGHT
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight)

        return scene;
    }

    function buildRender({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ 
            canvas: canvas,
            antialias: false
        }); 
        const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);

        // renderer.gammaInput = true;
        // renderer.gammaOutput = true; 

        return renderer;
    }

    function buildCamera({ width, height }) {
        const aspectRatio = width / height;
        const fieldOfView = 60;
        const nearPlane = 0.1;
        const farPlane = 10000; 
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        camera.position.y = 8;
        camera.position.z = 4;

        return camera;
    }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new SceneSubject(scene)
        ];

        return sceneSubjects;
    }

    function update() {
        //const elapsedTime = clock.getElapsedTime();

        //for(let i=0; i<sceneSubjects.length; i++)
        //    sceneSubjects[i].update(elapsedTime);
        sceneSubjects[0].update();
        //updateCameraPositionRelativeToMouse();

        renderer.render(scene, camera);
    }

    // function updateCameraPositionRelativeToMouse() {
    //     camera.position.x += (  (mousePosition.x * 0.01) - camera.position.x ) * 0.01;
    //     camera.position.y += ( -(mousePosition.y * 0.01) - camera.position.y ) * 0.01;
    //     camera.lookAt(origin);
    // }

    function onWindowResize() {
        const { width, height } = canvas;
        
        screenDimensions.width = width;
        screenDimensions.height = height;

        scene.width = width;
        scene.height = height;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    }

    function onMouseMove(x, y) {
        //console.log(x, y);
        // if (x < -360){
        //     mousePosition.x = -360;
        // }
        // else if (x > 360) {
        //     mousePosition.x = 360;
        // }
        // else {
        //     mousePosition.x = x;    
        // }

        

        // if (y < 0){
        //     mousePosition.y = 0;
        // }
        // else {
        //     mousePosition.y = y;
        // }
        // mousePosition.x = x;
        // mousePosition.y = y;
        scene.mouse.x = x;
        scene.mouse.y = y;
        
    }

    return {
        update,
        onWindowResize,
        onMouseMove
    }
}