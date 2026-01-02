
 const product=fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(product =>{ console.log(product);

        const display=product.products.map(items=>{
            return`
            <div class="card" ${key=items.id}>
            <img class="img" src=${items?.images}>
            <h3 class="card-title">Title:${items?.title}</h3>
            </div>
            `;})
            .join("");
            document.getElementById("display").innerHTML=display;
        });
        