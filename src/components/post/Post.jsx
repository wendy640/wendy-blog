import React from 'react'
import './post.css'
export default function Post() {
	return (
		<div className="post">
			<img
				src="https://img.freepik.com/free-vector/african-forest-landscape-background_1308-54316.jpg?w=826&t=st=1678046743~exp=1678047343~hmac=81eff1988accd354511de4cbffcd22339fd2ba1e4bd0540d97531e7f6b94af6d"
				alt=""
				className="postImg"
			/>
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Music</span>
					<span className="postCat">Life</span>
				</div>
				<span className="postTitle">Lorem ipsum dolor sit amet</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
				officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
				fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
				atque, exercitationem quibusdam, reiciendis odio laboriosam?Lorem ipsum
				dolor sit amet, consectetur adipisicing elit. Assumenda officia
				architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat,
				reprehenderit praesentium blanditiis quos cupiditate ratione atque,
				exercitationem quibusdam, reiciendis odio laboriosam?Lorem ipsum dolor
				sit amet, consectetur adipisicing elit. Assumenda officia architecto
				deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit
				praesentium blanditiis quos cupiditate ratione atque, exercitationem
				quibusdam, reiciendis odio laboriosam?
			</p>
		</div>
	)
}
