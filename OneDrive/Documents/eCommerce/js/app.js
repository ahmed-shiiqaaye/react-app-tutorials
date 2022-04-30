let increase = document.querySelector('.plus')
let decrease = document.querySelector('.minus')
let spanValue = document.querySelector('.value')
let btns = document.querySelector('.btns')
let prices = document.querySelectorAll('.price')

let no = 0;
btns.addEventListener('click',function(e){
    const item  = e.target;
    if(item.classList[1] === 'plus'){
        no++;
        spanValue.textContent = no;
       for (let i = 0; i < prices.length; i++) {
        console.log(prices.)    
       }
    }
    if(item.classList[1] === 'minus'){
        no--;
        spanValue.textContent = no      
    }
})