let valor1 = prompt("ingresa el valor de la base" ,0)
let valor2 = prompt("ingresa el valor de la altura" ,0)
function operaciones(base, altura, medida,) {
    let cuadrado = base*altura
    if(valor1!=valor2){
        console.log('Para obtener el area de un cuadrado, los valores deben ser iguales')
    } else{
        console.log(cuadrado, medida, 'area  de cudrado')
    }
    let rectangulo = base*altura
    if(valor1==valor2){
        console.log('Para obtener el area de un rectangulo, los valores deben ser distintos')
    }
    else{
        console.log(rectangulo,medida, 'area de un rectangulo')
    }
    let triangulo = base*altura/2

  
    console.log(triangulo, medida, 'area de un triangulo')
}
operaciones(parseInt(valor1),parseInt(valor2), 'cm')