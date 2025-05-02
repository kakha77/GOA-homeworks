def sum_odd_numbers(numbers):
    return sum(num for num in numbers if num % 2 != 0)
print(sum_odd_numbers([1, 2, 3, 4, 5]))




def four_letter_names(names):
    return [name for name in names if len(name) == 4]
print(four_letter_names(["Anna", "Giorgi", "Luka", "Nika"]))




def divisible_by_3_and_5(numbers):
    return [num for num in numbers if num % 3 == 0 and num % 5 == 0]
print(divisible_by_3_and_5([15, 30, 10, 9, 5]))





name = "Kakha"
age = 13
print(f"My name is {name} and I am {age} years old.")