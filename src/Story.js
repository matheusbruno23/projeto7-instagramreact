export default function Story(props){
    return (
            <div className="story">
                <div className="imagem">
                    <img src={props.imgStorie} alt={props.nomeStorie}/>
                </div>
                    <div className="usuario">{props.nomeStorie}</div>
            </div>

    )

}