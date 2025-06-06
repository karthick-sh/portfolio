import SceneManager from './SceneManager';

export default container => {
    const canvas = createCanvas(document, container);
    const sceneManager = SceneManager(canvas);

    bindEventListeners();
    render();

    function createCanvas(document, container) {
        const canvas = document.createElement('canvas');  
        canvas.setAttribute("id", "canvas");
        container.current.insertBefore(canvas, container.firstChild);
        return canvas;
    }

    function bindEventListeners() {
        window.onresize = resizeCanvas;
        resizeCanvas();	
    }

    function resizeCanvas() {
        canvas.style.width = '100%';
        canvas.style.height= '100%';
        
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        sceneManager.onWindowResize()
    }

    function render(time) {
        requestAnimationFrame(render);
        sceneManager.update();
    }
}