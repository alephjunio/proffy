import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/15731508?s=400&u=8065c7f3fa48ec8171eda9e5b4162b9f47df16bb&v=4" alt="Aleph Junio " />
                <div>
                    <strong>Aleph Junio</strong>
                    <span>Programação WEB</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit libero, mus a metus felis sodales aenean lacus habitant,.
                        <br /> <br />
                        Porttitor suspendisse primis suscipit malesuada dignissim nullam vestibulum gravida eleifend, mattis feugiat porta elementum.
                    </p>
            <footer>
                <p>
                    Preço/Hora
                            <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="Entrar em contato." /> Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;