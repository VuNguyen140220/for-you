import * as THREE from './three.module.js'
let scene, camera, renderer, cube

function init() {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') })
  renderer.setSize(window.innerWidth, window.innerHeight)

  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  camera.position.z = 5
}

function animate() {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}

document.getElementById('cuteButton').addEventListener('click', function () {
  const loveText = document.getElementById('loveText')
  loveText.classList.add('show')
  animate()
})

init()