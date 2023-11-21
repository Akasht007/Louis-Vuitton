import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <div>
       <div className="videobg " >
        <video  className="video" controls autoPlay loop muted>
            <source src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/PHmePufzcE_HD.mp4" type="video/mp4" />
        </video>
        <h2>The Holiday Season with Louis Vuitton</h2>
        <button>Discover the Collections</button>
    </div>

    <div className="videobg" >
       <img className="video" src="https://in.louisvuitton.com/images/is/image/BC_COMMERCIAL_HOLIDAY2023_IMG016_LVCOM_2048x1152_DI3.jpg?wid=2400" alt="" />
        <h2>Colourmania</h2>
        <button>Discover the Collections</button>
    </div>

    <div className="videobg">
        <video  className="video" controls autoPlay loop muted>
            <source src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/gozzJ2YNzC_HD.mp4" type="video/mp4" />
        </video>
        <h2>Horizons Never Ends</h2>
        <button>Discover the Collections</button>
    </div>

    <div className="videobg">
    <img className="video" src="https://in.louisvuitton.com/images/is/image/Men_Preco_SS24_WW_HP_Push_DI3.jpg?wid=2400" alt="" />

       
        <h2>Men’s Spring-Summer 2024 Pre-Collection</h2>
        <button>Discover the Collections</button>
    </div>

    <div className="videobg" >
        <video  className="video" controls autoPlay loop muted>
            <source src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/mNZJYE3ri8_HD.mp4" type="video/mp4" />
        </video>
        <h2>Cruise 2024</h2>
        <button>Discover the Collections</button>
    </div>

    <div className="videobg" >
        <video  className="video" controls autoPlay loop muted>
            <source src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/akrn6Ucyh8_HD.mp4" type="video/mp4" />
        </video>
        <h2>The Capucines and the GO-14</h2>
        <button>Discover the Collections</button>
    </div>

    <div className="videobg" >
        <video  className="video" controls autoPlay loop muted>
            <source src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/yO2mZkdMtp_HD.mp4" type="video/mp4" />
        </video>
        <h2>Louis Vuitton Blossom</h2>
        <button>Discover the Collections</button>
    </div>

    <hr />

    <div>
        <h2 className='pt-5' style={{textAlign:'center'}} >Services</h2>
    </div>

    <div className='m-3 d-flex align-items-center justify-content-center'>
    <Container className=' d-flex align-items-center justify-content-center' style={{justifyContent:'center'}}>
      <Row  >
        <Col xs>
            <img height={'200'} src="https://in.louisvuitton.com/images/is/image/HP_Services_Push_Contact_Us_DI3.jpg?wid=2400" alt="" />

            <h3>How can we help you?</h3>
                        <p>Wherever you are, Louis Vuitton Client Advisors <br /> will be delighted to assist you.</p>
                        <a className='text-dark'>Contact Us </a>            


        </Col>


        <Col xs={{ order: 12 }}>
            <img height={'200'} src="https://in.louisvuitton.com/images/is/image/HP_Services_Push_Art_Of_Gifting_DI3.jpg?wid=2400" alt="" />

            <h3>Art of Gifting</h3>
                        <p>Choose the perfect gift from our specially curated <br /> selection of products.</p>
                        <a className='p-2 text-dark' href="">Gifts for Her   </a>
                        <a className='text-dark' href="">Gifts for Him</a>    

        </Col>
        <Col xs={{ order: 1 }}>
            <img height={'200'} src="https://in.louisvuitton.com/images/is/image/HP_Services_Push_Personalization_DI3.jpg?wid=2400" alt="" />
            
            <h3>Personalization</h3>
                        <p>Louis Vuitton\'s personalization offer spans a wide <br /> range of services.</p>
                        <a className='text-dark' >Explore our Collections</a>

            
        </Col>
      </Row>
    </Container>
    <hr />
    </div>

    <hr />

    <div className=' ms-5 p-5 mx-auto  d-flex align-items-center justify-content-center' style={{justifyContent:'center'}}>
        <Row  >
            <Col sm={12} md={6} lg={3}>
            <h4>HELP</h4>    
            <p>A Client Advisor is available at 1800 103 9988. You can also chat or email us.</p>
            <p>FAQ's</p>
            <p>Product Care</p>
            <p>Stores</p>
            
            </Col>
            <Col sm={12} md={6} lg={3}>
            <h4>SERVICES</h4>
            <p>Repairs</p>
            <p>Personalisation</p>
            <p>Art of Gifting</p>
            <p>Download our Apps</p>
            </Col>
            <Col sm={12} md={6} lg={3}>
            <h4>ABOUT LOUIS VUITTON</h4>
             <p>Fashion Shows</p>
            <p>La Maison</p>
             <p>Sustainability</p>
            <p>Latest News</p>
            <p>Careers</p>
            <p>Foundation Louis Vuitton</p>
            </Col>
            <Col sm={12} md={6} lg={3}>
            <h4>CONNECT</h4>
             <p>Sign up for first access to <br /> latest collections, campaigns <br /> and videos.
Follow Us</p>
            </Col>
        </Row>
    </div>

    <hr />
    <div className='ms-5 p-5'>
    <Row>
        <Col sm={12} md={6} lg={4}>
        <h4>  India</h4>
       <p> Full Name and Address of the Manufacturer</p>
       <p>Louis Vuitton Malletier SAS
2 Rue du Pont Neuf
75034 Paris CEDEX 01
FRANCE</p>
<p>Please refer to the product label for specific country of origin for each product.</p>




        </Col>
        <Col className='mt-3' sm={12} md={6} lg={4}>
        <h4> </h4>
        <p></p>
        <p>Louis Vuitton India Retail Private Limited
901A Ninth Floor, Time Tower, MG Road
Gurgaon, Haryana - 122002
INDIA</p>
        
        </Col>
        <Col className='' sm={12} md={6} lg={4}>
        <h4>Sitemap
Legal & Privacy</h4>
        </Col>
    </Row>

    </div>
    
   
    
    </div>
  )
}

export default Home