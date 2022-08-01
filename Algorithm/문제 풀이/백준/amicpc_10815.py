n = int(input())
exist_card = list(map(int, input().split()))
exist_card.sort()

def binary_search(arr, target):

    start = 0
    end = len(exist_card)-1
    
    while(start <= end):
        mid = (start+end)//2
        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            end = mid-1
        elif arr[mid] < target:
            start = mid + 1
            
    return -1
    
    
m = int(input())
check_card = list(map(int, input().split()))

for i in check_card:
    if binary_search(exist_card, i) == -1:
        print(0, end=' ')
    else:
        print(1, end=' ')
    
