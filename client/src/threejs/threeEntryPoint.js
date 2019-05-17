import SceneManager from './SceneManager';

export default container => {
    const canvas = createCanvas(document, container);
    const sceneManager = new SceneManager(canvas);

    bindEventListeners();
    render();

    function createCanvas(document, container) {
        const canvas = document.createElement('canvas');  
        canvas.setAttribute("id", "canvas");
        container.insertBefore(canvas, container.firstChild);
        return canvas;
    }

    function bindEventListeners() {
        window.onresize = resizeCanvas;
        window.addEventListener("mousemove", onInputMove) //Also consider touch
        //window.onmousemove = mouseMove;
        resizeCanvas();	
    }

    function resizeCanvas() {        
        canvas.style.width = '100%';
        canvas.style.height= '100%';
        
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        sceneManager.onWindowResize()
    }

    function onInputMove(e){
        e.preventDefault();
        
        var x, y
        if(e.type === "mousemove"){
          x = e.clientX;
          y = e.clientY;
        }else{
          x = e.changedTouches[0].clientX
          y = e.changedTouches[0].clientY
        }
        
        sceneManager.onMouseMove(x, y);
        //console.log(x, y);
        
      }

    function render(time) {
        requestAnimationFrame(render);
        sceneManager.update();
    }
}