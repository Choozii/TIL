from collections import deque

n, m = map(int, input().split())
maps = []
for _ in range(n):
    maps.append(list(map(str, input())))

dx = [-1,1,0,0]
dy = [0,0,-1,1]

def bfs(i,j):
    memo = [[0]*m for _ in range(n)]
    q = deque()
    q.append((i,j))
    memo[i][j] = 1
    num = 0
    while q:
   
        x,y = q.popleft()
        for k in range(4):
            nx = x + dx[k]
            ny = y + dy[k]
            if 0<=nx<n and 0<=ny<m:
                if maps[nx][ny] == 'L' and memo[nx][ny] == 0:
                    memo[nx][ny] = memo[x][y] + 1
                    q.append((nx,ny))
                    num = max(num, memo[nx][ny])
    return num - 1 
                
cnt = 0
for i in range(n):
    for j in range(m):
        if maps[i][j] == 'L':
            cnt = max(cnt, bfs(i,j))

print(cnt)
