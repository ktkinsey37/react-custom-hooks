import React, {useState, useEffect} from "react"
import axios from "axios"
import uuid from "uuid";


const useAxios = (url) => {
    const [data, setData] = useState([])
    
    const addResponseData = async () => {
        const res = await axios.get(url)
        setData(data => [...data, { ...res.data, id: uuid() }])
    }
      return [data, addResponseData]
    }

export default useAxios;
