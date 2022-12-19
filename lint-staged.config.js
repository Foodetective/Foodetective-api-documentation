const path = require("path");

module.exports = {
  "*.{js,jsx,ts,tsx}": [
    (filenames) =>
      `next lint --max-warnings=0 --fix --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(" --file ")}`,
  ],
  "*.!(js|jsx|ts|tsx)": "prettier --ignore-unknown --cache --write",
};
