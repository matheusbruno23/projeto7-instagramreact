import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function Sidebar(){
    return (
        <div className="sidebar">
            <Usuario nome={'nomegenerico'} fotoperfil={'https://i.pinimg.com/474x/d9/4d/0e/d94d0e51ec2d07577eb64d1f1fb70b4c.jpg'}/>

            <Sugestoes />

        <div className="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div className="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}