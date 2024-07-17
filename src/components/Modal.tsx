import { FC } from 'react'
import tg from '../assets/images/tgIldar.jpg'
import './Modal.scss'

interface IModal {
  close: () => void
}

const Modal:FC<IModal> = ({close}) => {

  return (
    <>
        <div className="modal">
            <div className="modal__block">
                <img className='img__tg' src={tg} alt="" />
                <button onClick={close} className='button__close'>Закрыть окно</button>
            </div>
        </div>
    </>
  )
}

export default Modal