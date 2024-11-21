import fs from "fs";
import path from "path";

function getMdxFiles(dir) {
  const files = fs.readdirSync(dir);
  let mdxFiles = [];

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      mdxFiles = mdxFiles.concat(getMdxFiles(filePath));
    } else if (file.endsWith(".mdx")) {
      mdxFiles.push(filePath);
    }
  });

  return mdxFiles;
}

function updateLinksInFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  const updatedContent = content.replace(
    /\[([^\]]+)]\(([^)]+)\.mdx(#\S*)?\)/g,
    (match, text, url, fragment) => {
      return `[${text}](${url.replace(/\.mdx$/, "")}${fragment || ""})`;
    },
  );

  if (updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent, "utf8");
    console.log(`Updated: ${filePath}`);
  } else {
    console.log(`No changes made to: ${filePath}`);
  }
}

function processMdxFiles(dir, build) {
  const mdxFiles = getMdxFiles(dir);

  if (mdxFiles.length === 0) {
    console.log("No .mdx files found.");
    return;
  }

  mdxFiles.forEach((filePath) => {
    updateLinksInFile(filePath, build);
  });
}

processMdxFiles("./docssrc/pages/api/");
