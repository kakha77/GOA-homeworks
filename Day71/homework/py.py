def get_count(sentence):
    count = 0
    for ch in sentence:
        if ch in "aeiou":
            count += 1
    return count





def row_sum_odd_numbers(n):
    return n ** 3




def disemvowel(string_):
    result = ""
    for ch in string_:
        if ch.lower() not in "aeiou":
            result += ch
    return result




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