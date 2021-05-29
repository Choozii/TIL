s = input()

arr = []
sum = 0
for i in s:
    if i.isdigit():
        sum += int(i)
    else:
        arr.append(i)
arr.sort()
if sum != 0:
    arr.append(str(sum))
for i in arr:
    print(i, end='')
