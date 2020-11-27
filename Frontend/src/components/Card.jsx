import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./styles/cardStyle.css";

export default class Card extends Component {
  render() {
    return (
      <>
        {this.props.data.map((data) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={data.id}>
            <div className="card m-2 rounded-circle">
              <img
                src={data.img}
                alt="Maquillaje"
                className="card-img-top card-img"
              />
              <div className="card-body">
                <p className="card-text">{data.info}</p>

                <Link to={data.url}>
                  <Button variant="success">Comprar</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}
