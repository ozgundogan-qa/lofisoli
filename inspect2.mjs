import fs from 'fs';
import { NodeIO } from '@gltf-transform/core';

async function main() {
  const io = new NodeIO();
  const document = await io.read('public/3d-bracelet-object/highres.glb');
  const root = document.getRoot();
  root.listMeshes().forEach((mesh, i) => {
    mesh.listPrimitives().forEach((prim, j) => {
      console.log(`Primitive ${j} Attributes:`, prim.listSemantics());
    });
  });
}
main();
