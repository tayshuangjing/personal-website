import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Home.css';

export const Home = () => {
  
    return (
      <div className="home" id="home">
        
          <Row>
            <Col xs={12} md={6} xl={7}>
                <div>
                  <h1>Hi! I'm Tay</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button onClick={() => console.log('connect')}>Let’s Connect</button>
                </div>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <div>
                    <img src="" alt="Home Img"/>
                </div>
            </Col>
          </Row>
        
      </div>
    )
  }