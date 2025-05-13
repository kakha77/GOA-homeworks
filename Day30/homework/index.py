#1)
#სტრინგის ფუნქციები:
#lower-სტრინგი გადაყავს პატარა ასოებად.
#upper-სტრინგი გადაყავს დიდ ასოებად.
#capitalize-სტრინგის პირველი ასო გადაყავს დიდად და დანარჩენი პატარებად.
#len-აბრუნებს სტრინგის სიგრძეს.

#სიის ფუნქციები:
#append-სიაში ახალ ელემენტს ამატებს.(მოკლე ახსნა).
#len-აბრუნებს სიის სიგრძეს.
#pop-სიიდან შლის ელემენტს.


# 2)
my_surname = "kalandadze"
user_surname = input("Enter your surname: ")

if my_surname.lower() == user_surname.lower():
    print("Our surnames are similar.")
else:
    print("We have different surnames.")


# 3)
food = ["chips", "burger", "candy"]

food.pop()  
food.pop()  
food.pop()

food.append("apple")
food.append("salad")
food.append("banana")

print(food)  


# 4)
my_name = "Kakha"
user_name = input("Enter your name: ")

if my_name[0].lower() == user_name[0].lower() and my_name[-1].lower() == user_name[-1].lower():
    print(2)
elif my_name[0].lower() == user_name[0].lower() or my_name[-1].lower() == user_name[-1].lower():
    print(1)
else:
    print(0)


# BOSS)
names = []

for i in range(3):
    name = input("Enter your name: ").capitalize()
    names.append(name)
    print(names)