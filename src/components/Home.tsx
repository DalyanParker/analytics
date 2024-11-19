import { SessionEventClient } from "@/clients/sessionEventClient";
import { Inter } from "next/font/google";
import { useEffect, useRef } from "react";
import Button from "./Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const controllerRef = useRef<AbortController>();

  //   useEffect(() => {
  //     controllerRef.current = new AbortController();
  //     const abortControllerSignal = controllerRef.current.signal;

  //     const sessionEventClient = new SessionEventClient();

  //     sessionEventClient.createSessionEvent({
  //       sessionEventType: "PAGE_VIEW",
  //       abortControllerSignal,
  //     });

  //     return () => {
  //       if (controllerRef.current) {
  //         controllerRef.current?.abort("Rerender");
  //       }
  //     };
  //   }, []);

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <header className="banner">
        <h1>Welcome to the Trumpet Store</h1>
        <p>Your one-stop shop for quality trumpets</p>
        <a href="#trumpets" className="cta-button">
          Shop Now
        </a>
      </header>

      <section
        id="trumpets"
        className="trumpet-gallery mt-12 mb-12 coral-red"
        style={{
          color: "white",
        }}
      >
        <h2>Our Collection</h2>
        <div className="trumpet-container">
          <div className="trumpet-item">
            <img
              src="https://images.unsplash.com/photo-1572017547501-ddc8900d9d6d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Trumpet 1"
            />
            <h3>Classic Trumpet</h3>
            <p>
              The Classic Trumpet is the ideal choice for both beginners and
              seasoned musicians. With its warm, resonant tones and traditional
              design, this trumpet delivers exceptional performance for
              orchestral, band, or solo play. Built to last with high-quality
              brass, it’s the perfect blend of durability and classic sound.
            </p>
            <Button text="Buy Now" elementId="BUTTON_1" />
          </div>
          <div className="trumpet-item">
            <img
              src="https://images.unsplash.com/photo-1520614233149-f698fd8379e4?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Trumpet 2"
            />
            <h3>Silver Trumpet</h3>
            <p>
              Experience brilliance with the Silver Trumpet. Crafted from
              premium silver-plated brass, this trumpet produces a bright, clear
              tone that cuts through any ensemble. Its sleek, polished finish
              not only looks stunning but also enhances the instrument’s
              projection, making it a top choice for both concert and marching
              band performances.
            </p>
            <Button text="Buy Now" elementId="BUTTON_3" />
          </div>
          <div className="trumpet-item">
            <img
              src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Trumpet 3"
            />
            <h3>Jazz Trumpet</h3>
            <p>
              The Jazz Trumpet is designed for the expressive musician.
              Featuring a more free-blowing design, this trumpet offers rich,
              vibrant tones that are perfect for jazz and contemporary styles.
              With its unique styling and responsive valves, it allows for
              quick, smooth transitions, giving you the flexibility to explore
              your creative boundaries.
            </p>
            <Button text="Buy Now" elementId="BUTTON_2" />
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing-section">
        <h2>Pricing</h2>
        <div className="pricing-container">
          <div className="pricing-item">
            <h3>Classic Trumpet</h3>
            <p>$299.99</p>
            <Button text="Buy Now" elementId="BUTTON_4" />
          </div>
          <div className="pricing-item">
            <h3>Silver Trumpet</h3>
            <p>$349.99</p>
            <Button text="More Info" elementId="BUTTON_5" />
          </div>
          <div className="pricing-item">
            <h3>Jazz Trumpet</h3>
            <p>$399.99</p>
            <Button text="More Info" elementId="BUTTON_6" />
          </div>
        </div>
      </section>
    </div>
  );
}
