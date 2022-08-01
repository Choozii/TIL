INF = int(1e9)
n = int(input())
m = int(input())
arr = [[INF]*(n+1) for _ in range(n+1)]

for i in range(n+1):
    for j in range(n+1):
        if i == j:
            arr[i][j] = 0

for _ in range(m):
    a, b, c = map(int, input().split())
    if c < arr[a][b]: #중복된 값들이 있어서 제일 작은 값만 넣어줌
        arr[a][b] = c

for k in range(1, n+1):
    for a in range(1, n+1):
        for b in range(1, n+1):
            arr[a][b] = min(arr[a][b], arr[a][k]+arr[k][b])

for a in range(1, n + 1):
    for b in range(1, n + 1):
        if arr[a][b] == INF:
            print(0, end=" ")
        else:
            print(arr[a][b], end=" ")
    print()
