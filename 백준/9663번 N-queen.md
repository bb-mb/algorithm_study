```cpp
#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

int n;
int board[20] = {0,};
int chessCount = 0;

bool possible(int now){
  for(int i = 1; i <= n; i++){
    if(i == now || !board[i]) continue;
    if(board[i] == board[now] || abs(i - now) == abs(board[i] - board[now])) return false;
  }
  return true;
}

void recursive(int now) {
  if(now > n) {
    chessCount++;
    return;
  }
  for(int i = 1; i <= n; i++){
    board[now] = i;
    if(possible(now)){
      recursive(now+1);
    }
    board[now] = 0;
  }
}

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  cin >> n;

  time_t start, end;
  recursive(1);

  cout << chessCount << '\n';

  return 0;
}
```

### 풀이
- 백트래킹 문제다. dfs로 순회하면서 현재 트리에서 불가능하면 바로 리턴한다.
- 처음에 2차원 배열로 풀었는데 정직하게 체스판을 그리면서 시간초과가 났음. 그래서 답을 봤는데 abs(i - now) == abs(board[i] - board[now]) 이렇게 1차원 배열 방식을 쓰고 x, y의 차이가 1:1인지를 확인해서 대각선에 위치하는지 찾는 방식을 쓰더라