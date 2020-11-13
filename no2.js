const g = {}
const check = []
const connectedCount = []

function dfs(i) {
  let result = 1
  const keys = Object.keys(g[i])
  for(let k = 0; k < keys.length; k++){
    if(!check[keys[k]]){
      check[keys[k]] = true
      console.log(i, "to", keys[k])
      result += dfs(keys[k])
    }
  }
  return result
}

function solution(n, edge) {
  let answer = []

  for (let i = 0; i < n; i++) {
    g[i] = {}
    check.push(false)
  }

  for (let i = 0; i < n - 1; i++) {
    g[edge[i][0]][edge[i][1]] = { i, count: 0 }
    g[edge[i][1]][edge[i][0]] = { i, count: 0 }
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n; j++) check[j] = false
    check[edge[i][0]] = true
    console.log(edge[i])
    g[edge[i][0]][edge[i][1]].count = dfs(edge[i][1])
    for (let j = 0; j < n; j++) check[j] = false
    console.log(check)
    check[edge[i][1]] = true
    console.log(edge[i])
    g[edge[i][1]][edge[i][0]].count = dfs(edge[i][0])
  }

  console.log(g)

  return answer
}

console.log(
  solution(9, [
    [0, 2],
    [2, 1],
    [2, 4],
    [3, 5],
    [5, 4],
    [5, 7],
    [7, 6],
    [6, 8],
  ])
)
