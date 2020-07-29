import React, { useState, useEffect } from "react";
import "./RightAside.css";
import { Container, Row, Col } from 'reactstrap';
import ModalComp from "./ModalComp/ModalComp";

export function RightAside(props) {
    const [news,setNews] = useState([]);

    useEffect(()=>{
        fetch("http://newsapi.org/v2/everything?q=covid-19&apiKey=ecc35603d76b4d2bad4b5ee335b6ff80")
            .then(response => response.json())
            .then(response => {
                setNews(response.articles);
            })
    },[]);

    return(
        <Container className={"RightAside"}>
            <div className={"RightAsideRow"}>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <h4 className={"subTitle"}>Today news</h4>
                    </Col>
                </Row>
                <Row>
                    {
                        news.map((item,idx) =>
                            <Col className={"cart p-2"} key={idx} xs="12" sm="12" md="6" lg="4" xl="12">
                                <div className={"divCart"}>
                                    <h6><b>{item.title.length>50 ? item.title.slice(0,50) : item.title} </b></h6>
                                    <img src={item.urlToImage} alt=""/>
                                    <p className={"mt-2 mb-0"}>By {item.source.name} {item.publishedAt.slice(0,10)}</p>
                                    <small>{item.author}</small>

                                    <ModalComp item = {item}/>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </div>
        </Container>
    )
}