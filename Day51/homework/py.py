def calculator(x, y, op):
    if not isinstance(x, (int, float)) or not isinstance(y, (int, float)):
        return "unknown value"

    match op:
        case "+":
            return x + y
        case "-":
            return x - y
        case "*":
            return x * y
        case "/":
            return x / y if y != 0 else "unknown value"
        case _: 
            return "unknown value"
        






def divisible_by(numbers, divisor):
    result = []
    for i in numbers:
        if i % divisor == 0:
            result.append(i)
    return result





def switch_it_up(number):
    if -1 < number < 10:
        if number == 0:
            return "Zero"
        elif number == 1:
            return "One"
        elif number == 2:
            return "Two"
        elif number == 3:
            return "Three"
        elif number == 4:
            return "Four"
        elif number == 5:
            return "Five"
        elif number == 6:
            return "Six"
        elif number == 7:
            return "Seven"
        elif number == 8:
            return "Eight"
        elif number == 9:
            return "Nine"
        



def get_volume_of_cuboid(length, width, height):
    return length * width * height





def filter_list(l):
    result = []
    for i in l:
        if type(i) != str:
            result.append(i)
    return result




def is_square(n):    
    if n >= 0:
        if int(n ** .5)** 2 == n:
            return True
    return False




def sequence_sum(begin, end, step):
    if begin > end:
        return 0
    return sum(range(begin, end + 1, step))