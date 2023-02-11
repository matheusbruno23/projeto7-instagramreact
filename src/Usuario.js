import React from 'react'
export default function Usuario(){
  const [nome , setNome] = React.useState('nomegenerico');
  const [foto , setFoto] = React.useState('https://i.pinimg.com/474x/d9/4d/0e/d94d0e51ec2d07577eb64d1f1fb70b4c.jpg')
  function mudarNome(){
    const novoNome = prompt('Digite seu novo nome de usuario:')
    setNome(novoNome);
    if (novoNome === null || novoNome === undefined||novoNome === ''){
      alert('Nome invalido , resetaremos seu nome de usuário, digíte um nome válido:')
      setNome('nomegenerico');
    }
  }

  function mudarFoto(){
    const novaFoto = prompt('Insira a nova foto');
    setFoto(novaFoto);
    if(novaFoto === null || novaFoto === undefined|| novaFoto === ''){
      alert('Foto invádila , resetaremos sua foto de perfil, digíte um link válido:')
      setFoto('https://i.pinimg.com/474x/d9/4d/0e/d94d0e51ec2d07577eb64d1f1fb70b4c.jpg')
    }
  }


    return (
        <div data-test="name" class="usuario">
        <img data-test="profile-image" onClick={mudarFoto} src={foto} alt="URL Imagem Inválido"/>
        <div class="texto">
          <span>
            <strong>{nome}</strong>
            <ion-icon data-test="edit-name" name="pencil" onClick={mudarNome} ></ion-icon>
          </span>
        </div>
      </div>
    )
}