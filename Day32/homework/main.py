def word_len(sentance):
    result = []
    words = ""

    for i in sentance:
        if i != " ":
            words += i
        else:
            result.append(words + str(len(words)))
            words = ""

    result.append(words + str(len(words)))
    print(result)

word_len("Hello how are you")

#ეს კოდი hello how are you-ს მიუწერს გვერდით თუ ეგ სიტყვა რამდენი ასოსგან შედგება ანუ hello5 how3 are3 you3