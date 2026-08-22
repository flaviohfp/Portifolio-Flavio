import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const source = resolve(root, "out");
const target = resolve(root, "dist");

if (!existsSync(source)) {
  throw new Error('Next export output folder "out" was not created.');
}

rmSync(target, { force: true, recursive: true });
mkdirSync(target, { recursive: true });
cpSync(source, target, { recursive: true });

console.log('Static export copied to "dist".');
