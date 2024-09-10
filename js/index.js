async function getData() {
    const result = await fetch('https://fakestoreapi.com/products/');
    const product = await result.json();
    const jsonArr = product.map(elemento => Object.entries(elemento));
    product.forEach(element => {
        const randInt = randonImage(1, jsonArr.length);
        const ranIndex = randInt;
       for(i = 0; i <= 3; i++){
        if(element.id == i){
            const card_trip = document.createRange().createContextualFragment(`
                    
                    <div class="card-trip card-1">
                        <h2>${jsonArr[ranIndex][1][1]}</h2>
                        <img src="${jsonArr[ranIndex][5][1]}" alt="">
                        <p>${jsonArr[ranIndex][3][1]}</p>
                    </div>
                    
                    `)
                    const card_row = document.querySelector('.card-trip-row');
                    card_row.append(card_trip);
            }
        }
    });

    function randonImage(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}



btn_validar = document.getElementById('btn-validar')

const validar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    const arrMessages = ["Nombre", "Email", "Mensaje"];
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${arrMessages[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false;
        }
    }
    if(!emailValido(email.value)){
        swal({
            title: `El campo ${arrMessages[1]} no tiene el formato correcto`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
         nombre.value = "";
         email.value = "";
         mensaje.value = "";
    return true;
}

const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

btn_validar.addEventListener("click", validar)
getData();