n = int(input())

students = []
for _ in range(n):
    students.append(list(map(str, input().split())))


def standard(input):
    return int(input[1])

result = sorted(students, key=standard)

for i in range(len(result)):
    print(result[i][0], end=' ')

