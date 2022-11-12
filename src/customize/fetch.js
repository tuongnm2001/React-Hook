import { useEffect, useState } from "react"
import axios from "axios";
import moment from 'moment'

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsErorr] = useState(false)

    useEffect(() => {

        const ourRequest = axios.CancelToken.source()

        try {
            async function fetchData() {
                try {
                    let res = await axios.get(url, {
                        cancelToken: ourRequest.token
                    })

                    let data = res && res.data ? res.data : []
                    if (data && data.length > 0) {
                        data.map(item => {
                            item.Date = moment(item.Date).format('DD/MM/YYYY')
                            return item;
                        })
                        data = data.reverse();
                    }
                    setData(data)
                    setIsLoading(false)
                    setIsErorr(false)
                } catch (err) {
                    console.log(err)
                    if (axios.isCancel(err)) {
                        console.log('Required canceled ', err.massage);
                    } else {
                        setIsErorr(true)
                        setIsLoading(false)
                    }
                }
            }
            setTimeout(() => {
                fetchData();
            }, 3000)

        } catch (e) {
            setIsErorr(true)
            setIsLoading(false)
        }
        return () => {
            ourRequest.cancel('Operation canceled by the user');
        }
    }, [url]);

    return {
        data, isLoading, isError
    }
}

export default useFetch;