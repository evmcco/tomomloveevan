var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
camera.position.z = 10;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#FFD2D6");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})

// var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var material = new THREE.MeshLambertMaterial({color: 0xFFD2D6});

//create cubes
meshArray = [];
const colorArray = [0xFFD38E, 0x90E4CD, 0x84DCE0, 0xFD65AF, 0xFFD2D6]
let color = 0xFFD2D6
// for(var i = 0; i < 10; i++) {
//     geometry = new THREE.BoxGeometry(1, 1, 1);
//     color = colorArray[Math.floor(Math.random() * 4)]
//     material = new THREE.MeshLambertMaterial({color: color});
//     var mesh = new THREE.Mesh(geometry, material);
//     mesh.position.x = (Math.random() - 0.5) * 8;
//     mesh.position.y = (Math.random() - 0.3) * 8;
//     mesh.position.z = (Math.random() - 0.5) * 3;
//     scene.add(mesh);
//     meshArray.push(mesh);
// }

var light = new THREE.PointLight(0xFFF1E0, .75, 1000)
light.position.set(0,0,0);
scene.add(light);

var light = new THREE.PointLight(0xFFF1E0, 1.75, 1000)
light.position.set(0,0,25);
scene.add(light);

var render = function() {
    requestAnimationFrame(render);

    meshArray.forEach(function(meshObj){
        meshObj.rotation.y -= .01;
    })

    renderer.render(scene, camera);
}

function loadFont(loader) {
    return new Promise(resolve => {
        loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_bold.typeface.json', resolve);
    });
}

//create text object
var loader = new THREE.FontLoader();
material = new THREE.MeshLambertMaterial({color: 0xe68f97});
//randomize text
let textArray = []
textArray.push("To Mom:");
textArray.push("Happy \nMother's Day!");
textArray.push("You're the \nbest mom");
textArray.push("a son could \nask for.");
textArray.push("I can't say");
textArray.push("Thank You\nenough for");
textArray.push("All your\nhelp");
textArray.push("While I've\nbeen");
textArray.push("broke.");
textArray.push("I promise");
textArray.push("I'll come \nvisit more!");
textArray.push("Have a \ngreat day!");
textArray.push("Love Evan,");
textArray.push("the \nend");






let textInd = 0
loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_bold.typeface.json', font => {
        geometry = new THREE.TextGeometry( textArray[textInd], {font: font, size: .8, height: .5, curveSegments: 12});
        console.log(geometry);
    });





let button = document.getElementById("confetti");
window.addEventListener('click', function(){
    textInd += 1;
    if (textInd <= 13){
        loader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_bold.typeface.json', font => {
            geometry = new THREE.TextGeometry( textArray[textInd], {font: font, size: .8, height: .5, curveSegments: 12});
            console.log(geometry);
        });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = -3;
        mesh.position.y = 0;
        mesh.position.z = 2;
        scene.add(mesh);
        console.log(scene);
        renderer.render(scene, camera);
        this.tl = new TimelineMax();
        this.tl.to(mesh.position, 20, {z: mesh.position.z - 50})
        this.tl.to(mesh.position, 20, {y: mesh.position.y + 50}, "-=20")
    }
    else if (textInd === 14) {
        for(var i = 0; i < 10; i++) {
            geometry = new THREE.BoxGeometry(1, 1, 1);
            color = colorArray[Math.floor(Math.random() * 4)]
            material = new THREE.MeshLambertMaterial({color: color});
            var mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = (Math.random() - 0.5) * 8;
            mesh.position.y = (Math.random() - 0.3) * 8;
            mesh.position.z = (Math.random() - 0.5) * 3;
            scene.add(mesh);
            meshArray.push(mesh);
        }
    }
    else {
        return
    }
});
    

render();