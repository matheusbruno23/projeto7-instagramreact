import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function Sidebar(){
    return (
        <div class="sidebar">
            <Usuario nome={'nomegenerico'} fotoperfil={'https://i.pinimg.com/474x/d9/4d/0e/d94d0e51ec2d07577eb64d1f1fb70b4c.jpg'}/>

            <Sugestoes />

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}