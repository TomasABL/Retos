let valor1 = prompt("ingresa el valor de la base" ,0)
let valor2 = prompt("ingresa el valor de la altura" ,0)
function operacione(base, altura, medida,) {
    let cua = base*altura
    if(valor1!=valor2){
        console.log('Para obtener el area de un cuadrado, los valores deben ser iguales')
    } else{
        console.log(cua, medida, 'area  de cudrado')
    }
    let rec = base*altura
    if(valor1==valor2){
        console.log('Para obtener el area de un rectangulo, los valores deben ser distintos')
    }
    else{
        console.log(rec,medida, 'area de un rectangulo')
    }
    let tri = base*altura/2

  
    console.log(tri, medida, 'area de un triangulo')
}
operacione(parseInt(valor1),parseInt(valor2), 'cm')