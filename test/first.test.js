import test from "ava";
import { transformAsync } from "@babel/core"
import map from "./testMaps";
import myPlugin from "../index.js";

map.forEach((value, key) => {
  test(`testing map value ${value}`, t => {
    return transformAsync(key, {
      plugins: [ myPlugin ],
      ast: true
    })
      .then(({ code }) => {
        t.is(value, code);
      })
      .catch(e => console.log(e));
  });
});
