import React from 'react';

const HeroArea = () => {
   return (
       <>
          <section className="hero__area hero__height grey-bg-3 d-flex align-items-center">
             <div className="hero__shape">
                <img className="circle" src="assets/img/icon/hero/hero-circle.png" alt="yuvarlak"/>
                <img className="circle-2" src="assets/img/icon/hero/hero-circle-2.png" alt="yuvarlak-2"/>
                <img className="square" src="assets/img/icon/hero/hero-square.png" alt="kare"/>
                <img className="square-2" src="assets/img/icon/hero/hero-square-2.png" alt="kare-2"/>
                <img className="dot" src="assets/img/icon/hero/hero-dot.png" alt="nokta"/>
                <img className="triangle" src="assets/img/icon/hero/hero-triangle.png" alt="üçgen"/>
             </div>
             <div className="container">
                <div className="row">
                   <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-8">
                      <div className="hero__content">
                         <h2 className="hero__title">
                            <span>Dünyanın en büyük</span> <br/>
                            WordPress Tema Koleksiyonu.
                         </h2>

                         <div className="hero__search">
                            <form action="#">
                               <div className="hero__search-inner d-xl-flex">
                                  <div className="hero__search-input">
                                     <span><i className="far fa-search"></i></span>
                                     <input type="text" placeholder="Şablon ara"/>
                                  </div>
                                  <button type="submit" className="m-btn ml-20"> <span></span> ara</button>
                               </div>
                            </form>
                         </div>
                      </div>
                   </div>
                   <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div className="hero__thumb-wrapper scene ml-70 p-relative">
                         <div className="hero__thumb one d-none d-lg-block">
                            <img className="layer" data-depth="0.2" src="assets/img/hero/hero-1.jpg" alt="kahraman-1"/>
                         </div>
                         <div className="hero__thumb two d-none d-md-block">
                            <img className="layer" data-depth="0.3" src="assets/img/hero/hero-2.jpg" alt="kahraman-2"/>
                         </div>
                         <div className="hero__thumb three d-none d-md-block">
                            <img className="layer" data-depth="0.4" src="assets/img/hero/hero-3.jpg" alt="kahraman-3"/>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>
       </>
   );
};

export default HeroArea;