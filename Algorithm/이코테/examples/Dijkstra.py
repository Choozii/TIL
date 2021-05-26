import sys
input = sys.stdin.readline
INF = int(1e9)

n,m = map(int, input().split())
start = int(input()) # 시작 노드 입력받기
graph = [[] for i in range(n+1)]
visited = [False] * (n+1)
distance = [INF] * (n+1) # 최단 거리 테이블을 모두 무한으로 초기화

for _ in range(m):
    a,b,c = map(int, input().split())
    graph[a].append((b,c)) # a에서 b로 가는 비용이 c

def get_smallest_node():
    min_value = INF
    index = 0
    for i in range(1, n+1):
        if distance[i] < min_value and not visited[i]:
            min_value = distance[i]
            index = i
    return index # 방문하지 않은 노드 중 제일 작은 노드 번호를 반환

def dijkstra(start):
    distance[start] = 0
    visited[start] = True
    for node in graph[start]:
        dest, expense = node
        distance[dest] = expense
    # 여기까지 시작점에 대한 코드
    # 시작 노드를 제외한 n-1개의 노드에 대해서 반복
    for i in range(n-1):
        now = get_smallest_node()
        visited[now] = True

        for node in graph[now]: # now 노드와 연결된 노드들 순회
            dest, expense = node
            cost = distance[now] + expense
            if cost < dest:
                distance[dest] = cost

dijkstra(start)

for i in range(1, n+1):
    if distance[i] == INF:
        print("infinity")
    else:
        print(distance[i])

