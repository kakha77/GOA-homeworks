def stringy(size):
    return ("10" * size)[:size]



def digitize(n):
    return [int(d) for d in str(n)][::-1]



def paperwork(n, m):
    if n <= 0 or m <= 0:
        return 0
    return n * m



def maps(a):
    return [x * 2 for x in a]



def bmi(weight, height):
    value = weight / (height ** 2)
    if value <= 18.5:
        return "Underweight"
    elif value <= 25.0:
        return "Normal"
    elif value <= 30.0:
        return "Overweight"
    else:
        return "Obese"
    



def double_char(s):
    result = ""
    for ch in s:
        result += ch*2
    return result




def say_hello(name):
    return f"Hello, {name}"





def monkey_count(n):
    if n <= 0:
        return []
    return list(range(1, n + 1))




def solution(a, b):
    if len(a) < len(b):
        return a + b + a
    else:
        return b + a + b
