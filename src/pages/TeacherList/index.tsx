import React from 'react'
import PageHeader from '../../components/PageHeader'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="weekday">Dia da semana</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="subject"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://pbs.twimg.com/profile_images/1265866955245879296/4GV8Guc__400x400.jpg" alt="Dyogho França"/>
                        <div>
                            <strong>Dyogho França</strong>
                            <span>Matemática</span>
                        </div>
                    </header>

                    <p>
                        blablabalablablablablablballablbalablablablblalablbalblblablalbalablbalballllll
                        <br /><br />
                        ablalbalbklabklabkablklabklabafsfasfafsfasfasafasf

                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                        
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default TeacherList;
