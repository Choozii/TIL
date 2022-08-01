n,m = map(int, input().split())
visited = [[0]*m for _ in range(n)]

def dfs(i,j):
    if i<0 or j<0 or i>=n or j>=m:
        return 0
    if maps[i][j] == 1 or visited[i][j] == 1:
        return 0

    visited[i][j] = 1
    
    dfs(i-1,j)
    dfs(i,j-1)
    dfs(i+1,j)
    dfs(i,j+1)
    return 1

    
maps =[]    
for _ in range(n):
    maps.append(list(map(int, input())))

count = 0
for i in range(n):
    for j in range(m):
        if visited[i][j] == 0 and maps[i][j] == 0:
            if dfs(i,j):
                count += 1

print(count)
'''
4 5
00110
00011
11111
00000
'''
