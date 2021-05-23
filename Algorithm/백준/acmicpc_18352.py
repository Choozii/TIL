import heapq
import sys
input = sys.stdin.readline

n,m,k,x = map(int, input().split())
INF = int(1e9)
conn = [[] for i in range(n+1)]
distance = [INF]*(n+1)

for _ in range(m):
    a, b = map(int, input().split())
    conn[a].append(b)
    
def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start))
    distance[start] = 0
    while q:
        dist, now = heapq.heappop(q)

        for cur_node in conn[now]:
            cost = dist+1
            if cost < distance[cur_node]:
                distance[cur_node] = cost
                heapq.heappush(q, (cost, cur_node))
                
dijkstra(x)
answers=[]
for i in range(len(distance)):
    if(distance[i] == k):
        answers.append(i)

if len(answers) == 0:
    print(-1)
else:
    answers.sort()
    for i in range(len(answers)):
        print(answers[i])
    
