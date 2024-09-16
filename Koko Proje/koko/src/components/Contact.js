import React from 'react'
import BannerIletisimImage from '../assets/iletisim.jpeg'
import '../steyles/Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide'
      style={{backgroundImage : `url(${BannerIletisimImage})`}}></div>
      <div className='rightSide'>
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
          type='text'
          name='name'
          placeholder='Lütfen Adınızı ve Soyadınızı Giriniz...'/>
          <label>Email</label>
          <input
          type='email'
          name='email'
          placeholder='Lütfen Emailinizi Giriniz...'/>
          <label>Mesajınız</label>
          <textarea
          rows="6"
          name='message'
          placeholder='Lütfen Mesajınızı Giriniz...'/>
        </form>
      </div>
    </div>
  )
}
export default Contact;
  
