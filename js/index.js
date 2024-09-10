async function getData() {
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    const jsonArr = products.map(elemento => Object.entries(elemento));
    products.forEach(element => {
        const randInt = ramdomImage(1, jsonArr.length);
        const ranIndex = randInt;
        for(i = 0; i <= 3; i++){
            if(element.id == i){
                const card_trip = document.createRange().createContextualFragment(`
                    
                    <div class="card-trip card-1">
                        <h2>japan</h2>
                        <img src="${jsonArr[ranIndex][5][1]}" alt="">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quam?</p>
                    </div>
                    
                    `)
                    const card_row = document.querySelector('.card-trip-row');
                    card_row.append(card_trip);
            }
        }

    });
    function ramdomImage(min, max){
        return Math.floor(Math.random() * (max - min + 1) + max)
    }
}

getData();