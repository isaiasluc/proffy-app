import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/9330569?s=460&u=7a1b45266fb8b2c8cb7207c324de2fa1b15362dd&v=4" alt="Github" />
                <div>
                    <strong>Isaias Lucena</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
                estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro.
                <br /><br />
                Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. 
                Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente 
                com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;