def is_square(n):    
    if n >= 0:
        if int(n ** .5)** 2 == n:
            return True
    return False


def accum(st):
    result = ""
    for i, c in enumerate(st):
        part = c.upper() + c.lower() * i
        result += part
        if i != len(st) - 1: 
            result += "-"
    return result




def solution(number):
    sum = 0
    for i in range(1, number):
        if i % 3 == 0 or i % 5 == 0:
            sum += i
    return sum



