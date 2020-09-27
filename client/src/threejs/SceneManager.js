import * as THREE from 'three';
import SceneSubject from './SceneSubject';

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

        return renderer;
    }

    function buildCamera({ width, height }) {
        const aspectRatio = width / height;
        const fieldOfView = 60;
        const nearPlane = 0.1;
        const farPlane = 10000; 
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        camera.position.z = 10;

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

    function onScroll(top_offset){
        scene.scroll_offset = top_offset;
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
        onMouseMove,
        onScroll
    }
}