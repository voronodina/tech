import React from 'react';
import {Tab} from 'react-bootstrap';
import {Tabs} from 'react-bootstrap';
import BorderExample from './BorderExample'
import Components  from './componrnts';
import BasicExample from './BasicExample';
import WithHeaderAndQuoteExample from './WithHeaderAndQuoteExample';
import KitchenSinkExample from './KitchenSinkExample'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
      <div>
        <div>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Home">
                uhkjhlkjhlo
              </Tab>
              <Tab eventKey="profile" title="Profile">
                uilkjn;lk/m;l/,
              </Tab>
              <Tab eventKey="contact" title="Contact" disabled>
                ij;lkjpj;oij;ml
              </Tab>
            </Tabs>
        </div>
        <div >
        <Components/>
        </div>
        <div className='compon'>
        <KitchenSinkExample/>
        </div>
        <div className='blokinfo'>
            <div>
              <BasicExample/>
            </div>
              <div className='pad'>
              <WithHeaderAndQuoteExample/>
              </div>
        </div>
        <div className='cards'>
          <BorderExample/>
        </div>
       
      </div>
    );
};

export default App;
