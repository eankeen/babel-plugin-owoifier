module.exports = function({ types: t }) {
  return {
    name: "owoifier",
    visitor: {
      StringLiteral: {
        enter(path) {
          console.log(path);
          if(t.isStringLiteral(path.node, { value: "bravo"})){
            path.node.value = "sierra";
            console.log(path.node.value);
          }
        }
      }
    }
  }
}
