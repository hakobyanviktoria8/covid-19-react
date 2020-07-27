import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./ModalComp.css";

const ModalComp = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="secondary" onClick={toggle}>Read more</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle} className={"text-center"}>{props.item.title}</ModalHeader>
                <ModalBody>
                    <p>{props.item.description}</p>
                    <img className ={"w-100"} src={props.item.urlToImage} alt=""/>
                    <p>{props.item.content}
                        <a href={props.item.url}> Read more</a>
                    </p>
                    <p>By {props.item.source.name} {props.item.publishedAt.slice(0,10)}</p>
                </ModalBody>
                <ModalFooter className={"modalFooter"}>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ModalComp;