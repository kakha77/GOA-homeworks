def validate_hello(greetings):
    hellos = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"]
    return any(word in greetings.lower() for word in hellos)


def cookie(x):
    if type(x) == str:
        return "Who ate the last cookie? It was Zach!"
    elif type(x) in [int, float]:
        return "Who ate the last cookie? It was Monica!"
    else:
        return "Who ate the last cookie? It was the dog!"
    



def grader(score):
    if score > 1 or score < 0.6:
        return "F"
    elif score >= 0.9:
        return "A"
    elif score >= 0.8:
        return "B"
    elif score >= 0.7:
        return "C"
    elif score >= 0.6:
        return "D"



def unusual_five():
    return len("five!")




def xo(s):
    s = s.lower()
    return s.count('x') == s.count('o')





def sum_two_smallest_numbers(numbers):
    min1 = min(numbers)
    numbers.remove(min1)
    min2 = min(numbers)
    return min1 + min2





def DNA_strand(dna):
    pairs = {"A": "T", "T": "A", "C": "G", "G": "C"}
    result = ""
    for n in dna:
        result += pairs[n]
    return result