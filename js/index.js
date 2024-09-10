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

getData();