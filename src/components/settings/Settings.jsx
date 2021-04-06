import React, { useState } from 'react';
import { Select, Tabs, Checkbox } from 'antd';
import { SketchPicker } from 'react-color';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Web3 from 'web3';

import './Settings.scss';

function Settings({ account }) {
  const { ethereum } = window;
  const { Option } = Select;
  const { TabPane } = Tabs;
  const [shapeSelect, setShapeSelect] = useState(1);
  const [color, setColor] = useState('#ffffff');
  const [colorBtn, setColorBtn] = useState('#1c19f3');
  const [btnTxt, setBtnTxt] = useState('Buy with USDC');
  const [withUserInput, setWithUserInput] = useState(true);
  const [donationModel, setDonationModel] = useState(false);

  const [donationAmount, setDonationAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('usdc');
  const [price, setPrice] = useState(0);

  const tokenList = {
    usdc: {
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      decimal: 6,
    },
    dai: {
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      decimal: 18,
    },
    usdt: {
      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      decimal: 6,
    },
    hoge: {
      address: '0xfad45e47083e4607302aa43c65fb3106f1cd7607',
      decimal: 9,
    },
  };

  const changeCurrency = (value) => {
    setSelectedCurrency(value);
  };

  const amt = 1;

  const transferAmount = Web3.utils.toHex(
    Web3.utils.toWei(amt.toString(), 'ether')
  );

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

  const priceStringData = () => {
    if (donationModel) {
      return '';
    } else {
      return `data-dplgsprice="${price}"`;
    }
  };

  const codeString = `
  <div class="defiplugs-box">
    ${
      withUserInput
        ? '<input class="defiplugs-input" id="defiplugs-name" type="text" placeholder="Name" />'
        : ''
    }
    ${
      withUserInput
        ? '<input class="defiplugs-input" id="defiplugs-email" type="email" placeholder="Email" />'
        : ''
    }
    ${
      donationModel
        ? '<input class="defiplugs-input" id="defiplugs-amount" type="number" placeholder="Amount" />'
        : ''
    }
    <button id="defiplugs-btn" ${priceStringData()} data-dplgstoken="${selectedCurrency}" data-dplgsdonation="${
    donationModel ? 1 : 0
  }" data-dplgsinput="${withUserInput ? 1 : 0}">${btnTxt}</button>
    <p id="defiplugs-connect" data-dplgsaccount="${account}">Connect wallet (MetaMask)</p>
  </div>
  <!--You can always style the appearance and placement as you like on your site -->
  <style>
    .defiplugs-box {
      width: 300px;
      text-align: center;
    }
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
    .defiplugs-input {
      display: block;
      font-size: 14px;
      margin: 0 auto 10px auto;
      padding: 8px;
      border-radius: 3px;
      border: 1px #688dfd solid;
    }
  </style>
  <script>
    //If you omit the user details from the preview, you need to create an object with the same name like below.
    //You can add whatever property/user details as you like.
    //Leave empty if you don't need the user details.
    const defiplugsUserDetails = {
      name: '',
      email: ''
      //you can modify/add any property here  
    }

    //callback function invoked when transaction done
    function defiPlugsTrxDone(){
      //do whatever you need to do here
    }
  </script> 
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/web3@1.3.4/dist/web3.min.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/defiplugs/connector/connector.js"></script>
 `;

  // const testTrx = () => {
  //   let web3 = new Web3(ethereum);
  //   let tokenAddress = '0x07865c6e87b9f70255377e024ace6630c1eaa37f';
  //   let toAddress = accounts;
  //   let fromAddress = accounts;
  //   // Use BigNumber
  //   let decimals = web3.utils.toBN(6);
  //   let amount = web3.utils.toBN(donationModel ? donationAmount : price);
  //   let minABI = [
  //     // transfer
  //     {
  //       constant: false,
  //       inputs: [
  //         {
  //           name: '_to',
  //           type: 'address',
  //         },
  //         {
  //           name: '_value',
  //           type: 'uint256',
  //         },
  //       ],
  //       name: 'transfer',
  //       outputs: [
  //         {
  //           name: '',
  //           type: 'bool',
  //         },
  //       ],
  //       type: 'function',
  //     },
  //   ];
  //   // Get ERC20 Token contract instance
  //   let contract = new web3.eth.Contract(minABI, tokenAddress);
  //   // calculate ERC20 token amount
  //   let value = amount.mul(web3.utils.toBN(10).pow(decimals));
  //   // call transfer function
  //   contract.methods
  //     .transfer(toAddress, value)
  //     .send({ from: fromAddress })
  //     .on('receipt', function (hash) {
  //       //hash.from is the sender address
  //       fetch('http://defiplugs.herokuapp.com', {
  //         method: 'POST',
  //         cache: 'no-cache',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           name: 'name',
  //           email: 'email',
  //           tx: hash.transactionHash,
  //           account: accounts,
  //         }),
  //       }).then(() => console.log(hash));
  //     });
  // };

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
            <p className="config-p">Configuration</p>
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

          <div className="config-box bg-linear">
            <div className="config-box-child">
              <Checkbox
                checked={withUserInput}
                onChange={(e) => {
                  setWithUserInput(e.target.checked);
                }}
              >
                With user input
              </Checkbox>
              <Checkbox
                checked={donationModel}
                onChange={(e) => {
                  setDonationModel(e.target.checked);
                }}
              >
                Donation model
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
                {/* <input type="text" placeholder="Token contract (erc20 only)" />
                <button>Set</button> */}
              </div>
            </div>
            <div className="config-box-child mt-30">
              <p>Price</p>
              <input
                type="number"
                disabled={donationModel ? true : false}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <p style={{ fontWeight: '400' }}>{selectedCurrency}</p>
            </div>
          </div>
        </div>

        <div className="section-grid-child">
          <div className="config-box">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Preview" key="1">
                <div className="preview">
                  <div style={{ display: withUserInput ? 'block' : 'none' }}>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                  </div>
                  <input
                    type="number"
                    placeholder="Amount"
                    style={{
                      display: donationModel ? 'block' : 'none',
                      marginBottom: '0',
                    }}
                    value={donationAmount}
                    onChange={(e) => {
                      setDonationAmount(e.target.value);
                    }}
                  />

                  <button
                    //onClick={testTrx}
                    style={{
                      color: color,
                      background: colorBtn,
                      borderRadius: buttonShape(),
                    }}
                  >
                    {btnTxt}
                  </button>

                  <p>Connect wallet (MetaMask)</p>
                  <div className="preview-tips">
                    <p>NOTE:</p>
                    <p>- Make sure to ADJUST your button text.</p>
                    <p>
                      - If you choose to ommit user input, make sure to include
                      the necessary object in the script (see code), otherwise
                      there won't be any user details record (only blockchain
                      transaction record) on database for the corresponding
                      transaction.
                    </p>
                  </div>
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
