

function Cardb({ product, i }) {


    return (

        <div key={i++}>
            <h1>{product.productName}</h1>
            <h1>{product.prodId}</h1>
            <h1>{product.productCategory}</h1>
            <h1>{product.price}</h1>

        </div>


    );



}


export { Cardb };