import React from 'react'
import './write.css'
export default function Write() {
  return (
		<div className="write">
			<img
				src="https://img.freepik.com/free-vector/african-forest-landscape-background_1308-54316.jpg?w=826&t=st=1678046743~exp=1678047343~hmac=81eff1988accd354511de4cbffcd22339fd2ba1e4bd0540d97531e7f6b94af6d"
				alt=""
				className="writeImg"
			/>
			<form className="writeForm">
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i className="writeIcon fas fa-plus"></i>
					</label>
					<input type="file" id="fileInput" style={{ display: 'none' }} />
					<input
						type="text"
						placeholder="Title"
						className="writeInput"
						autoFocus={true}
					/>
				</div>
				<div className="writeFormGroup">
					<textarea
						placeholder="Tell your story..."
						type="text"
						className="writeInput  writeText"
					></textarea>
				</div>
				<button className="writeSubmit">Publish</button>
			</form>
		</div>
	)
}
