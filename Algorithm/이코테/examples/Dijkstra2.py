import sys
import heapq
input = sys.stdin.readline
INF = int(1e9)

n,m = map(int, input().split())
start = int(input()) # 시작 노드 입력받기
graph = [[] for i in range(n+1)]
distance = [INF] * (n+1) # 최단 거리 테이블을 모두 무한으로 초기화

for _ in range(m):
    a,b,c = map(int, input().split())
    graph[a].append((b,c)) # a에서 b로 가는 비용이 c

def dijkstra(start):
    q=[]
    heapq.heappush(q,(0,start))
    distance[start] = 0
    while q:
        dist, now = heapq.heappop(q)
        if distance[now] < dist:
            continue
        for node in graph[now]: # now 노드와 연결된 노드들 순회
            dest, expense = node
            cost = dist + expense
            if cost < distance[dest]:
                distance[dest] = cost
                heapq.heappush(q, (cost, dest))

dijkstra(start)

for i in range(1, n+1):
    if distance[i] == INF:
        print("infinity")
    else:
        print(distance[i])

