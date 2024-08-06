// alert('hola mundo');
// window.alert('hola mundo');

function saludar () {
    document.write(`<p>hola mundo 🌎</p>`)
}

//setTimeout

// window.setTimeout( saludar, 5000)
// setTimeout( ()=>{
//     document.write(`<p>Prueba de setTimeout</p>`)
// }, 2000)

//setInterval

//  const idInterval = setInterval(saludar, 2000);
//  console.log(idInterval)

// setTimeout(()=> {
// //aqui quiero detener el setInterval
// clearInterval(idInterval)
// }, 6000)


const fechaActual = new Date();
console.log(fechaActual)
console.log(fechaActual.getDate()) // dia del mes
console.log(fechaActual.getDay()) // dia de la semana 0-> domingo 1-> lunes 2->martes
console.log(fechaActual.getMonth())  
console.log(fechaActual.getHours())  
console.log(fechaActual.getMinutes())  
console.log(fechaActual.getSeconds())  

const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles']
console.log(diasSemana[fechaActual.getDay()])
