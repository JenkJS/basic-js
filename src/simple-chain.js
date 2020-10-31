const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    var arr = [...this.links];
    var obj = {...this};
    obj.links = arr;
    obj.links.push("( " + value + " )"); 
    return obj;
  },
  removeLink(position) {
    var arr = [...this.links];
    if(position >= 1 && position <=arr.length) {
      arr.splice(position - 1, 1)
      var obj = {...this};
      obj.links = arr;
      return obj;
    } else {
      throw Error;
    }
  },
  reverseChain() {
    var arr = [...this.links].reverse();
    var obj = {...this};
    obj.links = arr;
    return obj;
  },
  finishChain() {
    return this.links.join("~~");
  }
};

module.exports = chainMaker;
