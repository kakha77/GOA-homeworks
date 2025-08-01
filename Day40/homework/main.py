def sum_mix(arr):
    return sum(int(x) for x in arr)



def logical_calc(array, op):
    if op == "AND":
        return all(array)
    elif op == "OR":
        return any(array)
    elif op == "XOR":
        result = False
        for value in array:
            result ^= value 
        return result
    



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
        



def count_sheep(n):
    result = ""
    
    for i in range(1, n + 1):
        result += f"{i} sheep..."

    return result