import Sugestao from "./Sugestao";

export default function Sugestoes(){

      const listaSugestoes = [
      {nome: 'bad.vibes.memes' , texto: 'Novo no Instagram' ,imagem:"assets/img/bad.vibes.memes.svg" },
      {nome: 'chibirdart<' , texto: 'Segue você' ,imagem:"assets/img/chibirdart.svg"},
      {nome: 'razoesparaacreditar' , texto: 'Segue você' ,imagem:"assets/img/razoesparaacreditar.svg"},
      {nome: 'adorable_animals' , texto: 'Novo no Instagram' ,imagem:"assets/img/adorable_animals.svg"},
      {nome: 'smallcutecats' , texto: 'Segue você' ,imagem:"assets/img/smallcutecats.svg"}
    ]



    return (
        <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
          
        </div>
      {listaSugestoes.map((sug)=> <Sugestao key={sug.nome} nome={sug.nome} imagem={sug.imagem} texto={sug.texto}/>)}
      </div>
    )
}