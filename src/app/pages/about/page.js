'use client'
import React from "react";
import Image from "next/image"; 
import "./Aboutpagestyle.css"

import firstImg from "../../../../public/images/Templeimage.jpeg";
import secondImg from "../../../../public/images/DoorImage.jpeg";
import thirdImg from "../../../../public/images/Wardrobeimage.jpeg";
import fourthImg from "../../../../public/images/Tableimage.jpeg"; 


import fifthimg from "../../../../public/images/TVUnitimage.jpeg";
import sixthimg from "../../../../public/images/Shoerackimage.jpeg"; 

import Navbar from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";

const About = () => {

    return (
        <>
        <div style={{ backgroundColor: '#fff' }} >
            <Navbar />
            <div className="aboutmain_container" >
                <div className="aboutcontent_container" >
                    <h1>About Us</h1>
                    <p className="acoutcontent_paratwo">Keeva.in is an online store where you can browse through images of various furniture designs. When you find something you like, you can place an order, and we wll custom make that piece of furniture for you.</p>
                    <p className="acoutcontent_paratwo">
                      
                    We only serve in <span className="color: blue; font-weight: bold;">Bela Pratapgarh</span>
                     with custom-made furniture designed just for you. We will handcraft your furniture
                      right here in Pratapgarh with the finest materials. Support local craftsmanship and furnish 
                      your home with unique, quality pieces made by your neighbours.

                    </p>
                    

                    <p className="paraborder" ></p>
                    <div className="three_content_container" >
                        <span className="paracontent_two"  >  Enjoy Exploring and creating your perfect furniture  </span>
                    </div>
                </div>
                <div className="aboutimage_container"  >
                    <Image className="about_pageimage" src={firstImg} alt="img"/>
                </div>
            </div>



            <div className="aboutmain_container" >
                <div className="second_aboutimage_container"  >
                    <Image className="about_page_secimage" src={secondImg} alt="img" />
                    <Image className="about_page_secimage" src={thirdImg}  alt="img" />

                </div>
                <div className="aboutcontent_container" >
                    <h1>Berefits of Choosing KEEVA.in</h1>
                    <h2 className="secondheading" >Competitive Prices</h2>
                    <h2 className="secondheading" >Experience Carpenters</h2>
                    <h2 className="secondheading" >10 Years Warranty on Products</h2>
                    <h2 className="secondheading" >Use of Finest materials in your furniture </h2>
                    <h2 className="secondheading" >More tha 100 designs of any products</h2>
                    <h2 className="secondheading" >You are supporting Local Carpenters</h2>
                </div>
            </div>


            <div className="aboutmain_container" >
                <div className="aboutcontent_container" > 
                    <p className="acoutcontent_paratwo">
                    If you want to make furniture with a well-experienced carpenter, then this place is definitely for you. We are in contact with one of the best carpenters in <span className="color: blue; font-weight: bold;">Bela Pratapgarh, Uttar Pradesh 230001</span>. They have over 10 years of experience in this field.
                      </p>
                </div>
            </div>
        </div>
        
        
        <p style={{textAlign:'center',marginTop:50,marginBottom:10}} ></p>
        
            <h2 style={{textAlign:'center',fontSize:25,fontWeight:'bold'}} >Work Done By Them</h2>
            
        <div className="our_team_container" >
            <div className="our_team_content_container" >
                <Image className="our_teamcontainner_img" src={fourthImg} alt="img" /> 
            </div>

            <div className="our_team_content_container" >
                <Image className="our_teamcontainner_img" src={firstImg} alt="img" /> 
            </div>
            
            <div className="our_team_content_container" >
                <Image className="our_teamcontainner_img" src={fifthimg} alt="img"/> 
            </div>
            

            <div className="our_team_content_container" >
                <Image className="our_teamcontainner_img" src={sixthimg} alt="img" /> 
            </div>
            <div style={{margin:'40px'}} > 
                    <p style={{fontSize:'20px'}}>
                    How can you know that these carpenters can make your modular kitchen as you want? You will definitely
                     find it difficult, but we can make this easy. As we mentioned earlier, we have one of the best carpenters. 
                     So, don't waste your time searching for carpenters.
                         </p>
                    <h1 style={{textAlign:'center',color:"black",margin:'25px',fontSize:'30px'}} >Call us now <span style={{color:"green",fontWeight:'bold'}} >9569125048</span></h1>
                      
                </div>
        </div>
        <Footer />
        </>
        
    );
};

export default About;

 