import sys

def maxGold(arr, x, y):
    
    for j in range(1, y):
        for i in range(x):
            if i == 0:
                left_top = 0
            else:
                left_top = arr[i-1][j-1]
            if i == x-1:
                left_btm = 0
            else:
                left_btm = arr[i+1][j-1]
            left = arr[i][j-1]
            arr[i][j] = max(left_top, left, left_btm)+arr[i][j]

    finals=[]
    for i in range(x):
        finals.append(arr[i][y-1])
    return max(finals)

t = int(input())

for _ in range(t):
    n,m = map(int, input().split())
    arr=[]
    temp = list(map(int, input().split()))
    for i in range(0, len(temp), m):
        arr.append(list(temp[i:i+m]))
    print(maxGold(arr,n,m))
    



'''
2
3 4
1 3 3 2 2 1 4 1 0 6 4 7
4 4
1 3 1 5 2 2 4 1 5 0 2 3 0 6 1 2
'''
