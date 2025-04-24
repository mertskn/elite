import Link from 'next/link';
import React from 'react';

const SupportArea = () => {
   const supportData = [
      {
         id:1,
         icon_img:'assets/img/support/suport-1.png',
         title:'Müşteri Desteği'
      },
      {
         id:2,
         icon_img:'assets/img/support/suport-2.png',
         title:'Özelleştirme İhtiyacı'
      },
      {
         id:3,
         icon_img:'assets/img/support/suport-3.png',
         title:'Destek İçeriği'
      },
   ]
   return (
       <>
          <section className="support__area po-rel-z1 pt-100 pb-100">
             <div className="support__shape wow fadeInLeft" data-wow-delay=".9s">
                <img src="assets/img/bg/support-bg.png" alt=""/>
             </div>
             <div className="container">
                <div className="row">
                   <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3">
                      <div className="page__title-wrapper text-center mb-60">
                         <h2 className="page__title-2">Hoş Geldiniz! <br/>Nasıl yardımcı olabiliriz?</h2>
                         <p>Destek forumlarımız ve destek deneyiminizi iyileştirin.</p>
                      </div>
                   </div>
                </div>
                <div className="row">

                   {
                      supportData.map((support) => {
                         return  <div key={support.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="support__item mb-30 text-center white-bg transition-3  wow fadeInUp" data-wow-delay=".7s">
                               <div className="support__icon mb-30 d-flex justify-content-center align-items-end">
                                  <img src={support.icon_img} alt=""/>
                               </div>
                               <div className="support__content">
                                  <h3 className="support__title">{support.title}</h3>
                                  <p>Oxford harika Harry beş parasız kalmak arkadaşım bir fincan çay senin sıran.</p>
                                  <Link href="/contact"><a className="m-btn m-btn-border m-btn-border-3">Destek Talebi Gönder</a></Link>
                               </div>
                            </div>
                         </div>
                      })
                   }

                </div>
                <div className="row">
                   <div className="col-xxl-12">
                      <div className="support__thumb text-center mt-40">
                         <a href="#">
                            <img src="assets/img/support/profile/s-p-1.jpg" alt=""/>
                            <img src="assets/img/support/profile/s-p-2.jpg" alt=""/>
                            <img src="assets/img/support/profile/s-p-3.jpg" alt=""/>
                            <img src="assets/img/support/profile/s-p-4.jpg" alt=""/>
                         </a>
                         <p>Doğrudan bizimle iletişime geçin: <a href="mailto:destek@markit.com.tr">destek@markit.com.tr</a> </p>
                      </div>
                   </div>
                </div>
             </div>
          </section>
       </>
   );
};

export default SupportArea;