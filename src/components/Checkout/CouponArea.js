import React, { useState } from 'react';

const CouponArea = () => {
   const [checkoutLogin,setCheckoutLogin] = useState(false);
   const [checkoutCoupon,setCheckoutCoupon] = useState(false);
   return (
       <>
          <section className="coupon-area pb-30">
             <div className="container">
                <div className="row">
                   <div className="col-md-6">
                      <div className="coupon-accordion">
                         {/* */}
                         <h3>Zaten müşteriyim? <span onClick={()=> setCheckoutLogin(!checkoutLogin)} id="showlogin">
                           Giriş yapmak için tıklayın</span></h3>
                         {checkoutLogin && <div id="checkout-login" className="coupon-content">
                            <div className="coupon-info">
                               <p className="coupon-text">Daha önce sitemize kayıt olduysanız, lütfen bilgilerinizi girerek giriş yapın.</p>
                               <form action="#">
                                  <p className="form-row-first">
                                     <label>Kullanıcı adı veya e-posta <span className="required">*</span></label>
                                     <input type="text" />
                                  </p>
                                  <p className="form-row-last">
                                     <label>Şifre <span className="required">*</span></label>
                                     <input type="password" />
                                  </p>
                                  <p className="form-row">
                                     <button className="m-btn m-btn-border-2 cta__btn active" type="submit">Giriş</button>
                                     <label>
                                        <input className='me-1' type="checkbox" />
                                        Beni hatırla
                                     </label>
                                  </p>
                                  <p className="lost-password">
                                     <a href="#">Şifreni mi unuttun?</a>
                                  </p>
                               </form>
                            </div>
                         </div>}
                         {/* */}
                      </div>
                   </div>
                   <div className="col-md-6">
                      <div className="coupon-accordion">
                         {/* */}
                         <h3>Kuponunuz var mı? <span onClick={()=> setCheckoutCoupon(!checkoutCoupon)} id="showcoupon">
                           Kodu girmek için tıklayın</span></h3>
                         {checkoutCoupon && <div className="coupon-checkout-content">
                            <div className="coupon-info">
                               <form action="#">
                                  <p className="checkout-coupon">
                                     <input type="text" placeholder="Kupon Kodu" />
                                     <button className="m-btn m-btn-border-2 cta__btn active" type="submit">Kuponu Uygula</button>
                                  </p>
                               </form>
                            </div>
                         </div>}
                         {/* */}
                      </div>
                   </div>
                </div>
             </div>
          </section>
       </>
   );
};

export default CouponArea;