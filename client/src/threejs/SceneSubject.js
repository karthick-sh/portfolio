import * as THREE from 'three'
import palleteImage from '../textures/pallete_bw_invert.png';

export default scene => {    
    const geometry = new THREE.PlaneBufferGeometry(100, 600, 400, 400);//param 1 was 100

    const uniforms = {
      time: { type: "f", value: 0.0 },
      distortCenter: { type: "f", value: 0.01 },
      roadWidth: { type: "f", value: 1 },
      pallete:{ type: "t", value: null},
      speed: { type: "f", value: 0.75 },
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

        var max_height;
        // console.log(scene.scroll_offset);
        if(scene.scroll_offset === undefined){
          max_height = scene.height;
        }
        else{
          max_height = scene.scroll_offset - 200;
        }

        if (scene.scroll_offset === undefined && scene.mouse.y === 0){
          scene.mouse.y = scene.height/2;
          scene.mouse.yDamped = scene.height/2;
        }

        if(max_height < 0){
          max_height = 0;
        }

        max_height = scene.height; //delete this line!

        terrain.material.uniforms.time.value = time;

        terrain.material.uniforms.distortCenter.value = Math.sin(time) * 0.01;

        //Modify this for height
        terrain.material.uniforms.maxHeight.value = map(scene.mouse.yDamped, 0, max_height, 20, 5);

        let mod_scroll_offset = scene.scroll_offset;
        let road_width_start = 1;
        if (scene.scroll_offset !== undefined){
          // terrain.position.y = 0.15*(scene.height - scene.scroll_offset);
          
          terrain.material.uniforms.roadWidth.value = road_width_start + (1 - mod_scroll_offset/scene.height)*15;
        }
    }   

    function relu(val){
      if(val < 0){
        return 0;
      }
      return val;
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