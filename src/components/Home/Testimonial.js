import Slider from "react-slick";

const Testimonial = () => {
	const testimonialData = [
		{
			id:1,
			img:'assets/img/testimonial/testi-1.jpg',
			name:'Ayşe Kaya',
			title:'@ayse_kaya',
			desc:'Bu temayı kullanmaya başladığımdan beri web sitemin trafiği önemli ölçüde arttı. Kullanımı çok kolay ve destek ekibi inanılmaz yardımcı oluyor.'
		},
		{
			id:2,
			img:'assets/img/testimonial/testi-2.jpg',
			name:'Mehmet Demir',
			title:'@mehmet_demir',
			desc:'Şirketim için birden fazla web sitesi oluşturdum ve bu tema her projede işimi kolaylaştırdı. Esnek yapısı ve modern tasarımı sayesinde her zaman profesyonel sonuçlar elde ettim.'
		},
		{
			id:3,
			img:'assets/img/testimonial/testi-3.jpg',
			name:'Zeynep Yılmaz',
			title:'@zeynepp',
			desc:'Müşteri hizmetleri gerçekten harika! Karşılaştığım her sorunda hızlı ve etkili çözümler sundular. Ayrıca temanın sürekli güncellenmesi de çok güven verici.'
		},
		{
			id:4,
			img:'assets/img/testimonial/testi-4.jpg',
			name:'Ali Can',
			title:'@alicannn',
			desc:'E-ticaret sitem için aradığım tüm özellikler bu temada mevcut. Ürün listeleme, ödeme seçenekleri ve kullanıcı yönetimi sorunsuz çalışıyor. Kesinlikle tavsiye ederim.'
		},
		{
			id:5,
			img:'assets/img/testimonial/testi-2.jpg',
			name:'Elif Şen',
			title:'@elif_sen',
			desc:'Blog yazarları için mükemmel bir tema. Yazılarımı ön plana çıkaran şık bir tasarıma sahip ve SEO uyumluluğu da oldukça iyi.'
		},
		{
			id:6,
			img:'assets/img/testimonial/testi-3.jpg',
			name:'Burak Öztürk',
			title:'@burakozturk',
			desc:'Bu temayı kullanarak portfolyo sitemi kolayca oluşturdum. Çalışmalarımı etkileyici bir şekilde sergilememi sağladı. Teşekkürler!'
		},
		{
			id:7,
			img:'assets/img/testimonial/testi-2.jpg',
			name:'Selin Aksoy',
			title:'@selinaksoy',
			desc:'Küçük işletmem için harika bir başlangıç oldu. Uygun fiyatlı olmasına rağmen profesyonel bir görünüm sunuyor.'
		},
		{
			id:8,
			img:'assets/img/testimonial/testi-4.jpg',
			name:'Caner Güler',
			title:'@caner_guler',
			desc:'Tema çok kullanıcı dostu ve özelleştirme seçenekleri oldukça fazla. İstediğim gibi bir web sitesi tasarlamak hiç bu kadar kolay olmamıştı.'
		},
		{
			id:9,
			img:'assets/img/testimonial/testi-1.jpg',
			name:'Gizem Demirkan',
			title:'@gizem_dmrkn',
			desc:'Hızlı yükleme hızı ve mobil uyumluluğu sayesinde kullanıcı deneyimi gerçekten çok iyi. Web sitem artık her cihazda kusursuz görünüyor.'
		},
	]
	// slick setting
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
	return (
		<>
			<div className="testimonial__area pt-50 pb-115 fix">
				<div className="container">
					<div className="testimonial__inner p-relative pb-110">
						<div className="testimonial__bg p-absolute">
							<img src="assets/img/bg/testimonial-bg.png" alt="referans arka planı" />
						</div>
						<div className="row">
							<div className="col-xxl-12">
								<Slider {...settings} className="testimonial__slider wow fadeInUp" data-wow-delay=".5s">
									{
										testimonialData.map((testimonial,index) => {
											return <div key={index} className="testimonial__item white-bg">
												<div className="testimonial__person d-flex mb-20">
													<div className="testimonial__avater">
														<img src={testimonial.img} alt={testimonial.name} />
													</div>
													<div className="testimonial__info ml-15">
														<h5>{testimonial.name}</h5>
														<span>{testimonial.title}</span>
													</div>
												</div>
												<div className="testimonial__text">
													<p>{testimonial.desc}</p>
												</div>
											</div>
										})
									}
								</Slider>

							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonial;