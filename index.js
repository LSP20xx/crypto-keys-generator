import { generateAllKeys } from "./src/generateAllKeys.js";
import os from "os";

const platform = os.platform();

if (platform === "win32") {
  console.log("Running on Windows");
} else if (platform === "darwin") {
  console.log("Running on macOS");
} else if (platform === "linux") {
  console.log("Running on Linux");
} else {
  console.error("Unsupported platform:", platform);
}

generateAllKeys()
  .then((keys) => console.log(keys))
  .catch((error) => console.error("Error generating keys:", error));
