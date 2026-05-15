// 알고리즘
const solution = (num_list) => {
  const odd = Number(num_list.filter(v => v % 2).join(""))
  const even = Number(num_list.filter(v => !( v % 2)).join(""))
  return odd + even
}


// 실무

function solution(num_list) {
    let even = num_list.filter((v,i)=> {
       return v % 2 === 0
    }).join("");
    let odd = num_list.filter((v,i) => {
        return v % 2 !== 0
    }).join("");
    return Number(even) + Number(odd)
}