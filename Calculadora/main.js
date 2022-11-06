
//Funcionamiento calculadora suma
const sumarbutton = document.getElementById('sumar-button')
const resultshow = document.getElementById('result')
sumarbutton.addEventListener('click', () => {
    const n1 = document.getElementById('n1').value
    if(!n1){
        return alert('Ingresa un número en el espacio 1')
    }
    const n2 = document.getElementById('n2').value
    if(!n2){
        return alert('Ingresa un número en el espacio 2')
    }
    const n3 = document.getElementById('n3').value
    if(!n3){
        return alert('Ingresa un número en el espacio 3')
    }
    const resultadosuma = parseInt(n1)+parseInt(n2)+parseInt(n3)
    resultshow.innerHTML = `<p>El resultado de la suma es: ${resultadosuma}</p>`
    console.log(`el resultado de la suma entre ${n1}, ${n2} y ${n3} es`,resultadosuma)
})
//Funcionamiento calculadora resta
const restarbutton = document.getElementById('restar-button')
const resultshow2 = document.getElementById('result2')
restarbutton.addEventListener('click', () => {
    const n1 = document.getElementById('n1').value
    if(!n1){
        return alert('Ingresa un número en el espacio 1')
    }
    const n2 = document.getElementById('n2').value
    if(!n2){
        return alert('Ingresa un número en el espacio 2')
    }
    const n3 = document.getElementById('n3').value
    if(!n3){
        return alert('Ingresa un número en el espacio 3')
    }
    const resultadoresta = parseInt(n1)-parseInt(n2)-parseInt(n3)
    resultshow2.innerHTML = `<p>El resultado de la resta es: ${resultadoresta}</p>`
    console.log(`el resultado de la resta entre ${n1}, ${n2} y ${n3} es`, resultadoresta)
})
//Funcionamiento calculadora multiplicación
const multiplicarbutton = document.getElementById('multiplicar-button')
const resultshow3 = document.getElementById('result3')
multiplicarbutton.addEventListener('click', () => {
    const n1 = document.getElementById('n1').value
    if(!n1){
        return alert('Ingresa un número en el espacio 1')
    }
    const n2 = document.getElementById('n2').value
    if(!n2){
        return alert('Ingresa un número en el espacio 2')
    }
    const n3 = document.getElementById('n3').value
    if(!n3){
        return alert('Ingresa un número en el espacio 3')
    }
    const resultadomultiplicación = parseInt(n1)*parseInt(n2)*parseInt(n3)
    resultshow3.innerHTML = `<p>El resultado de la multiplicación es: ${resultadomultiplicación}</p>`
    console.log(`el resultado de la multiplicación entre ${n1}, ${n2} y ${n3} es`, resultadomultiplicación)
})
//Funcionamiento calculadora división
const dividirbutton = document.getElementById('dividir-button')
const resultshow4 = document.getElementById('result4')
dividirbutton.addEventListener('click', () => {
    const n1 = document.getElementById('n1').value
    if(!n1){
        return alert('Ingresa un número en el espacio 1')
    }
    const n2 = document.getElementById('n2').value
    if(!n2){
        return alert('Ingresa un número en el espacio 2')
    }
    const n3 = document.getElementById('n3').value
    if(!n3){
        return alert('Ingresa un número en el espacio 3')
    }
    const resultadodivision = parseInt(n1)/parseInt(n2)/parseInt(n3)
    resultshow4.innerHTML = `<p>El resultado de la division es: ${resultadodivision}</p>`
    console.log(`el resultado de la división entre ${n1}, ${n2} y ${n3} es`,resultadodivision)
})

