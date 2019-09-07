let keywords = require("./keys");

module.exports = function({ types: t }) {
  let count = 0;
  return {
    name: "owoifier",
    visitor: {
      StringLiteral: {
        enter(path) {
          keywords.forEach((value, key) => {
            let nodeValue = path.node.value;
            if(nodeValue.includes(key)) {
              let indexOfKey = nodeValue.indexOf(key);
              let low = nodeValue.slice(0, indexOfKey);
              let high = nodeValue.slice(indexOfKey + key.length);

              console.log("debug", low, value, high);
              path.node.value = low + value + high;
            }
            console.log(nodeValue);
            count++;
          });
        }
      }
    },
    post(state) {
      console.log(`your count is: ${count}`);
    }
  }
}
