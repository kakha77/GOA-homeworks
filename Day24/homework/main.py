def didi_asoebi(text):
    return text.upper()

print(didi_asoebi("gamarjoba"))  


saxeli = input("შეიყვანე შენი სახელი: ")
print("პირველი ასო დიდი ასოთია:", saxeli[0].upper())

sityva = "დღეს ძალიან კარგი ამინდია და ყველას უყვარს სეირნობა"
pasuxi = sityva.find("სეირნობა")
print("სიტყვა 'სეირნობა' მდებარეობს ინდექსზე:", pasuxi)


def gashveba(arg1, arg2):
    print(arg1.upper() + arg2.lower())

gashveba("KAKHA", "Gori") 


print("hello".upper())  
print("python".upper())  
print("gori".upper())  
print("kakha".upper()) 
print("123abc".upper()) 

print("HELLO".lower()) 
print("WORLD".lower())  
print("PYTHON123".lower())  
print("KAKHA".lower()) 
print("GORI".lower())  

print("banana".find("a")) 
print("hello world".find("world"))  
print("gamarjoba".find("r"))  
print("school".find("o"))  
print("football".find("t"))  

print("banana".replace("a", "o"))  
print("hello world".replace("world", "Kakha"))  
print("python is fun".replace("fun", "awesome"))  
print("abcabc".replace("a", "*")) 
print("test".replace("t", "#"))  

print("hello".capitalize()) 
print("gAMARJOBA".capitalize())  
print("python".capitalize())  
print("WORLD".capitalize())  
print("school".capitalize())  

print("Hello".swapcase())
print("KaKhA".swapcase())  
print("PYthon".swapcase()) 
print("SwApCaSe".swapcase())  
print("123ABCdef".swapcase())  
