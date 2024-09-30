import avatarImage from '../../public/img/avatar_6_png.png';
import { useTranslation } from 'react-i18next';

const Parallax = ({ t }) => {
    
    return (
        <>
            <div className="perspective">
                <div className="parallax_card">
                    <div className="parallax_text_main">
                        <h1 className="parallax_title">{t('presentation.card_title')}</ h1>
                        <div className='parallax_text_contain'>
                            <br></br>
                            <div>{t('presentation.card_text_1')}
                                <br />
                                <br />
                                {t('presentation.card_text_2')}
                                <br />
                                <small>{t('presentation.card_text_3')}</small>
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