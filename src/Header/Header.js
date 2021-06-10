import React, { useState,useEffect } from 'react';
import './header.css';
import { Button, Card, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import Logo from './img/header-logo.png';
import Content from './img/content-img.png';
import Ipsum1 from './img/inspum.png';
import Inspum2 from './img/ipsum-logo.png';
import Inspum3 from './img/logoi_psum.png';
import Inspum4 from './img/logo_ipsum.png';
import ContentSecond from './img/content-img-second.png';
import CardImg from './img/first-card-img.png';
import CardImg1 from './img/second-card-img.png';
import CardImg2 from './img/third-caard-img.png';
import CardImg3 from './img/fourth-card-img.png';
import CardImg4 from './img/fifth-card-img.png';

import {FaAngleUp, FaBars, FaChrome, FaEnvelope, FaFacebookF, FaInstagram, FaInternetExplorer, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaPhoneAlt, FaPlay, FaTwitter, FaYoutube} from 'react-icons/fa';
import ContentThird from './img/content-img-third.png';
import FooterImg from './img/footer-logo.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {useSelector,useDispatch} from 'react-redux';
import { GetLanguage } from '../Utilities';
import {Uzlanguage,Enlanguage} from '../Actions/Actions';

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false

        }
      },
    
      
    ]
  };
    const[isOpen,setOpen]=useState(false);

    const open=()=>{
        setOpen(!isOpen)
    }
 
    useEffect(() => {
  
      if(GetLanguage() ){
        dispatch(Enlanguage())
       setTillar("Eng")
     
      }else{
        dispatch(Uzlanguage())
        setTillar("Uz")
      }
      
    }, []);
    
    const uz = useSelector(state => state)
    
    const dispatch = useDispatch()
    
    const[tillar,setTillar] = useState('Eng')
    const Changer=(e)=>{
      setTillar(e.target.value)
    
        if(tillar==='Uz'){
          dispatch(Enlanguage())
    
        }
        else if(tillar ==='Eng'){
          dispatch(Uzlanguage())
    
        }
    }

    window.onscroll = function() {myFunction()};

    function myFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("a-up").style.opacity = "1";
        document.getElementById("a-up").style.transition = "1s";
        document.getElementById("angle-up").style.color = "black";
      } else {
        document.getElementById("a-up").style.opacity = "0";
        document.getElementById("angle-up").style.color = "white";

      }
    }
    return (
        <div>
            <div className="header">
            <div className="container">

            <Navbar id="header-navbar-menu"  expand="lg">
  <Container>
    <Navbar.Brand className="brand"  href="#home"><img src={Logo} className="img-fluid " alt=""/></Navbar.Brand>
    <Navbar.Toggle  className="Toggle">
    <button aria-controls="basic-navbar-nav" onClick={open}  className={isOpen?'bar opened':'bar'}>
      <svg width="25" height="25" viewBox="0 0 100 100">
        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path class="line line2" d="M 20,50 H 80" />
        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>
    </Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" id="header-menu">
        <Nav.Link  className="menu" id="header-home" href="#home" >{uz?"Home":"Bosh sahifa"}</Nav.Link>
        <Nav.Link  className="menu" href="#link">{uz?"About":"Biz haqimizda"}</Nav.Link>
        <Nav.Link  className="menu" href="#link">{uz?"Blog":"Blog"}</Nav.Link>
        <Nav.Link  className="menu" href="#link">{uz?"Page":"Qism"}</Nav.Link>
        <Nav.Link  className="menu" href="#link">{uz?"Contact":"Aloqa"}</Nav.Link>
      </Nav>
      <Button variant="primary">{uz?"Sign in":"Ro'yxatdan o'tish"}</Button>
    
      </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
            </div>
            <div className="header-content">
              <div className="container">
                <div className="Grid">
                  <div className="first-grid-column">
                    <h5>
                    {uz?"Next genaretion platform":"Keyingi avlod platformasi"}
                    </h5>
                    <h1 className="text-white">
                    {uz?"Artificial intelligence":"Sun'iy ong"} <br/>
                   {uz?" & Syber security":"va Kiber himoya"}
                    </h1>
                    <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Accusantium autem molestiae nesciunt vero, <br/> placeat quibusdam!</p>
                    <div className="d-flex ">
                      <a href="#" className="btn btn-primary " id="get">{uz?"Get started":"Boshlamoq"}</a>
                      <a href="#" className="btn btn-primary d-inline-block text-align-center "><FaPlay style={{marginRight:'5px'}} />{uz?"Watch video":"Videoni tomosha qiling"}</a>

                    </div>
                    </div>
                    <div className="header-content-image">
                      <img src={Content} className="img-fluid" alt=""/>
                   
                    </div>
                 
                </div>
                <div className="grid-div-second">
                  <img src={Ipsum1} className="img-fluid" alt=""/>
                  <img src={Inspum2} className="img-fluid" alt=""/>
                  <img src={Inspum3} className="img-fluid" alt=""/>
                  <img src={Inspum4} className="img-fluid" alt=""/>
                </div>
              </div>
            </div>
            <div className="content-second">
              <div className="container">
                <div className="Grid">
                  <div className="content-second-image">
                    <img src={ContentSecond} className="img-fluid" alt=""/>
                  </div>
                  <div className="content-second-grid-column">
                    <h4>
                  {uz?"  Apply AI, Deep Learning":"AI, Deep Learning-ni qo'llang"} <br/> {uz?"and Data Science to solve":"va Data Science-ni hal qiling"}
                    </h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Accusantium autem molestiae nesciunt vero, <br/> placeat quibusdam</p>
                    <div className="button">
                    <a href="#" className="btn btn-primary">{uz?"Learn more":"Ko'proq bilmoq"}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="responsive-carousel-column">
              <Slider {...settings} id="cards">
          <div className="d-flex justify-content-between align-items-center " >
            
              <Card style={{ width: '100%',height:"450px" ,marginRight:"10px" }} className="background">
                <div className="d-flex justify-content-center">
              <Card.Img variant="top" src={CardImg} className="w-25" />
                </div>
              <Card.Body className="CardBody">
                <Card.Title style={{color:'white',fontWeight:'700'}}>Naxly as the Winners in Global Agency Awards</Card.Title>
                <Card.Text>
                Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.
                </Card.Text>
              
              </Card.Body>
            </Card>
           
          </div>
          <div className="d-flex justify-content-between align-items-center" >
          
              <Card style={{ width: '100%',height:"450px",marginRight:"10px"  }} className="background">
              <div className="d-flex justify-content-center">
              <Card.Img variant="top" src={CardImg1} className="w-25" />
                </div>
              <Card.Body className="CardBody">
                <Card.Title style={{color:'white',fontWeight:'700'}}>Global Experience in Agency Awards</Card.Title>
                <Card.Text>
                  Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.
                </Card.Text>
              </Card.Body>
            </Card>
           
          </div>
          <div className="d-flex justify-content-between align-items-center" >
          
              <Card style={{ width: '100%',height:"450px",marginRight:"10px"  }} className="background">
            <div className="d-flex justify-content-center">
              <Card.Img variant="top" src={CardImg2} className="w-25" />
                </div>
              <Card.Body className="CardBody">
                <Card.Title style={{color:'white',fontWeight:'700'}}>{uz?"Naxly as the Winners in Global Agency Awards":"Naxly Global Agency Awards mukofotlari g'oliblari sifatida"}</Card.Title>
                <Card.Text>
                Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.
                </Card.Text>
              </Card.Body>
            </Card>
          
          </div>
          <div className="d-flex justify-content-between align-items-center" >
          
          <Card style={{ width: '100%',height:"450px" ,marginRight:"10px" }} className="background">
          <div className="d-flex justify-content-center">
              <Card.Img variant="top" src={CardImg3} className="w-25" />
                </div>
          <Card.Body className="CardBody">
            <Card.Title style={{color:'white',fontWeight:'700'}}>{uz?"Expert Prespective Agency Awards":"Expert Prespective Agency mukofotlari"}</Card.Title>
            <Card.Text>
            Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.
            </Card.Text>          
          </Card.Body>
        </Card>
      
      </div>
      <div className="d-flex justify-content-between align-items-center" >
            
            <Card style={{ width: '100%',height:"450px" ,marginRight:"10px" }} className="background">
            <div className="d-flex justify-content-center">
              <Card.Img variant="top" src={CardImg4} className="w-25" />
                </div>
            <Card.Body className="CardBody">
              <Card.Title style={{color:'white',fontWeight:'700'}}>{uz?"Business Prespective Global Agency Awards":"Business Prespective Global Agency mukofotlari"}</Card.Title>
              <Card.Text>
              Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.
              </Card.Text>
            </Card.Body>
          </Card>
         
        </div>
        <div className="d-flex justify-content-between align-items-center" >
        
            <Card style={{ width: '100%',height:"450px" ,marginRight:"10px" }} className="background">
            <div className="d-flex justify-content-center">
              <Card.Img variant="top" src={CardImg} className="w-25" />
                </div>
            <Card.Body className="CardBody">
              <Card.Title style={{color:'white',fontWeight:'700'}}>{uz?"Value for Results in Global Agency Awards":"Global Agency Awards mukofotlari natijalari uchun qiymat"}</Card.Title>
              <Card.Text>
                Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.
              </Card.Text>
            </Card.Body>
          </Card>
         
        </div>
        <div className="d-flex justify-content-between align-items-center" >
        
            <Card style={{ width: '100%' ,height:"450px",marginRight:"10px" }} className="background">
            <div className="d-flex justify-content-center">
              <Card.Img variant="top" src={CardImg1} className="w-25" />
                </div>
            <Card.Body className="CardBody">
              <Card.Title style={{color:'white',fontWeight:'700'}}>{uz?"Global Experience in Agency Awards":"Agentlik mukofotlari bo'yicha global tajriba"}</Card.Title>
              <Card.Text>
              Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.
              </Card.Text>
            </Card.Body>
          </Card>
        
        </div>
        <div className="d-flex justify-content-between align-items-center" >
        
        <Card style={{ width: '100%' ,height:"450px" ,marginRight:"10px"}} className="background">
        <div className="d-flex justify-content-center">
              <Card.Img variant="top" src={CardImg2} className="w-25" />
                </div>
        <Card.Body className="CardBody">
          <Card.Title style={{color:'white',fontWeight:'700'}}>N{uz?"Naxly as the Winners in Global Agency Awards":"Naxly Global Agency Awards mukofotlari g'oliblari sifatida"}</Card.Title>
          <Card.Text>
          Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.
          </Card.Text>
        
        </Card.Body>
      </Card>
    
    </div>
    <div className="d-flex justify-content-between align-items-center" >
            
            <Card style={{ width: '100%',height:"450px" ,marginRight:"10px" }} className="background">
            <div className="d-flex justify-content-center">
              <Card.Img variant="top" src={CardImg3} className="w-25" />
                </div>
            <Card.Body className="CardBody">
              <Card.Title style={{color:'white',fontWeight:'700'}}>{uz?"Expert Prespective Agency Awards":"Expert Prespective Agency mukofotlari"}</Card.Title>
              <Card.Text>
              Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.
              </Card.Text>
            </Card.Body>
          </Card>
         
        </div>
        <div className="d-flex justify-content-between align-items-center" >
        
            <Card style={{ width: '100%',height:"450px" ,marginRight:"10px"}} className="background">
            <div className="d-flex justify-content-center">
              <Card.Img variant="top" src={CardImg} className="w-25" />
                </div>
            <Card.Body className="CardBody">
              <Card.Title style={{color:'white',fontWeight:'700'}}>{uz?"Business Prespective Global Agency Awards":"Business Prespective Global Agency mukofotlari"}</Card.Title>
              <Card.Text>
                Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.
              </Card.Text>
            </Card.Body>
          </Card>
         
        </div>
        <div className="d-flex justify-content-between align-items-center" >
        
            <Card style={{ width: '100%' ,height:"450px",marginRight:"10px"}} className="background">
            <div className="d-flex justify-content-center">
              <Card.Img variant="top" src={CardImg3} className="w-25" />
                </div>
            <Card.Body className="CardBody">
              <Card.Title style={{color:'white',fontWeight:'700'}}>{uz?"Value for Results in Global Agency Awards":"Global Agency Awards mukofotlari natijalari uchun qiymat"}</Card.Title>
              <Card.Text>
              Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.
              </Card.Text>
            </Card.Body>
          </Card>
        
        </div>
        <div className="d-flex justify-content-between align-items-center" >
        
        <Card style={{ width: '100%',height:"450px",marginRight:"10px" }} className="background">
        <div className="d-flex justify-content-center">
              <Card.Img variant="top" src={CardImg4} className="w-25" />
                </div>
        <Card.Body className="CardBody">
          <Card.Title style={{color:'white',fontWeight:'700'}}>{uz?"Global Experience in Agency Awards":"Agentlik mukofotlari bo'yicha global tajriba"}</Card.Title>
          <Card.Text>
          Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.
          </Card.Text>
        
        </Card.Body>
      </Card>
    
    </div>
          
        </Slider>
              </div>
              <div className="content-second-third-column">
                <div className="container">
                <div className="Grid">
                  <div className="content-second-third-column-one">
                    <h4 className="text-white">
              {uz?"What our clients say about":"Mijozlarimiz nima deyishadi"} <br/> {uz?"our awesome solutions  ":"bizning ajoyib yechimlarimiz haqida"}
                    </h4>
                    <p>
        {uz?"To take a trivial example, which of us ever undertakes":"Arzimas bir misolni olish uchun, qaysi birimiz mashaqqatli jismoniy mashqlarni bajaramiz"} <br/> {uz?"laborious physical exercise, except to obtain some":"mashaqqatli jismoniy mashqlar, faqat bir qismini olishdan tashqari"} <br/> {uz?"advantage from it who do not know.":"undan kim bilmaydi."}
                    </p>
                    <p>
                    Lorem ipsum is placeholder text commonly used in the <br/> graphic, print, and publishing .
                    </p>
                    <p>
                    Lorem ipsum is placeholder previewing layouts and visual  <br/>  mockups.
                    </p>
                    <p>
                    Lorem ipsum is placeholder text commonly used in the <br/> graphic, print, and publishing industries for previewing <br/> layouts and visual mockups.
                    </p>
                  </div>
                  <div className="content-thirdly">
                    <img src={ContentThird} className="img-fluid" alt=""/>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <footer>
              <div className="footer-column">
                <div className="container">
                  <div className="gid" id="footer-display">
                    <div className="first-footer-column">
                      <a href="#"><img src={FooterImg} className="img-fluid" alt=""/></a>
                      <h6 style={{padding:'15px 0'}}>
                      Lorem ipsum is placeholder text <br/> commonly used in the graphic, print, and layouts and <br/> visual mockups.
                      </h6>
                      <h6 className="text-white d-inline-block" style={{fontSize:'14px'}}>
                        <FaEnvelope style={{marginRight:'10px'}} />
                        Company@gmail.com.com
                      </h6>
                      <br/>
                      <h6 className="text-white d-inline-block" style={{fontSize:'14px'}}>
                        <FaPhoneAlt style={{marginRight:'10px'}} />
                        Phone: (064) 332-1233
                      </h6>
                      <br/>
                      <h6 className="text-white d-inline-block" style={{fontSize:'14px'}}>
                        <FaMapMarkerAlt style={{marginRight:'10px'}} />
                        450 Wall Street, USA, New York
                      </h6>
                    </div>
                    <div className="second-footer-column">
                      <h4 className="text-white ">
                      {uz?"INFORMATION":"AXBOROT"}
                      </h4>
                      <ul className="first-ul-collection">
                        <li><a href="#">{uz?"New Collection":"Yangi kolleksiya"}</a></li>
                        <li><a href="#">{uz?"About Store":"Do'kon haqida"}</a></li>
                        <li><a href="#">{uz?"Contact Us":"Biz bilan bog'lanish"}</a></li>
                        <li><a href="#">{uz?"Latest News":"So'nggi xabarlar"}</a></li>
                        <li><a href="#">{uz?"Our Sitemap":"Bizning sayt xaritamiz"}</a></li>
                        <li><a href="#">{uz?"Orders History":"Buyurtmalar tarixi"}</a></li>
                      </ul>
                    </div>
                    <div className="second-footer-column">
                      <h4 className="text-white">
                      FOOTER MENU 
                      </h4>
                      <ul className="first-ul-collection">
                        <li><a href="#">{uz?"Instagram profile":"Instagram profili"}</a></li>
                        <li><a href="#">{uz?"New Collection":"Yangi kolleksiya"}</a></li>
                        <li><a href="#">{uz?"Contact Us":"Biz bilan bog'lanish"}</a></li>
                        <li><a href="#">{uz?"Latest News":"So'nggi xabarlar"}</a></li>
                        <li><a href="#">{uz?"Terms & Conditions":"Qoidalar va shartlar"}</a></li>
                        <li><a href="#">{uz?"Purchase Theme":"Xarid qilish mavzusi"}</a></li>
                      </ul>
                    </div>
                    <div className="second-footer-column">
                      <h4 className="text-white">
                    {uz?"USEFUL LINKS":"FOYDALI LINKLAR"}
                      </h4>
                      <ul className="first-ul-collection">
                        <li><a href="#">{uz?"Instagram profile":"Instagram profili"}</a></li>
                        <li><a href="#">{uz?"New Collection":"Yangi kolleksiya"}</a></li>
                        <li><a href="#">{uz?"Contact Us":"Biz bilan bog'lanish"}</a></li>
                        <li><a href="#">{uz?"Latest News":"So'nggi xabarlar"}</a></li>
                        <li><a href="#">{uz?"Terms & Conditions":"Qoidalar va shartlar"}</a></li>
                        <li><a href="#">{uz?"Purchase Theme":"Xarid qilish mavzusi"}</a></li>
                      </ul>
                    </div>
                    <div className="second-footer-column">
                      <h4 className="text-white">
                   {uz?"ABOUT THE STORE":"DO'KON HAQIDA"}
                      </h4>
                      <ul className="first-ul-collection">
                        <li><a href="#">Lorem ipsum is placeholder text <br/> commonly used in the graphic, print, and <br/> layouts and visual mockups.</a></li>
                        <li><a href="#" className="text-white">www.company.com</a></li>
                        <li>
                          <p  className="d-inline-block" >
                            <a href="#"><FaFacebookF style={{marginRight:"15px"}} /></a>
                            <a href="#"><FaInstagram  style={{marginRight:"15px"}}  /></a>
                            <a href="#"><FaTwitter  style={{marginRight:"15px"}}  /></a>
                            <a href="#"><FaLinkedinIn  style={{marginRight:"15px"}}  /></a>
                            <a href="#"><FaYoutube/></a>
                          </p>
                          </li>
                        <li className="d-inline-block">
                          <FaChrome  style={{color:'white'}} />
                          <select value={tillar} onChange={Changer} className="language-select-new">
                            <option value="Eng">Eng</option>
                            <option value="Uz">Uzb</option>
                          </select>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" id="a-up" className="go-up"><FaAngleUp id="angle-up" style={{color:'black',fontSize:"1.5rem"}} /></a>
            </footer>
        </div>
    )
}

export default Header
