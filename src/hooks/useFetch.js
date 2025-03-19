import { useState, useRef, useEffect } from "react";

const useFetch = ({url}) => {
    const isMounted = useRef()
    const [data, setData] = useState()
    const [error, setError] = useState({status: false, message: undefined})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        isMounted.current = true
        const fetchData = async () => {
            try{
                const response = await fetch(url)
                if(response.ok){
                    const dataResponse = await response.json()
                    if(isMounted.current){
                        setData(dataResponse)
                    }
                }else{
                    throw new Error("Code API: " + response.status)
                }
            }catch(err){
                if(isMounted.current){
                    setError({
                        status: true,
                        message: err
                    })
                }
            }finally{
                if(isMounted.current){
                    setLoading(false)
                }
            }
        }

        fetchData()
        return () => {isMounted.current = false}
    }, [url])

    return {data, loading, error}
}

export default useFetch