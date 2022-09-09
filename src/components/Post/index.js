

const Post = () =>{
    return(
        <div className="post mx-2">
        <div className="img-post"></div>
        <h5>Tecnologia</h5>
        <h3>O guia definitivo do Blog</h3>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto nihil voluptates dolorem quidem perferendis eveniet corrupti exercitationem, animi quisquam molestias temporibus quae cum delectus esse nam, nostrum, blanditiis ipsa a.
        </p>
        <div className="flex pt-2 ">
        <div className="img-profile"></div>
        <div className="desc-profile ml-2">
            <h6 className="color-blue">Levi Rodrigues</h6>
            <p>
                Aug 2, 2022 - 8 min read
            </p>
        </div>
        </div>
        </div>
    )
}

export default Post;