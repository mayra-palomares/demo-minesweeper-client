import React, { useState, useEffect } from 'react';
import { 
    Button, 
    Modal,
    ModalHeader, 
    ModalBody, 
    ModalFooter 
} from 'reactstrap';

export const GameModal = props => {

    const [modal, setModal] = useState({});
    
    useEffect(() => {
        const {title, open, closeModal} = props;
        setModal({
            title,
            open,
            closeModal
        })
    }, [props])

    return (
        <div>
            <Modal isOpen={modal.open} className={modal.className}>
            <ModalHeader>{modal.title}</ModalHeader>
            <ModalBody>
                {props.children}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={modal.closeModal}>Continue</Button>{' '}
            </ModalFooter>
            </Modal>
        </div>
    )
}