import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
import './Blogs.scss'

const DetailBog = () => {
    let { id } = useParams();
    let history = useHistory();


    const { data: dataBlogDetail, isLoading, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false)


    const handleBackData = () => {
        history.push('/blog')
    }

    return (
        <div>
            <>

                <div><span onClick={handleBackData} style={{ cursor: 'pointer' }}>&lt; --Back</span></div>
                <div className="blog-detail">
                    {dataBlogDetail &&
                        <>
                            <div className="title">
                                Blog ID : {id} --- {isLoading === true ? 'Loading data ...' : dataBlogDetail.title}
                            </div>

                            <div className="content">
                                {dataBlogDetail.body}
                            </div>
                        </>
                    }
                </div>
            </>
        </div>
    )
}

export default DetailBog;