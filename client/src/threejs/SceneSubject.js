import * as THREE from 'three'
import palleteImage from '../textures/pallete_grey.png';

export default scene => {    
    const geometry = new THREE.PlaneBufferGeometry(100, 150, 400, 400);//param 1 was 100

    const uniforms = {
      time: { type: "f", value: 0.0 },
      distortCenter: { type: "f", value: 0.1 },
      roadWidth: { type: "f", value: 5 },
      pallete:{ type: "t", value: null},
      speed: { type: "f", value: 0.25 },
      maxHeight: { type: "f", value: 20.0 },
      color:new THREE.Color(230, 230, 230)
    }
    
    const material = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.merge([ THREE.ShaderLib.basic.uniforms, uniforms ]),
      vertexShader: document.getElementById( 'custom-vertex' ).textContent,
      fragmentShader: document.getElementById( 'custom-fragment' ).textContent,
      wireframe:false,
      fog:false
    });

    const terrain = new THREE.Mesh(geometry, material);
    terrain.position.z = -20;
    terrain.rotation.x = -Math.PI / 4;

    scene.add(terrain)

    // PALLETE
    new THREE.TextureLoader().load( palleteImage, function(texture){
      terrain.material.uniforms.pallete.value = texture;
      terrain.material.needsUpdate = true;
    });


    function update() {
        // damping mouse for smoother interaction
        scene.mouse.xDamped = 0;
        scene.mouse.yDamped = 0;

        var time = performance.now() * 0.001

        terrain.material.uniforms.time.value = time;
        terrain.material.uniforms.distortCenter.value = map(0, 0, scene.width, -0.1, 0.1);

        //Modify this for height
        terrain.material.uniforms.roadWidth.value = map(0, 0, scene.height, -0.5, 2.5);
    }   

    function map (value, start1, stop1, start2, stop2) {
        return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
    }

    return {
        update
    }
}