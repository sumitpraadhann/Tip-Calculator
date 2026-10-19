const  one = document.getElementById('onee')
const  two = document.getElementById('twoo')
const  button  = document.querySelector('.btn')
const  print = document.getElementById('print')


function sum(){
    const billvalue =Number( one.value)
    const percentage = Number(two.value)
    const total  =    (billvalue * percentage)/100 ;
    const final = billvalue + total
print.innerText = final.toFixed(2)
}
button.addEventListener('click',sum)