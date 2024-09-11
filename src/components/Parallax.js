import avatarImage from '../../public/img/avatar_6_png.png';

const Parallax = () => {
    
    return (
        <>
            <div className="perspective">
                <div className="parallax_card">
                    <div className="parallax_text_main">
                        <h1 className="parallax_title">¡Hola! Soy Lionel, </ h1>
                        <div className='parallax_text_contain'>
                            <br></br>
                            <div>Comencé a programar en 2019 de manera autodidacta, antes de estudiar en la UNICEN de Tandil. 
                                <br />
                                <br />
                                Tengo experiencia en el desarrollo de sistemas, tanto en front-end como en back-end.
                                <br />
                                <small>Desliza el contenido para descubrir más sobre mis habilidades y experiencia.</small>
                            </div>
                        </div>
                    </div> 
                    <div className="parallax_img"></div>
                </div>
            </div>
        </>
    );
};

export default Parallax;