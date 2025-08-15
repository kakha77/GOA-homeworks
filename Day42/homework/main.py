def descending_order(num):
    digits = sorted(str(num), reverse=True) 
    result = 0
    for d in digits:
        result = result * 10 + int(d)   
    return result



def get_middle(s):
    idx = len(s) // 2
    return s[idx] if len(s) % 2 else s[idx - 1: idx + 1]


def xo(s):
    s = s.lower()
    return s.count('x') == s.count('o')




def find_short(s):
    return min(len(word) for word in s.split())



def sum_two_smallest_numbers(numbers):
    a, b = sorted(n for n in numbers if n > 0)[:2]
    return a + b


def accum(st):
    result = ""
    for i, c in enumerate(st):
        part = c.upper() + c.lower() * i
        result += part
        if i != len(st) - 1: 
            result += "-"
    return result




def smash(words):
    result = ""
    for i, word in enumerate(words):
        result += word
        if i != len(words) - 1:
            result += " "
    return result




def better_than_average(class_points, your_points):
    return your_points > sum(class_points) / len(class_points)