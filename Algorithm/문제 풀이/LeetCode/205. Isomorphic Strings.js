/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.get(s[i])) {
      map.set(s[i], t[i]);
    }

    let val = map.get(s[i]);
    if (val !== t[i]) return false;
  }
  return true;
};


//0809

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  //s의 문자들을 특수한 규칙에 맞춰 변환했을 때 t로 변경 가능하다면 동형
  
  // lookup object를 생성
  // 처음 나온 s의 문자를 key, t의 문자를 value로 가짐
  // 이미 있는 문자에 대해 value가 다르다면 return false;
  // ""인 경우는 없음
  // 대문자 - 소문자인 경우는 어떻게 처리 << ???
  if(s.length !== t.length) return false;

  const lookup = {};
  const s1 = new Set(s);
  const s2 = new Set(t);
  console.log(s1, s2)
  if(s1.size !== s2.size) return false;
  
  for(let i=0;i<s.length;i++){
      if(!lookup[s[i]]){
          lookup[s[i]] = t[i];
      }else{
          console.log(lookup[s[i]], t[i])
          if(lookup[s[i]] !== t[i]) return false;
      }
  }
  
  return true;
}