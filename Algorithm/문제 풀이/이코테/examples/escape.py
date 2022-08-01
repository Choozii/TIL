from collections import deque

n,m = map(int, input().split())
dx=[0,0,1,-1]
dy=[1,-1,0,0]

def bfs(i,j):
    q = deque()
    q.append((i,j))
    
    while q:
        x,y = q.popleft()
        print(x,y)
        for k in range(4):
            nx = x+dx[k]
            ny = y+dy[k]
            if 0<=nx<n and 0<=ny<m and maps[nx][ny] == 1:
                q.append((nx,ny))
                maps[nx][ny] = maps[x][y] + 1

    return maps[n-1][m-1]

maps = []
for _ in range(n):
    maps.append(list(map(int, input())))

print(bfs(0,0))

