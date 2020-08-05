import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars2.githubusercontent.com/u/35854466?s=460&u=4694b2ee016f40eff0bd4fb874ed828dfc3de8c6&v=4"
                    alt="Walyson Felipe"
                />
                <div>
                    <strong>Walyson Felipe</strong>
                    <span>Biologia</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /><br />
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 70,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="Whats App"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;