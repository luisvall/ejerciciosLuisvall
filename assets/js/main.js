// definiendo los parametros inciales de los usuarios ( BBDD )
const users = [
    {id: 0, user: 'luis', pass: '1234', balance: 30000},
    {id: 1, user: 'valentin', pass: '4567', balance: 22000},
    {id: 2, user: 'jesus', pass: '8901', balance: 1000}
]

// Contador de usuarios en la bbdd.
const size = users.length

/* Revisar si al menos uno de los usuarios coincide tanto en "user" como en "pass", de coincidir ambos la variable "found" cambiara a true */

//variable que cambiara si un usuario es válido
let found = false
let saldo = 0
let id = ''
// Función que evalúa lo anterior
    function userLogin () {
        let inputName = window.prompt('Ingrese su usario')
        let inputPass = window.prompt('Ingrese su contraseña')
        for (let i = 0 ; i<size ; i++){
            let name = users[i].user
            let pass = users[i].pass
            if(name == inputName && pass == inputPass){
                found = true
                id = i
                saldo = users[id].balance
                console.log('Hola ' + name)
            }
        }
    }


    function verSaldo () {
        alert('Tu saldo es '+ users[id].balance +' CLP')
        menu()
    }


    function realizarGiro () {
        let giro = window.prompt(
            `Su saldo actual es ${users[id].balance}
Ingrese el monto que desea retirar`)
            giro = parseInt(giro)
        users[id].balance = users[id].balance - giro;
        alert('Giro realizado, su nuevo saldo es '+ users[id].balance)
        menu()  
    }


    function realizarDeposito () {
        let deposito = window.prompt(
            `Su saldo actual es ${users[id].balance}
Ingrese el monto que desea depositar`)
            deposito = parseInt(deposito)
        users[id].balance = users[id].balance + deposito;
        alert('Depósito realizado, su nuevo saldo es '+ users[id].balance)
        menu()  
    }



    function menu () {
 
        const menuText = `Seleccioe que desea hacer:
        1.- Ver saldo
        2.- Realizar giro
        3.- Realizar depósito
        4.- salir`

        let optionMenu = window.prompt(menuText)
        if (optionMenu == '1'){verSaldo()}
        else if (optionMenu == '2'){realizarGiro()}
        else if (optionMenu == '3'){realizarDeposito()}
        else if (optionMenu == '4'){ return(console.log('fin'))}
        else{ console.log('opción no válida') ; menu()}
    }




/*Función que se ejecuta al hacer click en el botón y llama a las funciones creadas anteriormente */    
function cajero (){       
    userLogin()
    if (found) {
        alert('Bienvenido a banca en línea')
        console.log('Bienvenido a tu cuenta')
        menu()
    } else {
        alert('Clave o contraseña incorrecta, intente nuevamente')
        console.log('Sigue intentando')
    }
// reseteo del found para que al volver a loguear vualva a estar en falso
    found = false
    saldo = 0
    id = ''
}