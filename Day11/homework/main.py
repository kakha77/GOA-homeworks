# int (integer - მთელი რიცხვი):

# x = 5
# y = -3
# a = 1000
# b = 0
# c = 57

# str (string - ტექსტური მონაცემი):

# name = "კახა"
# message = "გამარჯობა"
# country = "საქართველო"
# academy = "GOA"
# string = "1234"

# float (წილადი რიცხვი):

# price = 12.99
# temperature = 36.6
# distance = 100.75
# weight = 70.5
# radius = 5.25





#მონაცემთა ტიპის კონვერტაცია საჭიროა, როდესაც ერთ ტიპის მონაცემი უნდა გადავაკეთოთ სხვა ტიპში, რათა შევასრულოთ ოპერაციები ან თავიდან ავიცილოთ შეცდომები. მაგალითად, როდესაც სტრიქონიდან რიცხვზე კონვერტაცია გვინდა, ან როცა მოცემული ტიპი არ შეესაბამება ოპერაციისთვის საჭირო ტიპს. 





age1 = int(input("შეიყვანეთ პირველი ადამიანის ასაკი: "))
age2 = int(input("შეიყვანეთ მეორე ადამიანის ასაკი: "))
age3 = int(input("შეიყვანეთ მესამე ადამიანის ასაკი: "))


average_age = (age1 + age2 + age3) / 3
print("თქვენი საშუალო ასაკია "+str(average_age))