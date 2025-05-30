import Link from 'next/link';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";

const LoginArea = () => {
   const {handleGoogleSignIn,loginUser,passwordResetEmail} = useAuth();
   const [email,setEmail] = useState('')

   const { register, handleSubmit,reset } = useForm();
   const onSubmit = data => {
      loginUser(data.email,data.password,reset)
   }
   // handleForgotPassword
   const handleForgotPassword = () => {
      passwordResetEmail(email)
   }
   return (
     <>
       <section className="signup__area po-rel-z1 pt-100 pb-145">
         <div className="sign__shape">
           <img className="man-1" src="assets/img/icon/sign/man-1.png" alt="" />
           <img className="man-2" src="assets/img/icon/sign/man-2.png" alt="" />
           <img
             className="circle"
             src="assets/img/icon/sign/circle.png"
             alt=""
           />
           <img
             className="zigzag"
             src="assets/img/icon/sign/zigzag.png"
             alt=""
           />
           <img className="dot" src="assets/img/icon/sign/dot.png" alt="" />
           <img className="bg" src="assets/img/icon/sign/sign-up.png" alt="" />
         </div>
         <div className="container">
           <div className="row">
             <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
               <div className="page__title-wrapper text-center mb-55">
                 <h2 className="page__title-2">
                   Oturum aç <br />
                 </h2>
                 <p>
                   hesabınız yoksa olabilirsiniz!{" "}
                   <a href="sign-up"> buradan kayıt !</a>
                 </p>
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
               <div className="sign__wrapper white-bg">
                 <div className="sign__header mb-35">
                   <div
                     onClick={handleGoogleSignIn}
                     className="sign__in text-center"
                   >
                     <a
                       href="#"
                       className="sign__social g-plus text-start mb-15"
                     >
                       <i className="fab fa-google-plus-g"></i>Google ile giriş yap
                     </a>
                     <p>
                       {" "}
                       <span>........</span> Veya,{" "}
                       <Link href="/sign-up">
                         <a>E posta</a>
                       </Link>{" "}
                       ile kayıt olun<span> ........</span>{" "}
                     </p>
                   </div>
                 </div>
                 <div className="sign__form">
                   <form onSubmit={handleSubmit(onSubmit)}>
                     <div className="sign__input-wrapper mb-25">
                       <h5>E-posta</h5>
                       <div className="sign__input">
                         <input
                           required
                           {...register("email")}
                           onChange={(e) => setEmail(e.target.value)}
                           type="email"
                           placeholder="example@example.com"
                         />
                         <i className="fal fa-envelope"></i>
                       </div>
                     </div>
                     <div className="sign__input-wrapper mb-10">
                       <h5>Şifre</h5>
                       <div className="sign__input">
                         <input
                           required
                           {...register("password")}
                           type="password"
                           placeholder="*********"
                         />
                         <i className="fal fa-lock"></i>
                       </div>
                     </div>
                     <div className="sign__action d-sm-flex justify-content-between mb-30">
                       <div className="sign__agree d-flex align-items-center">
                         <input
                           required
                           className="m-check-input"
                           type="checkbox"
                           id="m-agree"
                         />
                         <label className="m-check-label" htmlFor="m-agree">
                           Beni hatırla
                         </label>
                       </div>
                       <div className="sign__forgot">
                         <button
                           style={{
                             cursor: "pointer",
                             background: "transparent",
                           }}
                           onClick={handleForgotPassword}
                         >
                           Şifrenimi Unuttun?
                         </button>
                       </div>
                     </div>
                     <button type="submit" className="m-btn m-btn-4 w-100">
                       {" "}
                       <span></span> Giriş Yap
                     </button>
                     <div className="sign__new text-center mt-20">
                       <p>
                         Elite Bilişimde yenimisin ?{" "}
                         <Link href="/sign-up">
                           <a>Kayıt ol</a>
                         </Link>
                       </p>
                     </div>
                   </form>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
     </>
   );
};

export default LoginArea;