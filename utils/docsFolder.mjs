import fs from 'fs/promises';
import path from 'path';

const __dirname = new URL('.', import.meta.url).pathname;

const ghpdocsDir = path.join(__dirname, '../ghpdocs');
const distDir = path.join(__dirname, '../docs/dist');

async function clearDirectory(directory) {
  try {
    const files = await fs.readdir(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = await fs.stat(filePath);

      if (stat.isDirectory()) {
        await clearDirectory(filePath);
        await fs.rmdir(filePath); 
      } else {
        await fs.unlink(filePath); 
      }
    }
    console.log(`Cleared the contents of ${directory}`);
  } catch (err) {
    console.error(`Error clearing directory ${directory}:`, err);
  }
}

async function copyDirectory(src, dest) {
  try {
    const files = await fs.readdir(src);

    for (const file of files) {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      const stat = await fs.stat(srcPath);

      if (stat.isDirectory()) {
        await fs.mkdir(destPath, { recursive: true });
        await copyDirectory(srcPath, destPath);
      } else {
        await fs.copyFile(srcPath, destPath);
      }
    }
    console.log(`Copied contents from ${src} to ${dest}`);
  } catch (err) {
    console.error(`Error copying from ${src} to ${dest}:`, err);
  }
}

async function createNojekyllFile(directory) {
  const nojekyllPath = path.join(directory, '.nojekyll');
  try {
    // Create an empty .nojekyll file
    await fs.writeFile(nojekyllPath, '');
    console.log(`Created .nojekyll file in ${directory}`);
  } catch (err) {
    console.error(`Error creating .nojekyll file:`, err);
  }
}

async function clearAndCopy() {
  await clearDirectory(ghpdocsDir);
  await copyDirectory(distDir, ghpdocsDir);
  createNojekyllFile(ghpdocsDir);
}

clearAndCopy().catch(err => {
  console.error('Error in clear and copy process:', err);
});
