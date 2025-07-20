def divisible_by(numbers, divisor):
     return [num for num in numbers if num % divisor == 0]



def between(a,b):
    return list(range(a,b +1))





def string_to_array(s):
    return s.split(" ")




def count_sheep(n):
    result = ""
    for i in range(1, n + 1):
        result += str(i) + " sheep..."
    return result