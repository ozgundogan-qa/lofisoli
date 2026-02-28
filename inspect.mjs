import fs from 'fs';
import { NodeIO } from '@gltf-transform/core';

async function main() {
    const io = new NodeIO();
    const document = await io.read('public/3d-bracelet-object/highres.glb');
    const root = document.getRoot();
    console.log('Meshes:', root.listMeshes().length);
    root.listMeshes().forEach((mesh, i) => {
        console.log(`Mesh ${i}: ${mesh.getName()}`);
        mesh.listPrimitives().forEach((prim, j) => {
            console.log(`  Primitive ${j}: material ${prim.getMaterial()?.getName()}`);
        });
    });
    console.log('Materials:', root.listMaterials().length);
    root.listMaterials().forEach((mat, i) => {
        console.log(`Material ${i}: ${mat.getName()}`);
    });
}
main();
