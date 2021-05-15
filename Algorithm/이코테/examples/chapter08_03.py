n,m = map(int, input().split())
rice_cakes=list(map(int, input().split()))

start = 0
end = max(rice_cakes)
result = 0

while(start <= end):
    mid = (start+end)//2

    #calculate length
    sum = 0
    for i in rice_cakes:
        if i > mid:
           sum += i-mid

    if sum < m:
        end = mid - 1
    else:
        result = mid
        start = mid+1

print(result)
