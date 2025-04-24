import React from 'react';

const ContactArea = () => {
   return (
       <>
          <section className="contact__area pt-105 pb-145">
             <div className="contact__shape">
                <img className="man-1" src="assets/img/icon/sign/man-1.png" alt=""/>
                <img className="circle" src="assets/img/icon/sign/circle.png" alt=""/>
                <img className="zigzag" src="assets/img/icon/sign/zigzag.png" alt=""/>
                <img className="dot" src="assets/img/icon/sign/dot.png" alt=""/>
                <img className="bg" src="assets/img/icon/sign/sign-up.png" alt=""/>
             </div>
             <div className="container">
                <div className="row">
                   <div className="col-xxl-12">
                      <div className="page__title-wrapper mb-55">
                         <h2 className="page__title-2">Bize Bir Mesaj Bırakın.</h2>
                         <p>Hoş beş bir şeyler geveliyordu ama sonra her şey karıştı, o yüzden şerefe dedim.</p>
                      </div>
                   </div>
                </div>
                <div className="row">
                   <div className="col-xxl-7 col-xl-7">
                      <div className="contact__wrapper  white-bg">
                         <div className="contact__form">
                            <form >
                               <div className="row">
                                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                     <div className="contact__input-wrapper mb-25">
                                        <h5>Ad Soyad</h5>
                                        <div className="contact__input">
                                           <input required type="text" placeholder="Adınız Soyadınız" name="name"/>
                                           <i className="fal fa-user"></i>
                                        </div>
                                     </div>
                                  </div>
                                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                     <div className="contact__input-wrapper mb-25">
                                        <h5>İş e-postası</h5>
                                        <div className="contact__input">
                                           <input required type="text" placeholder="e-posta adresi" name="email"/>
                                           <i className="fal fa-envelope"></i>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                               <div className="row">
                                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                     <div className="contact__input-wrapper mb-25">
                                        <h5>Şirket Adı</h5>
                                        <div className="contact__input">
                                           <input required type="text" placeholder="Şirket Adı" name="subject"/>
                                           <i className="fal fa-smile"></i>
                                        </div>
                                     </div>
                                  </div>
                                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                     <div className="contact__input-wrapper mb-25">
                                        <h5>Web Sitesi</h5>
                                        <div className="contact__input">
                                           <input required type="text" placeholder="Web Sitesi" name="website"/>
                                           <i className="fal fa-globe"></i>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                               <div className="row">
                                  <div className="col-xxl-12">
                                     <div className="contact__input-wrapper mb-25">
                                        <h5>Mesaj</h5>
                                        <div className="contact__input textarea">
                                           <textarea required placeholder="Projeniz hakkında bize biraz bilgi verin" name="message"></textarea>
                                           <i className="fal fa-comment"></i>
                                        </div>
                                     </div>
                                  </div>
                               </div>
                               <div className="row">
                                  <div className="col-xxl-12">
                                     <button type="submit" className="m-btn m-btn-4"> <span></span> Gönder </button>
                                  </div>
                               </div>
                            </form>
                         </div>
                      </div>
                   </div>
                   <div className="col-xxl-5 col-xl-5">
                      <div className="contact__map">
                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11924.145789335824!2d26.515132319508034!3d41.6549545226804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b325e7d7a94a1b%3A0xa7af9e8b032f2bd2!2sKaraa%C4%9Fa%C3%A7%2C%2022100%20Edirne%20Merkez%2FEdirne!5e0!3m2!1str!2str!4v1745529474289!5m2!1str!2str"></iframe>
                      </div>
                   </div>
                </div>
             </div>
          </section>
       </>
   );
};

export default ContactArea;