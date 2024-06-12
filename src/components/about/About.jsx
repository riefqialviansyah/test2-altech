import { HiPuzzle } from "react-icons/hi";
import "./about.scss";

export default function About() {
  return (
    <div className="about-component">
      <div className="statistik">
        <div className="item-statistik">
          <span>#1</span>
          <p>ERP Program in Indonesia</p>
        </div>
        <div className="item-statistik">
          <span>+185</span>
          <p>Corporate Partners</p>
        </div>
        <div className="item-statistik">
          <span>AI</span>
          <p>More Powerful With AI</p>
        </div>
        <div className="item-statistik">
          <span>Care</span>
          <p>Full 7 x 24 Hours Support</p>
        </div>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src="./erp.jpg" alt="ERP-image" />
        </div>
        <div className="about-data">
          <div className="about-data-title">
            <h3>Kenapa SES Menjadi Penyedia Program ERP Terbaik</h3>
            <p>
              SES sudah teruji membantu mengelola data industri melalui program
              unggulan yang ditawarkan.
            </p>
          </div>
          <div className="about-data-content">
            <div className="list-content-about">
              <div className="list-content-about-title">
                <span>
                  <HiPuzzle color="orange" />
                </span>
                <p>Solusi Terpadu</p>
              </div>
              <div className="description">
                Menawarkan solusi menyeluruh untuk mengintegrasikan proses
                bisnis Anda.
              </div>
            </div>
            <div className="list-content-about">
              <div className="list-content-about-title">
                <span>
                  <HiPuzzle color="orange" />
                </span>
                <p>Efisiensi</p>
              </div>
              <div className="description">
                Mengurangi duplikasi data, dan meningkatkan akurasi.
              </div>
            </div>
            <div className="list-content-about">
              <div className="list-content-about-title">
                <span>
                  <HiPuzzle color="orange" />
                </span>
                <p>Masa Depan Bisnis</p>
              </div>
              <div className="description">
                Bersiaplah untuk menghadapi tantangan masa depan dengan sistem
                ERP yang fleksibel dan skalabel yang handa didapat pada SES.
              </div>
            </div>
            <div className="list-content-about">
              <div className="list-content-about-title">
                <span>
                  <HiPuzzle color="orange" />
                </span>
                <p>Inovasi Terus menerus</p>
              </div>
              <div className="description">
                Dengan data real-time dan analisis canggih, Anda dapat
                meningkatkan produktivitas dan merespons perubahan pasar dengan
                cepat.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
