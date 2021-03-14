import Reactm, { useState } from 'react';
import { Select } from 'antd';

import './Settings.scss';

function Settings() {
  const { Option } = Select;
  const [selectedCurrency, setSelectedCurrency] = useState('usdc');
  const changeCurrency = (value) => {
    setSelectedCurrency(value);
  };
  return (
    <div className="settings">
      <div className="section-grid">
        <div className="section-grid-child">
          <div className="config-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-adjustments-horizontal"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#1c19f3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="14" cy="6" r="2" />
              <line x1="4" y1="6" x2="12" y2="6" />
              <line x1="16" y1="6" x2="20" y2="6" />
              <circle cx="8" cy="12" r="2" />
              <line x1="4" y1="12" x2="6" y2="12" />
              <line x1="10" y1="12" x2="20" y2="12" />
              <circle cx="17" cy="18" r="2" />
              <line x1="4" y1="18" x2="15" y2="18" />
              <line x1="19" y1="18" x2="20" y2="18" />
            </svg>
            <p>Configuration</p>
          </div>
          <div className="config-box">
            <div className="config-box-child">
              <p>Shape</p>
              <div className="btn-shape">
                <button>Button</button>
                <button>Button</button>
                <button>Button</button>
              </div>
            </div>
            <div className="config-box-child mt-30">
              <p>Text</p>
              <input type="text" />
            </div>
          </div>

          <div className="config-box">
            <div className="config-box-child">
              <p>Currency</p>
              <div className="btn-shape">
                <Select
                  defaultValue={selectedCurrency}
                  style={{ width: 120 }}
                  onChange={changeCurrency}
                >
                  <Option value="usdt">USDT</Option>
                  <Option value="usdc">USDC</Option>
                  <Option value="dai">DAI</Option>
                  <Option value="hoge">HOGE</Option>
                </Select>
              </div>
            </div>
            <div className="config-box-child mt-30">
              <p>Price</p>
              <input type="number" />
              <p style={{ fontWeight: '400' }}>{selectedCurrency}</p>
            </div>
          </div>
        </div>

        <div className="section-grid-child">
          <div className="config-header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-eye"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#1c19f3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="2" />
              <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
            </svg>
            <p>Preview</p>
          </div>
          <div className="config-box">
            <p>config</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
