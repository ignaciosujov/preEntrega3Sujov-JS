function validarNumero(numero, mensaje){
    while(isNaN(numero)){
        alert("Ingrese un valor numerico por favor");
        numero = parseInt(prompt(mensaje));
    }
    return numero;
}



let nombreUserLS = localStorage.getItem("userName")
let nombreUser = ""

function cliente(){
    if (nombreUserLS){
        nombreUser = nombreUserLS
        TNA()
    }else{
        nombre = document.getElementById("tna")
        nombre.innerHTML = `
        <h2>Coder<span>Bank</span></h2>
        <p> ingrese su nombre para continuar: <input type="text" id="nombreUser"> <input type="submit" value="Aceptar" onClick="TNA()"> </p>
        `
    }
}


class TasaNominalActual{
    constructor(tasa){
        this.tasa = tasa
        this.fecha = new Date()
    }
}
const tnaHoy = new TasaNominalActual (97)

function TNA(){
    if (nombreUserLS){
        let mostrarTNA = document.getElementById("tna")
        mostrarTNA.innerHTML = `
        <h2>Coder<span>Bank</span></h2>
        <p> Bienvenido ${nombreUser}! Simulá tu Plazo Fijo en CoderBank </p>
        <p> Le informamos que la TNA es de ${tnaHoy.tasa}%. Actualizado al ${tnaHoy.fecha.toLocaleDateString()}  </p>`

    }else{
        let nombreUser = document.getElementById("nombreUser").value
        localStorage.setItem("userName", nombreUser)

        let mostrarTNA = document.getElementById("tna")
        mostrarTNA.innerHTML = `
        <h2>Coder<span>Bank</span></h2>
        <p> Bienvenido ${nombreUser}! Simulá tu Plazo Fijo en CoderBank </p>
        <p> Le informamos que la TNA es de ${tnaHoy.tasa}%. Actualizado al ${tnaHoy.fecha.toLocaleDateString()}  </p>`
        
    }
    
    elegirMonto()
}



class MontosPlazoFijo{
    constructor(id, monto){
        this.id = id,
        this.monto = monto
    }
}
const monto1 = new MontosPlazoFijo(1, 10000)
const monto2 = new MontosPlazoFijo(2, 25000)
const monto3 = new MontosPlazoFijo(3, 50000)
const monto4 = new MontosPlazoFijo(4, 75000)
const monto5 = new MontosPlazoFijo(5, 100000)
const monto6 = new MontosPlazoFijo(6, "otro")

const opcionesPlazoFijo = [monto1, monto2, monto3, monto4, monto5, monto6];

function elegirMonto(){
    let montosSeleccion = document.getElementById("montosSeleccion")
    let divMontoTitle = document.createElement("div")
    divMontoTitle.innerHTML = "<h3> Eliga un monto a cotizar"
    montosSeleccion.append(divMontoTitle)

    opcionesPlazoFijo.forEach(e => {
        let divMonto = document.createElement("div")

        divMonto.innerHTML = `
        <div class="inputs">
            <input type="radio" name="monto" value="${e.id}" class="montoElegido" onclick="mostrarOtroMonto()">
            <label for="${e.id}"> ${e.monto} </label>
        </div>`
        montosSeleccion.append(divMonto)
    });

}
cliente()

function mostrarOtroMonto(){
    let montoElegido = document.querySelector('input[name="monto"]:checked').value
    let otroMontoDiv = document.getElementById("otroMonto")
    
    if (montoElegido === "6"){
        otroMontoDiv.style.display = "block";

    }else{
        otroMontoDiv.style.display = "none"
    }
}

function elegirDias(){
    let diasSeleccion = document.getElementById
}



















/* function verMontoElegido(){
    const divMontoElegido = document.getElementById("montoElegidoOtro")

    divMontoElegido.innerHTML = `
    <form id="montoManual"> 
        <h4> ¿Que monto desea cotizar?</h4>
        <input type="number" id="montoAElegir">
        <input type="submit" value="Aceptar">
    </form>`

    document.getElementById("montoManual").addEventListener("submit", (e)=>{
        e.preventDefault()
        let infoEvent = e.target
        let montoManualElegido = infoEvent.querySelector('#montoAElegir')
        montoManualElegido = montoManualElegido.value
        opcionesPlazoFijo.monto.push(new MontosPlazoFijo(montoManualElegido))

    })
} */
