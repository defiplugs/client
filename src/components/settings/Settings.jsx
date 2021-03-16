import React, { useState } from 'react';
import { Select, Tabs, Checkbox } from 'antd';
import { SketchPicker } from 'react-color';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Web3 from 'web3';

import './Settings.scss';

function Settings({ accounts }) {
  const { ethereum } = window;
  const { Option } = Select;
  const { TabPane } = Tabs;
  const [shapeSelect, setShapeSelect] = useState(1);
  const [color, setColor] = useState('#ffffff');
  const [colorBtn, setColorBtn] = useState('#1c19f3');
  const [btnTxt, setBtnTxt] = useState('Buy Now');
  const [simpleTrx, setSimpleTrx] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('usdc');

  const changeCurrency = (value) => {
    setSelectedCurrency(value);
  };

  const amt = 1;

  const transferAmount = Web3.utils.toHex(
    Web3.utils.toWei(amt.toString(), 'ether')
  );

  console.log(transferAmount);

  const buttonShape = () => {
    if (shapeSelect === 1) {
      return '50px';
    }
    if (shapeSelect === 2) {
      return '8px';
    }
    if (shapeSelect === 3) {
      return '0';
    }
  };

  const codeString = `
  <button id="defiplugs-btn">${btnTxt}</button>
  <p id="defiplugs-connect">Connect wallet</p>
  <!--You can always style the appearance and placement as you like on your site -->
  <style>
    #defiplugs-btn {
       padding: 10px 25px;
       border: none;
       font-weight: 700;
      border-radius: ${buttonShape()};
      background: ${colorBtn};
      color: ${color};
      cursor: pointer;
    }
    #defiplugs-connect {
      color: blue;
      cursor: pointer;
      text-decoration: underline;
    }
  </style>
   
   <script>
      const defiPlugsConnect = document.querySelector("#defiplugs-connect");
      window.ethereum.request({ method: 'eth_accounts' }).then((addr) => {
        if (addr.length > 0) {
          defiPlugsConnect.style.display = 'none'
        }
      });
      let userWallet = ''
      defiPlugsConnect.addEventListener('click', ()=> {
        window.ethereum.request({ method: 'eth_requestAccounts' })
          .then(wallet => {
            userWallet = wallet[0]
            defiPlugsConnect.style.display = 'none'
          })
      });

      const defiPlugsBtn = document.querySelector("#defiplugs-btn");
      defiPlugsBtn.addEventListener('click', ()=> {
        window.ethereum
          .request({
           method: 'eth_sendTransaction',
           params: [
            {
              from: userWallet,
              to: '${accounts}',
              value: '${transferAmount}',
              gasPrice: '0x09184e72a000',
              gas: '0x2710',
            },
           ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);
      });
   </script>
 `;

  const testTrx = () => {
    let web3 = new Web3(window.ethereum);
    let tokenAddress = '0xfad45e47083e4607302aa43c65fb3106f1cd7607';
    let toAddress = accounts;
    let fromAddress = accounts;
    // Use BigNumber
    let decimals = web3.utils.toBN(9);
    let amount = web3.utils.toBN(100);
    let minABI = [
      // transfer
      {
        constant: false,
        inputs: [
          {
            name: '_to',
            type: 'address',
          },
          {
            name: '_value',
            type: 'uint256',
          },
        ],
        name: 'transfer',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        type: 'function',
      },
    ];
    // Get ERC20 Token contract instance
    let contract = new web3.eth.Contract(minABI, tokenAddress);
    // calculate ERC20 token amount
    let value = amount.mul(web3.utils.toBN(10).pow(decimals));
    // call transfer function
    contract.methods
      .transfer(toAddress, value)
      .send({ from: fromAddress })
      .on('transactionHash', function (hash) {
        console.log(hash);
      });
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
                <button
                  style={{ background: shapeSelect === 1 ? '#e5ebff' : 'none' }}
                  onClick={() => setShapeSelect(1)}
                >
                  Button
                </button>
                <button
                  style={{ background: shapeSelect === 2 ? '#e5ebff' : 'none' }}
                  onClick={() => setShapeSelect(2)}
                >
                  Button
                </button>
                <button
                  style={{ background: shapeSelect === 3 ? '#e5ebff' : 'none' }}
                  onClick={() => setShapeSelect(3)}
                >
                  Button
                </button>
              </div>
              <p style={{ marginLeft: '20px' }}>Text</p>
              <input
                type="text"
                value={btnTxt}
                onChange={(e) => setBtnTxt(e.target.value)}
              />
            </div>

            <div className="color-picker mt-30">
              <div>
                <p>Button Color</p>
                <SketchPicker
                  color={colorBtn}
                  onChangeComplete={(color) => {
                    setColorBtn(color.hex);
                  }}
                />
              </div>
              <div>
                <p>Text Color</p>
                <SketchPicker
                  color={color}
                  onChangeComplete={(color) => {
                    setColor(color.hex);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="config-box">
            <div className="config-box-child">
              <Checkbox
                onChange={(e) => {
                  setSimpleTrx(e.target.checked);
                }}
              >
                Simple Transaction (check this if you dont need user details eg.
                accepting donation)
              </Checkbox>
            </div>
            <div className="config-box-child  mt-30">
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
          <div className="config-box">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Preview" key="1">
                <div className="preview">
                  <button
                    onClick={testTrx}
                    style={{
                      color: color,
                      background: colorBtn,
                      borderRadius: buttonShape(),
                    }}
                  >
                    {btnTxt}
                  </button>
                  <p>Connect wallet</p>
                </div>
              </TabPane>
              <TabPane tab="Code" key="2">
                <SyntaxHighlighter
                  className="highlighter"
                  language="htmlbars"
                  showLineNumbers
                  style={atomOneDark}
                  wrapLines={true}
                >
                  {codeString}
                </SyntaxHighlighter>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
