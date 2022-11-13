import { useParams } from "react-router-dom";

const DetailBog = () => {
    let { id } = useParams();
    return (
        <div>
            Detail Blogs {id}
        </div>
    )
}

export default DetailBog;