def combine_texts(text1, text2):
    return text1 + text2
print(combine_texts("Hello", "World"))


def repeat_text(text, times):
    return text * times
print(repeat_text("Hi", 3))



def greet(name):
    return f"გამარჯობა, {name}!"
print(greet("კახა"))



def format_words(words):
    return f"{words[0]}, {words[1]} და {words[2]}"
print(format_words(["ლომი", "ვეფხვი", "დათვი"]))  


#Python-ში def გამოიყენება ფუნქციის შესაქმნელად. ფუნქცია — ეს არის კოდების ბლოკი, რომელსაც სახელი აქვს და საჭიროებისამებრ შეგიძლია გამოიძახო.