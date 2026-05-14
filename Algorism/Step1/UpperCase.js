// 알고리즘

function solution(my_string, alp) {
  let str = my_string.split("");
  return str
    .map((e) => {
      return e === alp ? e.toUpperCase() : e;
    })
    .join("");
}

//실무

const solution = (my_string, alp) =>
  my_string
    .split("")
    .map((e) => (e === alp ? e.toUpperCase() : e))
    .join("");

// 더 나은 표현

const solution = (my_string, alp) =>
  my_string.replaceAll(alp, alp.toUpperCase());
