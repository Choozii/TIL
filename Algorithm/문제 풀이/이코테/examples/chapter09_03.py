import heapq
import sys

INF = int(1e9)
input = sys.stdin.readline
n,m,c = map(int, input().split())
graph = [[] for i in range(n+1)]
distance = [INF]*(n+1)

for _ in range(m):
  x,y,z = map(int, input().split())
  graph[x].append((y,z))
  #x에서 y로 메세지를 보내는 시간이 z

def dijkstra(start):
  q=[]
  heapq.heappush(q, (0, start))
  distance[start] = 0
  while q:
    dist, now = heapq.heappop(q)
    if distance[now] < dist:
      continue

    for i in graph[now]:
      cur_node,cur_expense = i
      cost = dist + cur_expense
      if cost < distance[cur_node]:
        distance[cur_node] = cost
        heapq.heappush(q, (cost, cur_node))

dijkstra(c)

count = 0
max_distance = 0
for d in distance:
  if d != INF:
    count += 1
    max_distance = max(max_distance, d)

print(count-1, max_distance)

