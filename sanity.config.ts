import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "@/sanity/schemas";
import { codeInput } from "@sanity/code-input";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE as string,
  dataset: "production",
  apiVersion: "2023-06-18",
  basePath: "/admin",
  plugins: [structureTool(), codeInput()],
  schema: { types: schemas },
});

export default config;
