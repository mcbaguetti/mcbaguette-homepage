import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true}
) {
  const { receiveShadow, castShadow} = options
  return new Promise((resolve, rejext) => {

    const loader = new GLTFLoader()
    glbPath,
    gltf => {
      const obj = gltf.scene
      obj.name = 'falcon'
      obj.position.y = 0
      obj.position.x = 0
      obj.receiveShadow = receiveShadow
      obj.castShadow = castShadow
      scene.add(obj)

      obj.traverse(function (childe){
        if(child.isMesh){
          child.castShadow = castShadow
          child.receiveShadow = receiveShadow
        }
      })

      resolve(obj)
    },
    undefined,
    function(error){
      reject(error)
    }
  })
}
