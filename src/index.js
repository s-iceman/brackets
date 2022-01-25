module.exports = function check(str, bracketsConfig) {
  let config = bracketsConfig.reduce((acc, [k, v]) => ({...acc, [k]: v}), {});
  let stack = [];

  [...str].forEach(bracket => {
    stack.push(bracket);
    if (stack.length > 1){
      if (config[stack[stack.length - 2]] === stack[stack.length - 1]){
        stack.splice(stack.length - 2, 2);
      }
    }
  });

  return stack.length == 0;
}
