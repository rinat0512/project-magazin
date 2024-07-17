import './Footer.scss'
import tgLogo from '../../assets/images/tg.png'
import { FC } from 'react'

interface IFooter {
  onClick: () => void
}


const Footer:FC<IFooter> = ({ onClick }) => {
  return (
    <>
      <div className="section__top">
        <div className="container">
          <div className="section__info">
            <h2 className='number'>Номер по которому вы можете с нами связаться:</h2>
            <ul><a href="tel: +99888 188 87 84" className="number"> +99888 188 87 84</a></ul>
            <img onClick={onClick} className='logo__img' src={tgLogo} alt="" />
            <p className='numder__info'>Для перехода на теллеграм аккаунт нажмите на икконку!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer