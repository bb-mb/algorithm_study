```cpp
#include <string>
#include <vector>
#include <map>
#include <iostream>

using namespace std;

int solution(int N, int number) {
    vector<vector<long long>> vt(8);
    map<int, int> dp;
    for(int i = 0; i <= 32000; i++) dp[i] = 100;
    for(int i = 0; i < 8; i++){
        int num = 0;
        for(int j = 0; j < i+1; j++) num = num * 10 + N;
        dp[num] = i;
        vt[i].push_back(num);
    }
    for (int i = 1; i < 8; i++){
      for(int j = 0; j < i; j++){
        for(int k = 0; k < vt[j].size(); k++){
          long long x = vt[j][k];
          for(int l = 0; l < vt[i - j - 1].size(); l++){
            long long y = vt[i - j - 1][l];
            if(x + y >= 0 && x + y <= 32000 && dp[x + y] > i) {
              dp[x + y] = i;
              vt[i].push_back(x + y);
            }
            if(x - y >= 0 && x - y <= 32000 && dp[x - y] > i) {
              dp[x - y] = i;
              vt[i].push_back(x - y);
            }
            if(y != 0 && x / y >= 0 && x / y <= 32000 && dp[x / y] > i) {
              dp[x / y] = i;
              vt[i].push_back(x / y);
            }
            if(x * y >= 0 && x * y <= 32000 && dp[x * y] > i) {
              dp[x * y] = i;
              vt[i].push_back(x * y);
            }
          }
        }
      }
    }
    return dp[number] + 1 > 8 ? -1 : dp[number] + 1;
}

void print(int a, int b){
  cout << (a == b) << endl;
}
int main()
{
  print(solution(5, 1010), 7);
  // print(solution(3, 4), 3);
  // print(solution(5, 5555), 4);
  // print(solution(5, 5550), 5);
  // print(solution(5, 20), 3);
  // print(solution(5, 30), 3);
  // print(solution(6, 65), 4);
  // print(solution(5, 2), 3);
  // print(solution(5, 4), 3);
  // print(solution(1, 1), 1);
  // print(solution(1, 11), 2);
  // print(solution(1, 111), 3);
  // print(solution(1, 1111), 4);
  // print(solution(1, 11111), 5);
  // print(solution(7, 7776), 6);
  // print(solution(7, 7784), 5);
  // print(solution(2, 22222), 5);
  // print(solution(2, 22223), 7);
  // print(solution(2, 22224), 6);
  // print(solution(2, 11111), 6);
  // print(solution(2, 11), 3);
  // print(solution(2, 111), 4);
  // print(solution(2, 1111), 5);
  // print(solution(9, 36), 4);
  // print(solution(9, 37), 6);
  // print(solution(9, 72), 3);
  // print(solution(3, 18), 3);
  // print(solution(2, 1), 2);
  // print(solution(4, 17), 4);
  return 0;
}
```

### 풀이
- 답봄. dp