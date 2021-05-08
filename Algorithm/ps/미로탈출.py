import sys
from collections import deque

sys.stdin = open("04input.txt", "rt")

n,m = map(int, input().split())
maps=[]
for i in n:
    maps.append(list(map(int, input().split())))
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def dfs(i,j):
    queue = dequeue()
    queue.append((i,j))

    while queue:
        x,y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx<0 or ny<0 or nx>=n or ny>=y:
                continue
            if maps[nx][ny] == 0:
                continue
            if maps[nx][ny] == 1:
                maps[nx][ny] = maps[x][y] + 1
                queue.append((nx,ny))
        return maps[n-1][m-1]
print(bfs(0,0))
