def bonus_time(salary, bonus):
    if bonus:
        salary *= 10
    return f"${salary}"


def grow(arr):
    prod = 1
    for x in arr:
        prod *= x
    return prod


def rps(p1, p2):
    if p1 == p2:
        return "Draw!"
    if (p1 == "rock" and p2 == "scissors") or (p1 == "scissors" and p2 == "paper") or (p1 == "paper" and p2 == "rock"):
        return "Player 1 won!"
    else:
        return "Player 2 won!"


def swap_values(args): 
    args[0], args[1] = args[1], args[0]



def better_than_average(class_points, your_points):
    return your_points > sum(class_points) / len(class_points)