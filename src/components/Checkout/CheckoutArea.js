import React, { useState } from 'react';
import Order from './Order';
import Swal from 'sweetalert2';

const CheckoutArea = () => {
   const [createAccount,setCreateAccount] = useState(false);
   const [shipBox,setShipBox] = useState(false);

   const handleOrderSubmit = (e) => {
      e.preventDefault()
      // handle order
      Swal.fire({
         position: 'top-center',
         icon: 'success',
         title: 'Sipariş başarıyla verildi',
         showConfirmButton: false,
         timer: 1500
      })
   }
   return (
       <>
          <section className="checkout-area pb-100">
             <div className="container">
                <form onSubmit={handleOrderSubmit}>
                   <div className="row">
                      <div className="col-lg-6">
                         <div className="checkbox-form">
                            <h3>Fatura Detayları</h3>
                            <div className="row">
                               <div className="col-md-12">
                                  <div className="country-select">
                                     <label>Ülke <span className="required">*</span></label>
                                     <select required>
                                        <option value="turkey">Türkiye</option>
                                        <option value="germany">Almanya</option>
                                        <option value="france">Fransa</option>
                                        <option value="england">İngiltere</option>
                                     </select>
                                  </div>
                               </div>
                               <div className="col-md-6">
                                  <div className="checkout-form-list">
                                     <label>Ad <span className="required">*</span></label>
                                     <input required type="text" placeholder="" />
                                  </div>
                               </div>
                               <div className="col-md-6">
                                  <div className="checkout-form-list">
                                     <label>Soyad <span className="required">*</span></label>
                                     <input required type="text" placeholder="" />
                                  </div>
                               </div>
                               <div className="col-md-12">
                                  <div className="checkout-form-list">
                                     <label>Şirket Adı</label>
                                     <input type="text" placeholder="" />
                                  </div>
                               </div>
                               <div className="col-md-12">
                                  <div className="checkout-form-list">
                                     <label>Adres <span className="required">*</span></label>
                                     <input required type="text" placeholder="Cadde adresi" />
                                  </div>
                               </div>
                               <div className="col-md-12">
                                  <div className="checkout-form-list">
                                     <input type="text" placeholder="Apartman, daire, birim vb. (isteğe bağlı)" />
                                  </div>
                               </div>
                               <div className="col-md-12">
                                  <div className="checkout-form-list">
                                     <label>İlçe / Şehir <span className="required">*</span></label>
                                     <input required type="text" placeholder="İlçe / Şehir" />
                                  </div>
                               </div>
                               <div className="col-md-6">
                                  <div className="checkout-form-list">
                                     <label>İl <span className="required">*</span></label>
                                     <input required type="text" placeholder="" />
                                  </div>
                               </div>
                               <div className="col-md-6">
                                  <div className="checkout-form-list">
                                     <label>Posta Kodu <span className="required">*</span></label>
                                     <input required type="text" placeholder="Posta Kodu" />
                                  </div>
                               </div>
                               <div className="col-md-6">
                                  <div className="checkout-form-list">
                                     <label>E-posta Adresi <span className="required">*</span></label>
                                     <input required type="email" placeholder="" />
                                  </div>
                               </div>
                               <div className="col-md-6">
                                  <div className="checkout-form-list">
                                     <label>Telefon <span className="required">*</span></label>
                                     <input required type="text" placeholder="Telefon" />
                                  </div>
                               </div>
                               <div className="col-md-12">
                                  <div className="checkout-form-list create-acc">
                                     <input onClick={()=> setCreateAccount(!createAccount)} id="cbox" type="checkbox" />
                                     <label >Hesap oluştur?</label>
                                  </div>
                                  {createAccount && <div id="cbox_info" className="checkout-form-list">
                                     <p>Aşağıdaki bilgileri girerek bir hesap oluşturun. Zaten bir müşterimizseniz lütfen sayfanın üstünden giriş yapın.</p>
                                     <label>Hesap şifresi <span className="required">*</span></label>
                                     <input required type="password" placeholder="şifre" />
                                  </div>}
                               </div>
                            </div>
                            <div className="different-address">
                               <div className="ship-different-title">
                                  <h3>
                                     <label>Farklı bir adrese gönder?</label>
                                     <input onClick={()=> setShipBox(!shipBox)} id="ship-box" type="checkbox" />
                                  </h3>
                               </div>

                               {shipBox && <div >
                                  <div className="row">
                                     <div className="col-md-12">
                                        <div className="country-select">
                                           <label>Ülke <span className="required">*</span></label>
                                           <select required>
                                              <option value="turkey">Türkiye</option>
                                              <option value="germany">Almanya</option>
                                              <option value="france">Fransa</option>
                                              <option value="england">İngiltere</option>
                                           </select>
                                        </div>
                                     </div>
                                     <div className="col-md-6">
                                        <div className="checkout-form-list">
                                           <label>Ad <span className="required">*</span></label>
                                           <input required type="text" placeholder="" />
                                        </div>
                                     </div>
                                     <div className="col-md-6">
                                        <div className="checkout-form-list">
                                           <label>Soyad <span className="required">*</span></label>
                                           <input required type="text" placeholder="" />
                                        </div>
                                     </div>
                                     <div className="col-md-12">
                                        <div className="checkout-form-list">
                                           <label>Şirket Adı</label>
                                           <input type="text" placeholder="" />
                                        </div>
                                     </div>
                                     <div className="col-md-12">
                                        <div className="checkout-form-list">
                                           <label>Adres <span className="required">*</span></label>
                                           <input required type="text" placeholder="Cadde adresi" />
                                        </div>
                                     </div>
                                     <div className="col-md-12">
                                        <div className="checkout-form-list">
                                           <input type="text" placeholder="Apartman, daire, birim vb. (isteğe bağlı)" />
                                        </div>
                                     </div>
                                     <div className="col-md-12">
                                        <div className="checkout-form-list">
                                           <label>İlçe / Şehir <span className="required">*</span></label>
                                           <input required type="text" placeholder="İlçe / Şehir" />
                                        </div>
                                     </div>
                                     <div className="col-md-6">
                                        <div className="checkout-form-list">
                                           <label>İl <span className="required">*</span></label>
                                           <input required type="text" placeholder="" />
                                        </div>
                                     </div>
                                     <div className="col-md-6">
                                        <div className="checkout-form-list">
                                           <label>Posta Kodu <span className="required">*</span></label>
                                           <input required type="text" placeholder="Posta Kodu" />
                                        </div>
                                     </div>
                                     <div className="col-md-6">
                                        <div className="checkout-form-list">
                                           <label>E-posta Adresi <span className="required">*</span></label>
                                           <input type="email" placeholder="" />
                                        </div>
                                     </div>
                                     <div className="col-md-6">
                                        <div className="checkout-form-list">
                                           <label>Telefon <span className="required">*</span></label>
                                           <input required type="text" placeholder="Telefon" />
                                        </div>
                                     </div>
                                  </div>
                               </div>}
                               <div className="order-notes">
                                  <div className="checkout-form-list">
                                     <label>Sipariş Notları</label>
                                     <textarea id="checkout-mess" cols="30" rows="10" placeholder="Siparişinizle ilgili notlar, örn. teslimat için özel notlar."></textarea>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                      {/* order area start */}
                      <Order />
                      {/* order area end */}
                   </div>
                </form>
             </div>
          </section>
       </>
   );
};

export default CheckoutArea;