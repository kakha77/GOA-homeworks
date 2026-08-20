//1
//html კოლექცია-შეიცავს მარტო html-ის ელემენტებს, და ასევე თავისით ახლდება ხოლმე ცვლილებისას
//nodelist-შეიძლება შეიცავდეს ნებისმიერ ტექსტს

//2
//queryselector-მარტო იმ ელემენტს აბრუნებს რომელსაც პირველს იპოვის
//queryselectorall-აბრუნებს ყველა ელემენტს რომელიც ემთხვევა

//3
const divs = document.getElementsByClassName('div')
const dviArr = Array.from(divs)
dviArr.forEach(div => {
    console.log(div)
})


//4
const p = document.querySelector('.ptag')
p.textContent = 'blabla'
p.style.color = 'red'