import {
  HiClipboardList,
  HiCalculator,
  HiChatAlt2,
  HiChartPie,
  HiPresentationChartLine,
  HiCheck,
  HiCurrencyDollar,
  HiX,
} from "react-icons/hi";

import "./pricing.scss";

export default function Pricing() {
  return (
    <div className="pricing-component">
      <div className="title-pricing">
        <h2>Popular product to increase company productivity</h2>
        <p>
          Save time, money, and effort by automating and streamlining tasks.
        </p>
      </div>
      <div className="pricing-list">
        {/* Tier 1 Basic */}
        <div className="box-price">
          <div className="content-purchase">
            <div className="title-package" style={{ backgroundColor: "white" }}>
              <h3 style={{ color: "black" }}>Basic</h3>
              <p style={{ color: "black" }}>Enough to cover your data</p>
            </div>
            <div className="content-package">
              <div className="box-list-content">
                <div className="list-content">
                  <span>
                    <HiClipboardList />
                  </span>
                  <p>Mencatat barang in dan out</p>
                </div>
                <span className="check">
                  <HiCheck />
                </span>
              </div>
              <div className="box-list-content">
                <div className="list-content">
                  <span>
                    <HiCalculator />
                  </span>
                  <p>Analisa penjualan</p>
                </div>
                <span className="check">
                  <HiCheck />
                </span>
              </div>
              <div className="box-list-content" style={{ opacity: "0.4" }}>
                <div className="list-content">
                  <span>
                    <HiCurrencyDollar />
                  </span>
                  <p>Mencatat keuntungan</p>
                </div>
                <span className="check">
                  <HiCheck />
                </span>
              </div>
              <div className="box-list-content" style={{ opacity: "0.4" }}>
                <div className="list-content">
                  <span>
                    <HiChatAlt2 />
                  </span>
                  <p>Support 7 x 24 Jam</p>
                </div>
                <span className="check">
                  <HiX />
                </span>
              </div>
              <div className="box-list-content" style={{ opacity: "0.4" }}>
                <div className="list-content">
                  <span>
                    <HiChartPie />
                  </span>
                  <p>Export data ke Excel</p>
                </div>
                <span className="check">
                  <HiX />
                </span>
              </div>
              <div className="box-list-content" style={{ opacity: "0.4" }}>
                <div className="list-content">
                  <span>
                    <HiPresentationChartLine />
                  </span>
                  <p>AI Forcast</p>
                </div>
                <span className="check">
                  <HiX />
                </span>
              </div>
            </div>
          </div>
          <div className="option-purchase">
            <div className="btn-purchase">Purchase</div>
          </div>
        </div>
        {/* End Tier 1 Basic */}
        {/* Tier 2 Business */}
        <div className="box-price">
          <div className="content-purchase">
            <div
              className="title-package"
              style={{ backgroundColor: "orange" }}
            >
              <h3 style={{ color: "black" }}>BUSINESS</h3>
              <p>Maximize your profit</p>
            </div>
            <div className="content-package">
              <div className="box-list-content">
                <div className="list-content">
                  <span>
                    <HiClipboardList />
                  </span>
                  <p>Mencatat barang in dan out</p>
                </div>
                <span className="check">
                  <HiCheck />
                </span>
              </div>
              <div className="box-list-content">
                <div className="list-content">
                  <span>
                    <HiCalculator />
                  </span>
                  <p>Analisa penjualan</p>
                </div>
                <span className="check">
                  <HiCheck />
                </span>
              </div>
              <div className="box-list-content">
                <div className="list-content">
                  <span>
                    <HiCurrencyDollar />
                  </span>
                  <p>Mencatat keuntungan</p>
                </div>
                <span className="check">
                  <HiCheck />
                </span>
              </div>
              <div className="box-list-content">
                <div className="list-content">
                  <span>
                    <HiChatAlt2 />
                  </span>
                  <p>Support 7 x 24 Jam</p>
                </div>
                <span className="check">
                  <HiCheck />
                </span>
              </div>
              <div className="box-list-content" style={{ opacity: "0.4" }}>
                <div className="list-content">
                  <span>
                    <HiChartPie />
                  </span>
                  <p>Export data ke Excel</p>
                </div>
                <span className="check">
                  <HiX />
                </span>
              </div>
              <div className="box-list-content" style={{ opacity: "0.4" }}>
                <div className="list-content">
                  <span>
                    <HiPresentationChartLine />
                  </span>
                  <p>AI Forcast</p>
                </div>
                <span className="check">
                  <HiX />
                </span>
              </div>
            </div>
          </div>
          <div className="option-purchase">
            <div className="btn-purchase">Purchase</div>
          </div>
        </div>
        {/* End Tier 2 Business */}
        {/* Tier 3 Enterpreneur */}
        <div className="box-price">
          <div className="content-purchase">
            <div className="title-package">
              <h3>ENTERPRENEUR</h3>
              <p>All access, full support</p>
            </div>
            <div className="content-package">
              <div className="box-list-content">
                <div className="list-content">
                  <span>
                    <HiClipboardList />
                  </span>
                  <p>Mencatat barang in dan out</p>
                </div>
                <span className="check">
                  <HiCheck />
                </span>
              </div>
              <div className="box-list-content">
                <div className="list-content">
                  <span>
                    <HiCalculator />
                  </span>
                  <p>Analisa penjualan</p>
                </div>
                <span className="check">
                  <HiCheck />
                </span>
              </div>
              <div className="box-list-content">
                <div className="list-content">
                  <span>
                    <HiCurrencyDollar />
                  </span>
                  <p>Mencatat keuntungan</p>
                </div>
                <span className="check">
                  <HiCheck />
                </span>
              </div>
              <div className="box-list-content">
                <div className="list-content">
                  <span>
                    <HiChatAlt2 />
                  </span>
                  <p>Support 7 x 24 Jam</p>
                </div>
                <span className="check">
                  <HiCheck />
                </span>
              </div>
              <div className="box-list-content">
                <div className="list-content">
                  <span>
                    <HiChartPie />
                  </span>
                  <p>Export data ke Excel</p>
                </div>
                <span className="check">
                  <HiCheck />
                </span>
              </div>
              <div className="box-list-content">
                <div className="list-content">
                  <span>
                    <HiPresentationChartLine />
                  </span>
                  <p>AI Forcast</p>
                </div>
                <span className="check">
                  <HiCheck />
                </span>
              </div>
            </div>
          </div>
          <div className="option-purchase">
            <div className="btn-purchase">Purchase</div>
          </div>
        </div>
        {/* End Tier 3 Enterpreneur */}
      </div>
    </div>
  );
}
