module.exports = function({ types: t }) {
  let count = 0;
  let keywords = new Set(["alfa", "bravo"])
  return {
    name: "owoifier",
    visitor: {
      StringLiteral: {
        enter(path) {
          keywords.forEach(value => {
            if(t.isStringLiteral(path.node, { value })){
              path.node.value = "sierra";
              console.log(path.node.value);
              count++;
            }
          })
        }
      }
    },
    post(state) {
      console.log(`your count is: ${count}`);
    }
  }
}
