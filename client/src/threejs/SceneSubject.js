import * as THREE from 'three'
import palleteImage from '../textures/pallete_bw.png';

export default scene => {    
    const geometry = new THREE.PlaneBufferGeometry(100, 400, 400, 400);

    const uniforms = {
      time: { type: "f", value: 0.0 },
      distortCenter: { type: "f", value: 0.1 },
      roadWidth: { type: "f", value: 0.5 },
      pallete:{ type: "t", value: null},
      speed: { type: "f", value: 1 },
      maxHeight: { type: "f", value: 10.0 },
      color:new THREE.Color(1, 1, 1)
    }
    
    const material = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.merge([ THREE.ShaderLib.basic.uniforms, uniforms ]),
      vertexShader: document.getElementById( 'custom-vertex' ).textContent,
      fragmentShader: document.getElementById( 'custom-fragment' ).textContent,
      wireframe:false,
      fog:true
    });

    const terrain = new THREE.Mesh(geometry, material);
    terrain.position.z = -180;
    terrain.rotation.x = -Math.PI / 2

    scene.add(terrain)

    // PALLETE
    new THREE.TextureLoader().load( palleteImage, function(texture){
      terrain.material.uniforms.pallete.value = texture;
      terrain.material.needsUpdate = true;
    });


    function update() {
        // damping mouse for smoother interaction
        scene.mouse.xDamped = lerp(scene.mouse.xDamped, scene.mouse.x, 0.1);
        scene.mouse.yDamped = lerp(scene.mouse.yDamped, scene.mouse.y, 0.1);

        var time = performance.now() * 0.001
        
        terrain.material.uniforms.time.value = time;
        terrain.material.uniforms.distortCenter.value = Math.sin(time) * 0.1;
        terrain.material.uniforms.maxHeight.value = map(scene.mouse.yDamped, 0, scene.height, 20, 5);
    }   

    function lerp (start, end, amt){
        return (1 - amt) * start + amt * end
    }

    function map (value, start1, stop1, start2, stop2) {
        return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
    }

    return {
        update
    }
}