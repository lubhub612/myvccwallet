import React from 'react'
import {Container, Row, Col} from 'reactstrap';

import { Unlock }  from "../images/svg";
import { Setting }  from "../images/svg";

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 0.25
      }}
  />
);

export default class ZGuide extends React.Component {
  render () {
    return (      
      <Container>      
        <Row>
          <Col>
          <h1>Getting Started</h1>
            <ColoredLine color="grey" />

            <h3>1. Creating a new wallet</h3>
            <ul>
              <li>Go to <a href="https://wallet.myvcc.org">https://wallet.myvcc.org</a></li>
              <li>Enter a strong but easy to remember secret phrase. Save this somewhere and do NOT forget it.</li>
              <li>Click the <code>Unlock Button</code> (<Unlock size='15' />) on the right.</li>

                <ul><li>This creates a <a href="https://en.bitcoin.it/wiki/Deterministic_wallet">deterministic wallet</a> based on your secret phrase.</li></ul>                        
            </ul>

            <br/>

            <h3>2. Accessing an existing wallet</h3>
            <ul>
              <li>If you've created a wallet on <a href="https://wallet.myvcc.org">https://wallet.myvcc.org</a> via the secret phrase, simply re-enter the same phrase.</li>
              <li>For those with a <code>wallet.dat</code> file generated by GUI wallets. Click <code>settings</code> (<Setting size='15' color='#000'/>), select the <code>Load wallet.dat</code> option and load your <code>wallet.dat</code> file</li>
              <li>To unlock a single address, Click <code>settings</code> (<Setting size='15' color='#000'/>), select the <code>Paste private key</code> option, paste in your private key and click the unlock button (<Unlock size='15' />)</li>
            </ul>
          </Col>
        </Row>
      </Container>
    )
  }
}