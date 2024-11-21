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

function updateLinksInFile(filePath, build) {
  const basePrefix = build ? "/KaPlanck" : "";

  let content = fs.readFileSync(filePath, "utf8");

  let rx = /\[([^\]]+)]\(([^)]+)\.mdx(#\S*)?\)/g;

  if (build) {
    rx = /\[([^\]]+)]\(([^)]+)\)/g;
  }

  const updatedContent = content.replace(rx, (match, text, url, fragment) => {
    return `[${text}](${basePrefix}${url.replace(/\.mdx$/, "")}${build ? "" : fragment || ""})`;
  });

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

// eslint-disable-next-line no-undef
const args = process.argv.slice(2);

processMdxFiles("./docs/pages/api/", args.length > 0 && args[0] === "build");
