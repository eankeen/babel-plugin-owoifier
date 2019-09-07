const test = require("ava");
const babel = require("@babel/core");
const map = require("./testMaps");

map.forEach((value, key) => {
  test(`testing map value ${value}`, t => {
    return babel.transformAsync(key, {
      plugins: [
        require("../index.js")
      ],
      ast: true
    })
      .then(({ code }) => {
        t.is(value, code);
      })
      .catch(e => console.log(e));
  });
});
