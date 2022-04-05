import { Link } from "react-router-dom"

export default function SingleItem({info}){
	return(
		<Link to={`/singlepage/${info.id}`}>
			<div className="item">
				<img alt="img jeans" src={info.img}></img>
				<span>{info.description}</span>
				<span className="price">&#163;{info.price}</span>
			</div>
		</Link>
	)
}