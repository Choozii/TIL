n = int(input())
store = list(map(int, input().split()))
store.sort()

def binary_search(arr, start, end, target):
    if start > end:
        return None
    
    mid = (start+end)//2

    if arr[mid] == target:
        return mid
    
    if arr[mid] < target:
        return binary_search(arr, mid+1, end, target)
    else:
        return binary_search(arr, start, mid-1, target)


m = int(input())
requirement = list(map(int, input().split()))

for i in requirement:
    if binary_search(store, 0, len(store), i) == None:
        print("no")
    else:
        print("yes")


