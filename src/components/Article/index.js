import Post from '../Post'


const Article = () =>{
    return(
        <section className='container'>
            <h3>Article</h3>
            <div className='mt-5 container-posts'>
            <Post subtitle ='tecnologia' tilte="O guia definitivo sobre o blog"></Post>
            <Post subtitle ='fotografia' tilte="Quais melhores câmeras em 2022?"></Post>
            <Post subtitle ='futebol' tilte="Os melhores jogadores do mundo"></Post>
            </div>
        </section>
    )
}

export default Article;