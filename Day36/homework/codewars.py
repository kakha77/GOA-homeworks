def invert(lst):
    return [-x for x in lst]


def monkey_count(n):
    return list(range(1, n+1))


def remove_exclamation_marks(s):
    return s.replace("!", "")



def reverse_words(s):
    return " ".join(s.split()[::-1])



def string_to_array(s):
    return s.split(" ")