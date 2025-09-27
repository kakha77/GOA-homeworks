def double_integer(i):
    return i * 2




def friend(x):
    return [name for name in x if len(name) == 4]




def grow(arr):
    prod = 1
    for x in arr:
        prod *= x
    return prod




def find_average(numbers):
    return sum(numbers) / len(numbers) if numbers else 0




def double_char(s):
    return ''.join([char * 2 for char in s])



def remove_url_anchor(url):
    return url.split('#')[0]



def sum_cubes(n):
    return sum(i**3 for i in range(1, n+1))