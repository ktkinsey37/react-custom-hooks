import React, {useState, useEffect} from "react"
import axios from "axios"
import uuid from "uuid";


const useAxios = (url) => {
    const [data, setData] = useState([])
    const [baseUrl, setUrl] = useState(url)

    const urlCompare = (url, baseUrl) => {if (url != baseUrl){
        const currentUrl = baseUrl+url
        return currentUrl
    } else {
        return baseUrl
    }}

    const currentUrl = urlCompare(url, baseUrl)
    
    const addResponseData = async (url) => {
        const currentUrl = urlCompare(url, baseUrl)
        const res = await axios.get(currentUrl)
        setData(data => [...data, { ...res.data, id: uuid() }])
    }
      return [data, addResponseData]
    }

export default useAxios;
