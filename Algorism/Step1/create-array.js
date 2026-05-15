// 알고리즘

function solution(n, k) {
    let result = Array.from({length : n},(_,i) => i + 1);
    return result.filter((v) =>  v % k === 0);
}

// 더 나은 풀이

function solution(n,k){
    let result = [];
    for(let i = 0; i< n; i+= k){
        result.push(i);
    }
    return result;
}