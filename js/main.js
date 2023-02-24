let total = 0;
// FUNCIÓN PARA PEDIR DATOS DEL CLIENTE
function datosDeCliente(){
    let nombre = prompt('Ingrese su nombre: ');
    let apellido = prompt('Ingrese su apellido: ');
    let DNI = parseInt(prompt('Ingrese su DNI'));
    return (nombre + ' ' + apellido);
}

// FUNCIÓN PARA EJECUTAR COMPRA DE SERVICIOS
function compraDeServicios(cliente){
    let servicioAElegir = true;
    while (servicioAElegir) {
        let servicioSeleccionado = parseInt(prompt('Hola '+ cliente +', por favor elija una de los siguientes servicios: \n1)Show Infantil \n2)Decoración de Globos,\n3) Decoración Matrimonial,\n4) Show y Decoración de Globos'));
        switch (servicioSeleccionado) {
            case 1:
                total = total + 900;
				break;
            case 2:
                total = total + 400;
				break;
            case 3:
                total = total + 500;
				break;
            case 4:
                total = total + 1200;
				break;
            default:
                alert('Error en la elección de servicio.');
				continue;
        }
        alert('Gracias, hasta ahora el monto total por el servicio es de: $/'+ total);
       
        let cpp = true;
		while (cpp) {
			let cantidadDeCuotas = parseInt(prompt('¿En cuántas cuotas sin intereses deseas pagarlo?\n1) 1 cuotas\n2) 2 cuotas \n3) 3 cuotas \n4) 5 cuotas \n5)7 cuotas'));
			switch (cantidadDeCuotas) {
				// El toFixed me sirve para la cantidad de decimales que se van a mostrar, en este caso son 2
				case 1:
					totalCuotas = total / 1;
					alert ('Su pago será 1 cuota de $/' + (totalCuotas).toFixed(2));
					cpp = false;
					break;
				case 2:
					totalCuotas = total / 2;
					alert ('Su pago serán 2 cuotas de $/' + (totalCuotas).toFixed(2));
					cpp = false;
					break;
				case 3:
					totalCuotas = total / 3;
					alert ('Su pago serán 3 cuotas de $/' + (totalCuotas).toFixed(2));
					cpp = false;
					break;
				case 4:
					totalCuotas = total / 5;
					alert ('Su pago serán 5 cuotas de $/' + (totalCuotas).toFixed(2));
					cpp = false;
					break;
				case 5:
					totalCuotas = total / 7;
					alert ('Su pago serán 7 cuotas de $/' + (totalCuotas).toFixed(2));
					cpp = false;
					break;
				default:
					alert('Cantidad de cuotas ingresada incorrecta')
					break;
			}
		}
		
        let seleccionContinuarCompra = parseInt(prompt('¿Desea contratar algún otro servicio?\n1) Sí \n2) No'));
        if (seleccionContinuarCompra === 1) {
            servicioAElegir = true
        }else{
            break
        }
    }
    let mostrarMontoTotal = ('Gracias por tu preferencia ' + cliente + ', usted ha gastado $/' + total);
    return mostrarMontoTotal;
}

window.addEventListener('load',function(){
    let cliente = datosDeCliente();
    alert(compraDeServicios(cliente));
})

