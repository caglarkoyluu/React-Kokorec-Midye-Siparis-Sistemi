import React from 'react';
import BannerImage from '../assets/kokobaner.jpg';
import '../steyles/About.css'
 const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop'
      style={{backgroundImage : `url(${BannerImage})`}}></div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Merhaba! Kokoreç ve Midye denilince akla gelen ilk adres olarak sizlere hizmet vermekten gurur duyuyoruz. Yılların deneyimi ve tutkusuyla, en taze ve lezzetli malzemeleri bir araya getirerek, damak zevkinize hitap eden eşsiz tatlar sunuyoruz.

Bizim için her şey müşteri memnuniyeti ile başlar. Ustalarımız, kokoreç ve midye yapımında geleneksel yöntemleri modern dokunuşlarla buluşturarak, her lokmada unutulmaz bir lezzet deneyimi yaşatmayı hedefliyor. Kaliteye verdiğimiz önem ve hijyen standartlarımız, siz değerli müşterilerimizin sağlığı ve memnuniyeti için en üst düzeydedir.

Misyonumuz, Türk mutfağının vazgeçilmez lezzetlerini sizlere en iyi şekilde sunmak ve her ziyaretinizde sizlere aile sıcaklığında bir ortamda hizmet etmektir. Kokoreç ve midyeyi sadece bir yemek değil, bir kültür olarak görüyor ve bu kültürü yaşatmak için çalışıyoruz.

Bizi tercih ettiğiniz için teşekkür ederiz. Sizleri aramızda görmekten mutluluk duyarız!

</p>
      </div>
    </div>
  )
}
export default About;
  
