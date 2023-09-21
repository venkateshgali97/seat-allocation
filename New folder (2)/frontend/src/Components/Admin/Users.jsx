import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { Button, Modal, Form } from 'react-bootstrap';

import '../../Styles/user.css'
function Users() {
    const [isAddUserModalOpen, setAddUserModalOpen] = useState(false);
    const toggleAddUserModal = () => {
        
        setAddUserModalOpen((prevIsOpen) => !prevIsOpen);
    };
    return(
       <div>
        <button className='add-user-button' onClick={() => setAddUserModalOpen(true)}>Add User</button>
        <Modal show={isAddUserModalOpen} onHide={toggleAddUserModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        
                        <Form.Group controlId="Name">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="last_name"
                                // value={newUser.last_name}
                                // onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                // value={newUser.email}
                                // onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="contact">
                            <Form.Label>Contact:</Form.Label>
                            <Form.Control
                                type="text"
                                name="contact_no"
                                // value={newUser.contact_no}
                                // onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="designation">
                            <Form.Label>Designation:</Form.Label>
                            <Form.Control
                                type="text"
                                name="designation"
                                // value={newUser.designation}
                                // onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        
                    </Form>
                    {/* {!isFormValid && (
                        <p className="text-danger">Please fill in all required fields.</p>
                    )} */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
       </div>
    )
    
}

export default Users;
