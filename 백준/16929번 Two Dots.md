```cpp
#include <iostream>
using namespace std;

int n, m;
char arr[55][55];
int check[55][55];
int moveI[] = {1, -1, 0, 0};
int moveJ[] = {0, 0, 1, -1};

bool dfs(int i, int j, int k){
  if(check[i][j]){
    if(k - check[i][j] >= 4) return true;
    else return false;
  }
  check[i][j] = k;
  for(int x = 0; x < 4; x++){
    int ni = i + moveI[x];
    int nj = j + moveJ[x];
    if(ni < 0 || nj < 0) continue;
    if(arr[i][j] == arr[ni][nj]){
      if(dfs(ni, nj, k+1)) return true;
    }
  }
  return false;
}


int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> n >> m;

    for(int i = 0; i < n; i++){
      for(int j = 0; j < m; j++){
        cin >> arr[i][j];
      }
    }

    bool res = false;
    for(int i = 0; i < n; i++){
      for(int j = 0; j < m; j++){
        if(!check[i][j] && !res) {
          if(dfs(i, j, 1)) res = true;
        }
      }
    }

    if(res) cout << "Yes\n";
    else cout << "No\n"; 

    return 0;
}

```

### 풀이
- dfs로 탐색하면서 탐색하는 지점의 k값을 기록한다.
- 탐색을 완료한 지점에 다시 도달했을때 K값이 4 이상이면 최소 4개의 점 사이클을 돌아온것으로 판단되므로 yes를 출력한다.