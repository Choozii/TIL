s = input()
arr = []

for i in range(len(s)):
    arr.append(int(s[i]))

num = arr[0]
for i in range(1, len(arr)):
    if num == 0 or arr[i] == 0 or arr[i] == 1:
        num += arr[i]
    else:
        num *= arr[i]

print(num)
