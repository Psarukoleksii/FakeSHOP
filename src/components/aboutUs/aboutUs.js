import React from 'react'
import './aboutUs.css'
import logo from  '../../service/cocker.jpg';
import logoSvjat from  '../../service/svjatFoto.jpg';
function AboutUs() {
    return (
        <div className={'containerResume'}>
            <div className={'row'}>
                <div className={'col-sm-6'} >
                    <div className={'resume'}>
                    <img src={logo} alt="Oleksii"/>
                    <h2>Oleksii Psaruk</h2>
                    <p><span>Expertise in:</span> React, Vue-JS, jQuery, Bootstrap, npm, yarn, git, HTML, CSS, SASS, Redux</p>
                        <div className={'icons'}>
                            <a href="https://www.linkedin.com/in/olesii-psaruk-52a682203/" target={'_blank'}><ion-icon name="logo-linkedin"></ion-icon></a>
                            <a href="https://github.com/Psarukoleksii?tab=repositories" target={'_blank'}><ion-icon name="logo-github"></ion-icon></a>
                            <a href="https://www.instagram.com/oleksiy_psaruk/" target={'_blank'}><ion-icon name="logo-instagram"></ion-icon></a>
                        </div>
                    </div>
                </div>
                <div className={'col-sm-6'}>
                    <div className={'resume'}>
                    <img src={logoSvjat} alt="Svjat"/>
                    <h2>Sviatoslav Bereziuk</h2>
                    <p><span>Expertise in:</span> JavaScript, HTML5/CSS3, TypeScript, LESS/SCSS/SASS, Node.js, Babel, Angular2+(RxJS, NgRx), Bootstrap, React(Redux, MobX), npm,yarn, Git, Figma</p>
                        <div className={'icons'}>
                            <a href="https://www.linkedin.com/in/sviat-lv-4a6682203/" target={'_blank'}><ion-icon name="logo-linkedin"></ion-icon></a>
                            <a href="https://github.com/svjatber" target={'_blank'}><ion-icon name="logo-github"></ion-icon></a>
                            <a href="/"><ion-icon name="logo-instagram" target={'_blank'}></ion-icon></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
