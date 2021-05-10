n = int(input())
visited = [[0]*n for _ in range(n)]

def dfs(x,y):
    
    global house_cnt

    if x<0 or y<0 or x>=n or y>=n :
        return False
    
    if maps[x][y] == 0 or visited[x][y] == 1:
        return False
   
    visited[x][y] = 1
    house_cnt += 1
        
    dfs(x-1,y)
    dfs(x, y-1)
    dfs(x+1, y)
    dfs(x, y+1)
    
    return True

all_cnt = 0
house_cnt = 0
single_cnt = []

maps=[]
for _ in range(n):
    maps.append(list(map(int,input())))

for i in range(n):
    for j in range(n):
        if dfs(i,j):
            single_cnt.append(house_cnt)
            house_cnt = 0

single_cnt.sort()

print(len(single_cnt))
for i in single_cnt:
    print(i)
