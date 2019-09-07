const babel = require("@babel/core");

let input = `let b = "promise";`;

babel.transformAsync(input, {
  plugins: ["../index.js"],
  ast: true
})
  .then(({ code }) => {
    console.log("second", code);
  })
  .catch(e => console.log(e));
