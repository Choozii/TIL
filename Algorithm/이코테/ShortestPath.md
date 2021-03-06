<h2> 최단 경로</h2>
<h4> 최단경로</h4>
가장 짧은 경로 찾기(최단거리), '길찾기' 문제<br/>
각 상황에 맞는 알고리즘이 정해져 있으니 잘 골라서 사용하도록!
<h4>다익스트라</h4>
- 특정 노드에서 다른 노드들로 가는 각각의 최단 경로를 구해주는 알고리즘<br/>
- 모든 간선이 양의 값일 때 정상적으로 동작<br/>
- 그리디 알고리즘의 일종<br/>
<h5>다익스트라 알고리즘 구현 방법</h5>
* sys.std.readline()으로 인풋 받기<br/>
* 리스트 크기 : (노드의 갯수 + 1)<br/>
* heapq 라이브러리 사용 시 첫번째 원소를 기준으로 우선순위큐를 구성한다. 간선거리를 첫번째 원소로 넣을 것<br/>
<br/>
1) O(V^2) 인 방법 -> 전체 노드의 개수가 5000개 이하일 때 사용
	- 최단거리를 담는 1차원 리스트 선언.
	- 단계마다 방문하지 않는 노드 중 최단 거리가 가장 짧은 노드를 선택하기 위해 1차원 리스트의 모든 원소를 순차탐색<br/>
2) O(logN) 인 방법 ->  10.000개 초과하는 경우<br/>
	- 최단거리를 직접 탐색x  => 우선순위 큐를 사용해서 거리가 작은 값부터 큐에서 나올 수 있도록 코드를 작성
<h5>다익스트라 알고리즘 구현 코드</h5>

[O(V^2)인 방법](https://github.com/Choozii/TIL/blob/master/Algorithm/%EC%9D%B4%EC%BD%94%ED%85%8C/examples/Dijkstra.py)<br/>
[O(logN)인 방법](https://github.com/Choozii/TIL/blob/master/Algorithm/%EC%9D%B4%EC%BD%94%ED%85%8C/examples/Dijkstra2.py)
<h4>플루이드 워셜 알고리즘</h4>
- 모든 지점에서 다른 모든 지점까지의 최단 경로를 모두 구하는 알고리즘<br/>
- 다이나믹 프로그래밍
- O(N^3)
- 노드에서 노드로 '바로 이동하는 거리'가 '특정 노르를 거쳐서 이동하는 거리'보다 더 많은 비용을 가진다면 이 값을 더 짧은 것으로 갱신한다.
<h5>플루이드 워셜 구현 코드</h5>

[플루이드 워셜](https://github.com/Choozii/TIL/blob/master/Algorithm/%EC%9D%B4%EC%BD%94%ED%85%8C/examples/FloydWarshall.py)
