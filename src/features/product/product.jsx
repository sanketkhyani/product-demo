import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllproduct } from "./productSlice"

import loader from '../../assets/images/loder.gif'
import Productlist from "./Productlist"
import '././product.css'

const Product=()=>{
    const loading = useSelector((state)=> state?.product?.loading )
   const data=useSelector((state)=> state?.product?.data)
    // console.log({loading ,data});
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllproduct())

    },[])
    return(
        <>
        <h1>All Product</h1>
        <div className="listing-section">
            {loading ?  
            <img src={loader} />
            :
                data?.products?.length > 0 ?
                <Productlist
                     data={data?.products}
                 />
                :
                <div><h1> 404 no data faund</h1></div>
            }
          

        </div>
        </>
    )
}
export default Product