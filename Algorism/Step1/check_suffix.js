// slice 로 is_suffix의 길이에 해당되는 my_string의 접미사랑 확인하기

function solution(my_string, is_suffix) {
    return my_string.slice(-is_suffix.length) === is_suffix;
}

// endsWith()

const solution = (my_string, is_suffix) => my_string.endsth(is_suffix);