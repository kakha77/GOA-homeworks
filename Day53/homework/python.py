def make_negative(number):
    if number > 0:
        return -number
    else:
        return number
    





def square_sum(numbers):
    total = 0
    for n in numbers:
        total += n * n
    return total







def find_smallest_int(arr):
    smallest = arr[0]
    for n in arr:
        if n < smallest:
            smallest = n
    return smallest




def summation(num):
    total = 0
    for i in range(1, num + 1):
        total += i
    return total





def get_count(sentence):
    count = 0
    for ch in sentence:
        if ch in "aeiou":
            count += 1
    return count





def disemvowel(string_):
    result = ""
    for ch in string_:
        if ch.lower() not in "aeiou":
            result += ch
    return result






def square_digits(num):
    result = ""
    for digit in str(num):
        result += str(int(digit) ** 2)
    return int(result)