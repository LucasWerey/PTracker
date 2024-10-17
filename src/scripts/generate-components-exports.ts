import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uiDir = path.join(__dirname, "../components");
const indexPath = path.join(uiDir, "../components/index.ts");

fs.readdir(uiDir, (err, files) => {
  if (err) {
    console.error(
      "\x1b[31m%s\x1b[0m",
      "🔴 Error reading components directory:",
      err
    );
    return;
  }

  const directories = files.filter((file) =>
    fs.statSync(path.join(uiDir, file)).isDirectory()
  );

  const exportStatements = directories.map((dir) => {
    return `export { default as ${dir} } from './${dir}';`;
  });

  fs.writeFile(indexPath, exportStatements.join("\n"), (err) => {
    if (err) {
      console.error("\x1b[31m%s\x1b[0m", "🔴 Error writing index.ts:", err);
    } else {
      console.log(
        "\x1b[32m%s\x1b[0m",
        "🟢 Components index.ts has been generated successfully."
      );
    }
  });
});
