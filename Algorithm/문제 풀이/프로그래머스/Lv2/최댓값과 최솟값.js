function solution(s) {
    const numbers = s.split(" ");
     numbers.sort((a,b) => a*1 - b*1);
     return `${numbers[0]} ${numbers[numbers.length-1]}`
 }