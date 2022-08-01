/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let result = [];
  let i = 0;

  while (i < command.length) {
    if (command[i] == '(') {
      if (command[i + 1] == ')') {
        result.push('o');
        i += 2;
      } else {
        result.push('al');
        i += 4;
      }
    } else {
      result.push(command[i++]);
    }
  }
  return result.join('');
};

//Leet code discussion
var interpret = function (command) {
  return command.split('()').join('o').split('(al)').join('al');
};
