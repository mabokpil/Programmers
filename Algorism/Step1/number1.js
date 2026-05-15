// 알고리즘 for of

function solution(n,control) {
    const moves = { w : 1, s : -1, d : 10, a : -19}
    for(const char of moves){
        n += move[char];
    }
    return n;
}


// 알고리즘 replace

function solution(n,control){
    const moves = { w : 1, s : -1, d : 10, a : -19}
    control.replace(/./g,char => n+= moves[char])
}

// 알고리즘 forEach

function solution(n, control) {
    const moves = { w: 1, s: -1, d: 10, a: -10 };
    [...control].forEach(char => n += moves[char]);
    return n;
}


// 실무

function solution(n, control) {
    const moves = {
        w: 1,
        s: -1,
        d : 10,
        a : -10
    };
    return [...control].reduce((acc,cur) => acc + moves[cur],n);
}

