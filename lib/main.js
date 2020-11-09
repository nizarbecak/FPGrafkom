//Membuat Scene
var scene = new THREE.Scene();

//Memasang Camera
var camera = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 1, 100);

//Membuat Renderer
var renderer = new THREE.WebGLRenderer();



renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);