import React from 'react';

const AboutArea = () => {
   return (
       <>
          <section className="about__area pt-100">
             <div className="container">
                <div className="row">
                   <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1">
                      <div className="about__wrapper">
                         <span className="about__sub-title">Markit Hakkında</span>
                         <h3 className="about__title">Herkesin web sitesi <br/> oluşturmasını sağlıyoruz.</h3>
                         <div className="about__thumb w-img wow fadeInUp" data-wow-delay=".3s">
                            <img src="assets/img/about/about-1.jpg" alt=""/>
                         </div>
                         <div className="about__count pt-50 pb-15 wow fadeInUp" data-wow-delay=".5s">
                            <div className="row">
                               <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                  <div className="about__count-item text-center launche mb-30">
                                     <p>KURULUŞ</p>
                                     <h4><span className="counter">2009</span></h4>
                                  </div>
                               </div>
                               <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                  <div className="about__count-item text-center community mb-30">
                                     <p>TOPLULUK</p>
                                     <h4><span className="counter">13,000</span>+</h4>
                                  </div>
                               </div>
                               <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                                  <div className="about__count-item text-center mission mb-30">
                                     <p>MİSYON İLERLEME</p>
                                     <h4><span className="counter">4.9</span>%</h4>
                                  </div>
                               </div>
                            </div>
                         </div>
                         <div className="about__content">
                            <p className="about__text">{`Saçmalık güzel olmuş bir fincan çay aldatmaca senin bisikletinde arkadaşım saçmalıklar Kraliçe'nin İngilizcesi her şey berbat oldu aptalca bir sürü eski saçmalık aklını kaçırmış agro istemiyorum hamile Üfleyici affedersiniz William biraz sersemlemiş serseri genç suçlu küçük haylaz affedersiniz baloncuk ve gıcırtı kek pişirmek bana ters davranmayın!`}</p>
                            <p className="about__sub-text">Çeşitli geçmişlere sahip mühendislerimiz, bu motorların sağladığı deneyimi tanımlamak, uygulamak ve geliştirmek için Automattic'teki diğer rollerle işbirliği yapmaktadır.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>
       </>
   );
};

export default AboutArea;