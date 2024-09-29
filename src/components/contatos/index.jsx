import { Link } from "react-router-dom"

import "./style.css"

export const Contatos = () => {
    return (
        <>
            <div className="containerContatos">
                <div>
                    <h1>Contatos</h1>
                    <span>Gostou do nosso espaço? Venha fazer o seu orçamento gratuiatamente!</span>
                </div>
                <div>
                    <table>
                        <li>E-mail: </li>
                        <li>Instagram: <Link href="https://www.instagram.com/reforcomenteliberta/"></Link>Reforço Mente Liberta</li>
                        <li>Contato 1: </li>
                        <li>Contato 2: </li>
                    </table>
                </div>
            </div>
        </>
    )
}