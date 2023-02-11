import React, { useState } from 'react'

export default function Post(props){


    const [like, setLike] = React.useState('heart-outline');
    const [corLike, setCorLike] = React.useState('preto');
    const [salvar, setSalvar] = React.useState('bookmark-outline');
    const [numLikes, setNumLikes] = React.useState(props.likes)
    
    
    function botaoSalvar(){
    setSalvar('bookmark')
    if(salvar === 'bookmark'){
        setSalvar('bookmark-outline')
    }
    }

    function botaoLike(){
        setCorLike('vermelho')
        setLike('heart')
        setNumLikes(numLikes +1)
        if(corLike === 'vermelho' || like === 'heart' ){
            setCorLike('preto')
            setLike('heart-outline')
            setNumLikes(numLikes-1)
        }
    }

    return(
        <div data-test="post"class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.imgPerfil} alt={props.nome}/>
            {props.nome}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div  class="conteudo" >
          <img data-test="post-image" onClick={(corLike === 'preto') ? botaoLike : corLike ==='preto'}src={props.imgPost} alt={props.nome}/>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon data-test="like-post" onClick={botaoLike} class={corLike} name={like}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon data-test="save-post" onClick={botaoSalvar} name={salvar}></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.curtiuImg} alt="respondeai"/>
            <div class="texto">
              Curtido por <strong>{props.curtiu}</strong> e <strong data-test="likes-number">outras { numLikes} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
}