import Story from "./Story";
import Storie from "./Story";


export default function Stories(){


  const listaStories = [ 
    {nome:'9gag' , imagemStorie: "assets/img/9gag.svg"},
    {nome:'meowed' , imagemStorie: "assets/img/meowed.svg"},
    {nome:'barked' , imagemStorie: "assets/img/barked.svg"},
    {nome:'nathanwpylestrangeplanet' , imagemStorie:"assets/img/nathanwpylestrangeplanet.svg" },
    {nome:'wawawicomics' , imagemStorie: "assets/img/wawawicomics.svg" },
    {nome:'respondeai' , imagemStorie: "assets/img/respondeai.svg"},
    {nome:'filomoderna' , imagemStorie: "assets/img/filomoderna.svg"},
    {nome:'memeriagourmet' , imagemStorie: "assets/img/memeriagourmet.svg"}
];


    return (
        <div class="stories">
          {listaStories.map((sto) => <Story nomeStorie={sto.nome} imgStorie={sto.imagemStorie}/>)}
          
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    )
}