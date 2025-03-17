import tseslint from "typescript-eslint";

import base from "./base.js";
import typescript from "./typescript.js";

export default tseslint.config(base, typescript);
