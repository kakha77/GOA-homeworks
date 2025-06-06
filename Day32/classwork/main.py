#1

# ფუნქციას შეიძლება ვუწოდოთ კოდის ნაწილი, რომელსაც კონკრეტული დავალება აქვს.
# მისი გამოყენება გვიმარტივებს კოდს, თავიდან გვაცილებს ერთსა და იმავეს გამეორებას,
# და საშუალებას გვაძლევს ერთხელ დაწერილი კოდი რამდენჯერმე გამოვიყენოთ.



#2

def hello (name):
    print("გამარჯობა,", name + "!")
hello("კახა")

#3

names = ["კახა", "ლუკა", "ნიკა", "ანდრია", "დათო"]

new_name = input("შეიყვანეთ სახელი: ")
index_str = input("შეიყვანეთ ინდექსი: ")

if index_str.isdigit():
    index = int(index_str)

    if index > len(names):
        print("ერორი: ინდექსი ვერ მოიძებნა")
    else:
        names.insert(index, new_name) 
        print("განახლებული სია:", names)
else:
    print("შეცდომა: გთხოვთ, შეიყვანოთ რიცხვი ინდექსისთვის.")



#4

def even_or_odd(number):
    if number % 2 == 0:
        print(number, "არის ლუწი")
    else:
        print(number, "არის კენტი")
even_or_odd(7)
even_or_odd(10)


#5

def words_with_length(sentence):
    words = sentence.split()  
    result = []

    for word in words:
        result.append(word + " " + str(len(word)))

    return result

print(words_with_length("hello how are you"))