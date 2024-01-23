a = [3,1,2,4]

def mountain(a):
    l = 0

    for i in range(len(a)):
        if a[i] % 2 == 0:
            a[l], a[i] = a[i], a[l]
            l += 1

    return a

print(mountain(a))