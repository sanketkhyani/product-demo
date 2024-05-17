import { Link } from "react-router-dom"

const Productlist=({data})=>{
    return(
        data?.map((product,index)=>{
            return(
                <Link to={`/product/${product.id}`}>
                <div className="product" key={index}>
                    <div className="image-box">
                    <img className="images" id="image-1" src={product.thumbnail} />
                    </div>
                    <div className="text-box">
                    <h2 className="item">{product.title.length > 15 ? `${product?.title.slice(0,15)}...` :product?.title }</h2>
                    {/* <h2 className="item">{product.title.slice(0,15)}...</h2> */}
                    <h3 className="price">₹{product.price}/-</h3>
                    <p classx="description" style={{fontSize:"12px"}}>{product.description.slice(0,60)}...</p>
                    <label style={{fontSize:"15px " }} htmlFor="item-1-quantity">Quantity:</label>
                    <input  onChange={()=> {}} type="number" name="item-1-quantity" id="item-1-quantity" value={1} />
                    <button onChange={()=> {}} type="button" name="item-1-button" id="item-1-button">Add to Cart</button>
                    </div>
  </div></Link>
            )

        })
    )

}
export default Productlist