function solution(numbers) {
    var answer = '';
    let check = true;
    numbers.forEach((v) => v !== 0 ? check = false : null)
    if(check) return '0'
    numbers.sort((a, b) => {
        a = a.toString()
        b = b.toString()
        return Number(a + b) > Number(b + a) ? -1 : 1
    })
    answer = numbers.reduce((a, b) => a + b.toString(), '')
    return answer;
}

solution([20,20,200])