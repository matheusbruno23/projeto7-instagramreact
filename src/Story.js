export default function Story(props){
    console.log(props)
    return (
            <div class="story">
                <div class="imagem">
                    <img src={props.imgStorie} alt={props.nomeStorie}/>
                </div>
                    <div class="usuario">{props.nomeStorie}</div>
            </div>

    )

}