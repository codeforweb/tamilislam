const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "www");
const currentYear = new Date().getFullYear().toString();

const ignoredDirectories = new Set([
  ".git",
  ".jekyll-cache",
  ".sass-cache",
  "android",
  "node_modules",
  "scripts",
  "www",
  "_includes",
  "_layouts",
  "_site",
]);

const ignoredRootFiles = new Set([
  "capacitor.config.json",
  "package-lock.json",
  "package.json",
]);

function ensureDirectory(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function removeDirectory(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
}

function readUtf8(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function writeUtf8(filePath, contents) {
  ensureDirectory(path.dirname(filePath));
  fs.writeFileSync(filePath, contents, "utf8");
}

function parseFrontMatter(contents) {
  const match = contents.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return { data: {}, body: contents };
  }

  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const parts = line.match(/^([^:]+):\s*(.*)$/);
    if (parts) {
      data[parts[1].trim()] = parts[2].trim();
    }
  }

  return {
    data,
    body: contents.slice(match[0].length),
  };
}

function renderIncludes(contents) {
  return contents.replace(/{%\s*include\s+([^%\s]+)\s*%}/g, (_, includeName) => {
    const includePath = path.join(rootDir, "_includes", includeName);
    return renderIncludes(readUtf8(includePath));
  });
}

function stripRemoteCssImports(contents) {
  return contents.replace(/^\s*@import\s+url\(["']?https?:\/\/[^"')]+["']?\);\s*$/gm, "");
}

function renderLiquid(contents, pageData) {
  return stripRemoteCssImports(renderIncludes(contents))
    .replace(/{{\s*content\s*}}/g, pageData.content || "")
    .replace(/{{\s*page\.title\s*}}/g, pageData.title || "")
    .replace(/{{\s*site\.baseurl\s*}}/g, "")
    .replace(/{{\s*site\.time\s*\|\s*date:\s*'%Y'\s*}}/g, currentYear);
}

function renderHtmlFile(sourcePath, destinationPath) {
  const { data, body } = parseFrontMatter(readUtf8(sourcePath));
  const page = {
    title: data.title || "",
    content: renderLiquid(body, { title: data.title || "" }),
  };

  if (data.layout) {
    const layoutPath = path.join(rootDir, "_layouts", `${data.layout}.html`);
    const layout = readUtf8(layoutPath);
    writeUtf8(destinationPath, renderLiquid(layout, page));
    return;
  }

  writeUtf8(destinationPath, page.content);
}

function copyFile(sourcePath, destinationPath) {
  ensureDirectory(path.dirname(destinationPath));

  if (sourcePath.endsWith(".css")) {
    writeUtf8(destinationPath, stripRemoteCssImports(readUtf8(sourcePath)));
    return;
  }

  fs.copyFileSync(sourcePath, destinationPath);
}

function copyRuntimeDependencies() {
  copyFile(
    path.join(rootDir, "node_modules", "dustjs-linkedin", "dist", "dust-full.min.js"),
    path.join(outputDir, "js", "dust-full.min.js")
  );
  copyFile(
    path.join(rootDir, "node_modules", "dustjs-helpers", "dist", "dust-helpers.min.js"),
    path.join(outputDir, "js", "dust-helpers.min.js")
  );
}

function walk(sourceDir, relativeDir = "") {
  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    if (!relativeDir && ignoredRootFiles.has(entry.name)) continue;
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    if (!relativeDir && entry.name.startsWith("_")) continue;

    const relativePath = path.join(relativeDir, entry.name);
    const sourcePath = path.join(sourceDir, entry.name);
    const destinationPath = path.join(outputDir, relativePath);

    if (entry.isDirectory()) {
      walk(sourcePath, relativePath);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      renderHtmlFile(sourcePath, destinationPath);
    } else if (entry.isFile()) {
      copyFile(sourcePath, destinationPath);
    }
  }
}

removeDirectory(outputDir);
ensureDirectory(outputDir);
walk(rootDir);
copyRuntimeDependencies();

console.log(`Built local Android web assets in ${path.relative(rootDir, outputDir)}`);
