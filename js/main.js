
var first = document.querySelector('.first')
var second = document.querySelector('.second')
var tank = document.querySelector('.tanki')

var first__title = document.querySelector('.first__title')
var second__title = document.querySelector('.second__title')
var tank__title = document.querySelector('.tank__title')
var topshir = document.querySelector('.topshir')


var form = document.querySelector('.form')


form.addEventListener('submit', function(evnt){
    evnt.preventDefault()

//IELTS

    if(first.value > 9){
        first__title.textContent = first.value + ' Bunday IELTS bali mavjud emas ❌'
    }
    else if(first.value >= 5){
        first__title.textContent = first.value + ' to`g`ri keladi ✅'
    }
    else if(first.value == ''){
        first__title.textContent = 'Ma`lumot kiriting'
    }
    else if(first.value < 5 && tank.value == 'bor'){
        first__title.textContent = 'Tankiz qutqarib qoldi ✅'
    }
    else{
        first__title.textContent = ' To`g`ri kelmaydi ❌'
    }

//ball 

    if(second.value >= 60){
        second__title.textContent = second.value + ' ball to`g`ri keladi ✅'
    }
    else if(second.value == ''){
        second__title.textContent = 'Ma`lumot kiriting'
    }
    else if(first.value >= 5 && second.value < 60 && tank.value == 'bor'){
        second__title.textContent = 'Tanki qutqarib qoldi ✅'
    }
    else if(second.value < 60 && tank.value == 'bor'){
        second__title.textContent = 'Tankiz bu yerda qutqara olmaydi ❌'
    }
    else{
        second__title.textContent = ' To`g`ri kelmaydi ❌'
    }

//tank 

    if(tank.value.toLowerCase() == 'bor'){
        tank__title.textContent = 'Tanki bor ✅'
    }
    else if(tank.value == ''){
        tank__title.textContent = 'Tankiz bormi?'
    }
    else{
        tank__title.textContent = 'tanki yo`q ❌'
    }

//topshir
    if(first.value > 9){
        topshir.textContent = first.value + ' IELTS balingizni t`og`ri kiriting'
    }
    else if(first.value >= 5 && second.value >= 60){
        topshir.textContent = 'Siz o`qishga kirdingiz ✅'
    }
    else if(first.value < 5 && second.value >= 60 && tank.value.toLowerCase() == 'bor'){
        topshir.textContent = 'Tanki orqalik o`qishga kirdingiz ✅'
    }
    else if(first.value >= 5 && second.value < 60 && tank.value.toLowerCase() == 'bor'){
        topshir.textContent = 'Tanki orqalik o`qishga kirdingiz ✅'
    }
    else{
        topshir.textContent = 'Oqishga kiraolmadizngiz ❌'
    }
})
