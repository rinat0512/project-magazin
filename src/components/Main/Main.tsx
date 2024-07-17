import "./Main.scss"
import img from '../../assets/images/img.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.jpg'
import img7 from '../../assets/images/img7.jpg'
import img8 from '../../assets/images/img8.jpg'
import Modal from "../Modal"
import Footer from "../Footer/Footer"
import { useState } from "react"




const Main = () => {


  const [close, setClose] = useState(false)

  const openModal = () => {
    setClose(true)
  } 

  const closeModal = () => {
    setClose(false)
  } 

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="section__block">
            <img className="img" src={img} alt="" />
            <img className="img" src={img2} alt="" />
            <img className="img" src={img3} alt="" />
            <img className="img" src={img4} alt="" />
            <img className="img" src={img5} alt="" />
            <img className="img" src={img6} alt="" />
            <img className="img" src={img7} alt="" />
            <img className="img" src={img8} alt="" />
          </div>
          <h2 className="section__text">Ковка решеток,перил, ограждений,навесов,под заказ.</h2>
        </div>n
        <Footer onClick={openModal}/>
        { close && <Modal close={closeModal}/>}
      </div>
    </>
  )
}

export default Main