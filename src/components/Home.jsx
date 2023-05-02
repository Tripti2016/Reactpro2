import React from "react";
import vg from "../images/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
export default function Home() {
  return (
    <>
      <div className="Home" id="Home">
        <main>
          <h1>Home Project1</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
            autem deserunt.{" "}
          </p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo modi
            voluptate iure minus tempora. Aut, minima. Alias delectus est
            laudantium enim deserunt minima error accusamus nesciunt animi
            quasi, officiis eum!
          </p>
        </div>
      </div>
      <div className="home3" id="About">
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            maxime cum odit aut incidunt necessitatibus consequuntur, sapiente
            facere molestias, accusantium eveniet esse repudiandae sequi eos
            delectus reiciendis, mollitia eaque iure ducimus soluta illum
            ratione nemo? Omnis quam adipisci nam excepturi libero error
            architecto nisi incidunt dolor? Sunt officiis deserunt maiores.
          </p>
        </div>
      </div>
      <div className="home4" id="Brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
           
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>
            <div style={{ animationDelay: "1.2s" }}>
              <AiFillInstagram/>
              <p>InstaGram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
