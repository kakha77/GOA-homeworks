def digitize(n):
    return [int(x) for x in str(n)[::-1]]



def sum_array(arr):
    if not arr or len(arr) <= 2:
        return 0
    return sum(arr) - max(arr) - min(arr)




def is_uppercase(inp):
    for i in inp:
        if i.isalpha():
            if not i.isupper():
                return False
    return True