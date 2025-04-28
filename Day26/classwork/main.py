def name_to_upper(name):
    result = ""
    for letter in name:
        result += letter.upper()
    return result

print(name_to_upper("kakha"))




def elements(my_list):
    for element in my_list:
        print(element)

elements(["apple", "banana", "mango"])