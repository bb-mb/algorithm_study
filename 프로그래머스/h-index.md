```javascript
function solution(citations) {
    citations.sort((a, b) => b - a)
    const answer = citations.reduce((acc, val, i) => {
        if( val >= i + 1) return acc + 1;
        return acc
    }, 0)
    return answer;
}
````

## 나의 풀이
- 그냥 정렬하고 앞에서부터 값이 인덱스보다 큰지 체크하면서 몇개인지 세면된다.

## 다른사람의 풀이
- 똑같음 