import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "Oyster",

  projectId: "uw1md8cf",
  dataset: "production",
  basePath: "/admin",
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
