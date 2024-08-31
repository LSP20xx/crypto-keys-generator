import { generateAllKeys } from "./src/generateAllKeys.js";

generateAllKeys()
  .then((keys) => console.log(keys))
  .catch((error) => console.error("Error generating keys:", error));
