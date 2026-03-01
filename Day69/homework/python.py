def perimeter_sequence(a, n): 
    return 4 * a * n



def divisors(n):
    count = 0
    
    for i in range(1, n + 1):
        if n % i == 0:
            count += 1
            
    return count



def get_planet_name(id):
    if id == 1:
        return "Mercury"
    elif id == 2:
        return "Venus"
    elif id == 3:
        return "Earth"
    elif id == 4:
        return "Mars"
    elif id == 5:
        return "Jupiter"
    elif id == 6:
        return "Saturn"
    elif id == 7:
        return "Uranus"
    elif id == 8:
        return "Neptune"
    



def no_boring_zeros(n):
    if n == 0:
        return 0
    while n % 10 == 0:
        n //= 10   
    return n




