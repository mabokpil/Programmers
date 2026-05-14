// 알고리즘

const solution = (strArr) => strArr.filter((item) => !item.includes("ad"));

//실무

function solution(strArr) {
  const filtered = strArr.filter((item) => !item.includes("ad"));
  return filtered;
}
