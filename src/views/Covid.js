import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment'

const Covid = () => {

    const [dataCovid, setDataCovid] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(async () => {
        setTimeout(async () => {
            let res = await axios.get(`https://api.covid19api.com/country/vietnam?from=2022-10-12T00:00:00Z&to=2022-11-12T00:00:00Z`)
            let data = res && res.data ? res.data : []
            if (data && data.length > 0) {
                data.map(item => {
                    item.Date = moment(item.Date).format('DD/MM/YYYY')
                    return item;
                })
                data = data.reverse();
            }
            setDataCovid(data)
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <table>
            {console.log('check data Covid : ', dataCovid)}
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </tr>
            </thead>
            <tbody>
                {loading === false && dataCovid && dataCovid.length > 0 &&
                    dataCovid.map(item => {
                        return (
                            <tr key={item.ID}>
                                <td>{item.Date}</td>
                                <td>{item.ID}</td>
                                <td>{item.Confirmed}</td>
                                <td>{item.Deaths}</td>
                                <td>{item.Recovered}</td>
                            </tr>
                        )
                    })
                }
                {loading === true
                    &&
                    <tr>
                        <td colSpan='5' style={{ 'textAlign': 'center' }}>Loading...</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}

export default Covid;