import React from 'react'
import { useEffect, useState } from 'react'
import prop from "./indivdual.module.css"

export default function Individual() {
  const [data, setdata] = useState()
  const [show, setshow] = useState(false)
  let city = "aurangabad"
  let mapo = (`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`)
  const Getdata = () => {
    setdata(2)
    // fetch("https://api.zostel.com/api/v1/stay/destinations/delhi/")
    // .then((res)=>res.json())
    // .then((d)=>{
    //   setdata(d)

    // })
  }
  console.log(data)
  useEffect(() => {
    Getdata()

  }, [])
  return (
    <div>
      <div style={{
        backgroundImage: `url("https://img.cdn.zostel.com/zostel/gallery/images/JvRwM3NRTYSzsz5R1Y1eKg/aurangabad-20230223105304.png")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        position:"relative"
         }}>
        <img src="" alt="" />
        <h2 style={{
          textAlign: "center", margin: "0", padding: "0", position: "absolute", top: "50%", left: "50%",
          transform: 'translateX(-50%)', color: "white", fontSize: "3em"
        }}>Aurangabad</h2>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ width: "5%", backgroundColor: "blue" ,overflow:"hidden"}}>
          <img src="https://img.cdn.zostel.com/destination/delhi/graphic/left/Delhi_Left.svg" alt="" />
          <img src="https://img.cdn.zostel.com/destination/delhi/graphic/left/Delhi_Left.svg" alt="" />
          <img src="https://img.cdn.zostel.com/destination/delhi/graphic/left/Delhi_Left.svg" alt="" />

          <h5>left side image</h5>
        </div>


         <div style={{ width: "90%", position: "relative" }}>
            <h1 style={{ textAlign: "center", fontSize: "1.8em" }}>Welcome to</h1>
            <h1 style={{ textAlign: "center", fontSize: "2.4em", color: "tomato" }}>Aurangabad</h1>
            <p style={{ textAlign: "center", margin: "0 15%" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque facilis rerum, officiis
              laudantium obcaecati
              illo adipisci rem quod asperiores ad quo repudiandae, aut soluta. Delectus quo ducimus reiciendis deserunt voluptatem. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatem neque modi quasi velit nemo perspiciatis est repellendus placeat totam, pariatur alias numquam vitae sit assumenda aut sequi soluta magnam ad?
            </p>

            {show ? <div> <h1 style={{ textAlign: "center", fontSize: "1.8em" }}>Why we love aurangabad</h1>
              <p style={{ textAlign: "center", margin: "0 15%" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque architecto reprehenderit sunt
                corrupti dolorem. Error consequuntur earum aut. Expedita neque maxime optio molestias
                a adipisci ipsam laudantium facere ex vitae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                ad. Dolorum neque sed modi doloribus. Voluptatum mollitia at alias corrupti fuga voluptatem, fugiat,
                laboriosam, magni sunt aspernatur quidem sapiente dolor!
              </p>

              <h1 style={{ textAlign: "center", fontSize: "1.8em" }}>Fun Facts</h1>
              <p style={{ textAlign: "center", margin: "0 15%" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui iste ad minima iusto repellat ab quia reprehenderit maxime recusan
                dae nihil, laborum veniam magnam. Dolore debitis laborum ex facere laudantium?</p>
            </div>
              : <p style={{ textAlign: "center", margin: "0 15%" }}>...</p>
            }
            <button onClick={() => setshow(!show)}
              style={{ margin: "0", padding: "0.6em", position: "absolute", left: "50%", transform: 'translateX(-50%)', background: "transparent", border: "none", color: "red", cursor: "pointer" }}>
              {show ? "show less" : "show more"}</button>

            <h1 style={{ textAlign: "center", margin: "2% 15%" }}>Stays At <span style={{ color: "tomato" }}>Aurangabad</span> </h1>
            <div className={prop.containers}>
              <div className={prop.left} style={{backgroundImage:`url("https://img.cdn.zostel.com/zostel/gallery/images/7x147f3PQmOuOrb_o1ez1A/zostel-aurangabad-20201105103524.jpg?w=1280")`, backgroundPosition: 'center',
                   backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat',}}>
                {/* <img src="https://img.cdn.zostel.com/zostel/gallery/images/7x147f3PQmOuOrb_o1ez1A/zostel-aurangabad-20201105103524.jpg?w=1280" alt="gdfgd" /> */}

              </div>
              <div className={prop.right}>
                  <h2 style={{color:"gray"}}>Zostal</h2>
                   <h1>Zostal Aurangabad</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veritatis tenetur pariatur facere vero in nam assumenda repellat autem animi, quos vitae aliquam inventore 
                      voluptatibus, perspiciatis unde numquam. Commodi, possimus?</p>
                     <p>Starting At rs 499</p> <span><button>View Now</button></span>
              </div>

            </div>

            <div style={{margin:"4% 5%",border:" 1px solid grey",borderRadius:"8px",overflow:"hidden"}}>
                       {/* <div  style={{position:"relative",textAlign:"right",height:"400px",width:"100%",borderRadius:"8px"}}>
                           <div style={{overflow:"hidden",background:"none!important",height:"400px",width:"100%",borderRadius:"8px"}}>
                             */}
                               <iframe width="100%" height="400" borderRadius="8px" src={mapo} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">

                                 </iframe>
                            {/* </div>
                         </div> */}
           </div>

           
                                      
          </div>


          <div style={{ width: "5%", backgroundColor: "blue" }}>
            <h5> right image</h5>
          </div>
      </div>


      <div>
          <h1 style={{textAlign:"center",fontSize:"2.4em"}}>Latest Road in Delhi</h1>
          <div>
            <div className={prop.left}>

              <img src="https://img.cdn.zostel.com/blog_photo/00000IMG_00000_BURST20190726160654631_COVER.jpg" alt="" width={"400px"} />
            </div>
            <div className={prop.right}>
                  <h1 style={{fontSize:"1.2em"}}>8 great ways to be Environmental Friendly </h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat ducimus tenetur atque illo nam, quo commodi, nulla dolore iusto non aperiam?</p>
            </div>
          </div>
          
      </div>
    </div>
  )
}
