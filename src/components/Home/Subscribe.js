import React from 'react';

const Subscribe = () => {
   return (
       <>
          <section className="subscribe__area p-relative pt-100 pb-110" style={{background:`url(assets/img/bg/subscribe-bg.jpg)`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
             <div className="subscribe__icon">
                <img className="ps" src="assets/img/icon/subscribe/ps.png" alt="" />
                <img className="wp" src="assets/img/icon/subscribe/wp.png" alt="" />
                <img className="html" src="assets/img/icon/subscribe/html.png" alt="" />
                <img className="f" src="assets/img/icon/subscribe/f.png" alt="" />
                <img className="man" src="assets/img/icon/subscribe/man.png" alt="" />
             </div>
             <div className="container">
                <div className="row">
                   <div className="col-xxl-12">
                      <div className="subscribe__content text-center wow fadeInUp" data-wow-delay=".5s">
                         <h3 className="subscribe__title">Bir projeniz mi var? <br /> Hemen web sitenizi oluşturun.</h3>
                         <p>Herhangi bir ürünümüzü ÜCRETSİZ deneyin!</p>
                         <div className="subscribe__form wow fadeInUp" data-wow-delay=".7s">
                            <form action="#">
                               <input type="email" placeholder="E-posta Adresiniz" />
                               <button type="submit" className="m-btn m-btn-black"><span></span> abone ol </button>
                            </form>
                            <p>Markit topluluğumuzdaki 20.000'den fazla içerik üreticisine katılın.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>
       </>
   );
};

export default Subscribe;