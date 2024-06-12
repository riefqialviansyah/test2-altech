import "./hero.scss";

export default function Hero() {
  return (
    <div className="hero-component">
      <div className="hero-intro">
        <h1>
          {"Synergy ERP Solution: Connecting Every Aspect of Your Business"}
        </h1>
        <p>
          {
            "Enhance operational efficiency and make better decisions with our ERP system. All your business functions, from accounting to supply chain management, are connected in a single centralized platform."
          }
        </p>
        <div className="try-btn">Try Now for Free</div>
      </div>
      <div className="hero-image">
        <img src="./hero.png" alt="hero-image" />
      </div>
    </div>
  );
}
