import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductAPI, getproductDetailAPI } from "./productAIP";

const initialState ={
    loading:false,
    data:{},
    ProductDetail:{
        loading:false,
        data:{}

    }
    }
    export const getAllproduct=createAsyncThunk("product/getAllproduct", async ()=>{
        try{
            const respons = await getProductAPI()
            if(respons?.status == 200){
                return respons.data

            }
        } catch(err){
            console.error(err.message);
        }
    })

    export const getProductDetail =createAsyncThunk("product/getProductDetail", async (productId)=>{
         const respons=await getproductDetailAPI(productId)
         if(respons && respons.status == 200){
            return respons.data
         }
    })

const productSlice= createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllproduct.pending,(state)=>{
            state.loading=true
        }).addCase(getAllproduct.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload

        }).addCase(getProductDetail.pending,(state)=>{
            state.ProductDetail.loading=true

        }).addCase(getProductDetail.fulfilled,(stete,action)=>{
            stete.ProductDetail.loading=false
             stete.ProductDetail.data=action.payload
 

        })

    }
    

})
export default productSlice.reducer