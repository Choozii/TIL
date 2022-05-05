* tree
	* <u>계층적인 구조</u>를 표현할 때 사용할 수 있는 자료구조
	* 용어
		* root node : 부모가 없는 최상위 노드
		* depth : 현재 노드의 루트 노드로부터의 거리
		* height : depth 중 최대값
		* degree : 현재 노드의 자식 간선 개수
	* 트리의 크기가 N일 때, 전체 간선의 개수는 N-1개
* traversal

	* 전위순회 (pre-order) : 루트 - 왼 - 오
	* 중위순회 (in-order) : 왼 - 루트 - 오
	* 후위순회 (post-order) : 왼 - 오 - 루트

 <img width="537" alt="스크린샷 2022-05-05 오후 1 51 40" src="https://user-images.githubusercontent.com/74968456/166865577-acead2c1-1cda-463e-8470-0db18b209eb0.png">

 
	1. pre-order : A-B-D-E-C-F-G
	2. in-order : D-B-E-A-F-C-G
	3. post-order : D-E-B-F-G-C-A


> 참고 자료 :  https://www.youtube.com/watch?v=i5yHkP1jQmo
