import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({

    projectId: "gfcigyhw",
    dataset: "production",
    title: "My personal website",
    apiVersion: "2023-07-12",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas}

});

export default config