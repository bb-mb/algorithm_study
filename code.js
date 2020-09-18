

function solution(n, s, a, b, fares) {
  var answer = 0;

  const dist = []
  const graph = []

  for(let i = 0; i <= n; i++){
    dist.push([])
    graph.push([])
    for(let j = 0; j <= n; j++){
      dist[i].push(1000000)
      graph[i].push(0)
    }
  }

  for(let fare of fares){
    graph[fare[0]][fare[1]] = fare[2]
    graph[fare[1]][fare[0]] = fare[2]
  }

  for(let i = 1; i <= n; i++){
    dist[i][i] = 0;
    const arr = []
    for(let q = 1; q <= n; q++){
      arr.push(q)
      if(graph[i][q]) dist[i][q] = graph[i][q]
    }
    while(arr.length > 0){
      
    }
  }

  return answer;
}

console.log(solution(	6, 4, 6, 2, [[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]]))