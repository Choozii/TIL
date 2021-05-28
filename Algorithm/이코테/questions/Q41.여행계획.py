n,m = map(int, input().split())
parent = [0]*(n+1)
for i in range(1, n+1):
    parent[i] = i

def find_parent(parent, x):
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]

def union(parent, i, j):
    a = find_parent(parent, i)
    b = find_parent(parent, j)
    if a>b:
        parent[b] = a
    else:
        parent[a] = b

for i in range(n):
    temp = list(map(int, input().split()))
    for j in range(n):
        if temp[j] == 1:
            union(parent, i+1, j+1)

plan = list(map(int, input().split()))
answer = []
for p in plan:
    answer.append(parent[p])

if sum(answer)/len(plan) == answer[0]:
    print("YES")
else:
    print("NO")
i
'''
5 3
0 1 0 1 0
1 0 1 1 0
0 1 0 0 0
1 1 0 0 0
0 0 0 0 0
2 5 3
'''
