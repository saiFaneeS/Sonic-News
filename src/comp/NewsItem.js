import React from "react";

export const NewsItem = ({ title, description, imgUrl, newsUrl, author, date, source }) => {

		return (
			<div className="card" style={{ borderRadius:'0px' }}>
				{imgUrl ? <img src={imgUrl} className="card-img-top" style={{ borderRadius:'0px' }} alt="..." /> : ""}

				<p className="bg-primary text-white py-1 px-3">{source}</p>

				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					<p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).getDate()}/{new Date(date).getMonth()}/{new Date(date).getFullYear()}</small></p>
					<a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm" style={{ borderRadius: "0px", border: '1px solid #222' }}>Read More</a>
				</div>

			</div>
		)
	}