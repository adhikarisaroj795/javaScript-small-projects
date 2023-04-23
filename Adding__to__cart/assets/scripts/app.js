class Product{
    title = 'DEFAULT';
    imageUrl;
    description;
    price;

    constructor(title, image, desc, price){
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}
class ProductItem{
    constructor(product) {
        this.product = product;

    }
    render(){
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = ` 
        <div>
            <img src = "${this.product.imageUrl}" alt = "${this.product.title}">
        <div class = "product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to cart</button>


        </div>
        </div>
        `;
        return prodEl;

    }

}



class ProductList{
    products = 
    [
        new Product('A pillow', 'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg', 'A soft pillow', 200),
        new Product('A pillow', 'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg', 'A soft pillow', 200)
    ];
    constructor(){

      
    }
    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const prod of this.products ){
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            // const prodEl = document.createElement('li');
            // prodEl.className = 'product-item';
            // prodEl.innerHTML = ` 
            // <div>
            // <img src = "${prod.imageUrl}" alt = "${prod.title}">
            // <div class = "product-item__content">
            // <h2>${prod.title}</h2>
            // <h3>\$${prod.price}</h3>
            // <p>${prod.description}</p>
            // <button>Add to cart</button>


            // </div>
            // </div>
            // `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);

    }


}
const productList = new ProductList();
productList.render();

// const productLists = 
// {

    
//     products:[
//         new Product('A pillow', 'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg', 'A soft pillow', 200),
//         new Product('A pillow', 'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg', 'A soft pillow', 200)

    // {
    // title: 'A pillow',
    // imageUrl:
    // 'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
    
    // price: 200,
    // description: 'A soft pillow'
    // },
    // {
    // title: 'A Carpet',
    // imageUrl:
    // 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
    
    // price: 500,
    // description: 'A soft pillow'
    // }
    // ],
    // render(){
        // const renderHook = document.getElementById('app');
        // const prodList = document.createElement('ul');
        // prodList.className = 'product-list';
        // for(const prod of this.products ){
        //     const prodEl = document.createElement('li');
        //     prodEl.className = 'product-item';
        //     prodEl.innerHTML = ` 
        //     <div>
        //     <img src = "${prod.imageUrl}" alt = "${prod.title}">
        //     <div class = "product-item__content">
        //     <h2>${prod.title}</h2>
        //     <h3>\$${prod.price}</h3>
        //     <p>${prod.description}</p>
        //     <button>Add to cart</button>


        //     </div>
        //     </div>
        //     `;
        //     prodList.append(prodEl);
        // }
        // renderHook.append(prodList);
//     }

// };