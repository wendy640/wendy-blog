import React from 'react'
import'./singlePost.css'

export default function SinglePost() {
  return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					src="https://easydrawingguides.com/wp-content/uploads/2023/01/black-girl-cartoon-11_black-girl-cartoon-drawing-tutorial.png"
					alt=""
					className="singlePostImg"
				/>
				<h1 className="singlePostTitle">
					Lorem ipsum dolor sit amet.
					<div className="singlePostEdit">
						<i className="singlePostIcon far fa-edit"></i>
						<i className="singlePostIcon far fa-trash-alt"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author: <b>Chinwe</b>
					</span>
					<span className="singlePostDate"> 1 hour ago</span>
				</div>
				<p className="singlePostDesc">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
					officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
					fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
					atque, exercitationem quibusdam, reiciendis odio laboriosam?Lorem
					ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia
					architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat,
					reprehenderit praesentium blanditiis quos cupiditate ratione atque,
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
					officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
					fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
					atque, exercitationem quibusdam, reiciendis odio laboriosam?Lorem
					ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia
					architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat,
					reprehenderit praesentium blanditiis quos cupiditate ratione atque,
				</p>
			</div>
		</div>
	)
}
