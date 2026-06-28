var chislo= parseInt(Math.random()*10)
while(i!=chislo){
    var i=prompt("введите число от 1 до 10")
    if (i != chislo){
        alert('попробуй еще раз')
    }
}
alert("угадали")