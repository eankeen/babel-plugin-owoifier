const test = require("ava");
const babel = require("@babel/core");
const path = require("path");

test("basic", t => {
  let input = `let b = "apple";`;

  return babel.transformAsync(input, {
    plugins: [
      require("../index.js")
    ]
  })
    .then(({ code }) => {
      console.log("second", code);
      t.pass();
    })
    .catch(e => console.log(e));
});
