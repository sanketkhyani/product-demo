import axios from "axios";
import { ENDPOINT } from "../../comfig";

export function getProductAPI(){
    return axios.get(`${ENDPOINT}/products`)
}

export function getproductDetailAPI(id){
    return axios.get(`${ENDPOINT}/products/${id}`)


}