import Post from './Post'

export default function Posts(){

  const listaPost = [
    {nome:'meowed', imgPerfil:"assets/img/meowed.svg", imgPost:"assets/img/gato-telefone.svg" , likes:92 , curtiu:'respondeai' , curtiuImg:"assets/img/respondeai.svg"},
    {nome:'barked', imgPerfil:"assets/img/barked.svg", imgPost:"assets/img/dog.svg" , likes:2 , curtiu:'adorable_animals', curtiuImg:"assets/img/adorable_animals.svg"},
    {nome:'meoked', imgPerfil:"assets/img/barked.svg", imgPost:"assets/img/gato-telefone.svg" , likes:5558 , curtiu:'adorable_respondeai', curtiuImg:"assets/img/respondeai.svg"},
  ]


    return(
        <div class="posts">
          {listaPost.map((pst) => <Post imgPost={pst.imgPost} likes={pst.likes} nome={pst.nome} imgPerfil={pst.imgPerfil} curtiu={pst.curtiu} curtiuImg={pst.curtiuImg}/>)}
      </div>
    )
}