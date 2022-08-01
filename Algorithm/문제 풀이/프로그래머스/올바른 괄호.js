function solution(s) {
  const stack = [];

  if (s[0] == ')' || s[s.length - 1] == '(' || s.length % 2 !== 0) return false;

  for (let el of s) {
    if (el == '(') stack.push(el);
    else {
      if (stack.length == 0) return false;
      stack.pop();
    }
  }
  if (stack.length !== 0) return false;
  return true;
}
