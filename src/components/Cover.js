import './Cover.css'
import coverPicture from './cover.png'


export default function Cover(){

    return(
        <div>
<img className={"cover-picture"} src={coverPicture} alt="cover" />
        </div>
    )
};