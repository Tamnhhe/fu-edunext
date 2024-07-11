import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const FAQsModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Frequently Asked Questions
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4 >If the login displays the message "AN ERROR HAS OCCURRED," please verify the system's time settings according to GMT+07:00.</h4>
                <h5 style={{ color: 'red', fontStyle: 'italic' }}>Hãy chắc chắn rằng thời gian trên đồng hồ của hệ thống (LAPTOP hoặc PC) đồng nhất với thời gian hiện tại. (Hãy xem đồng hồ trên điện thoại của bạn để xác nhận lại với PC hoặc LAPTOP)</h5>
                <ul>
                    <li>Checking and change time of laptop or pc to current times</li>
                    <img style={{ width: '150px' }} src="/assets/faq01.png" alt="FAQ 1" />
                    <div><a href="https://support.microsoft.com/en-us/windows/how-to-set-your-time-and-time-zone-dfaa7122-479f-5b98-2a7b-fa0b6e01b261#:~:text=To%20set%20your%20time%20and%20time%20zone%20in%20Windows%2010,%26%20language%20%3E%20Date%20%26%20time.">How to setting </a>
                    </div>
                    <li>Setting times</li>
                    <img style={{ width: '100%' }} src="/assets/faq02.png" alt="FAQ 2" />
                </ul>
                <h4 >Why students can not find a classroom - <span style={{ color: 'red' }}>(Not exist account)</span></h4>
                <ul>
                    <li>Because students are added to the class late, students should ask the instructor to add students to the classroom</li>
                    <li>The lecturer must click<span style={{ color: 'red' }}>"UPDATE STUDENT LIST, TIMETABLE"</span>  to sync students for a classroom</li>
                    <img style={{ width: '100%' }} src="/assets/faq03.png" alt="FAQ 3" />

                </ul>
                <h4>Why lecturer can not change the setting of a CQ?
                </h4>
                <ul>
                    <li>Default "CQs" received from FAP which, lecturer cannot be changed
                    </li>
                    <li>The lecturer only changes the settings for "CQs" created by the lecturer himself
                    </li>
                </ul>
                <h4>How to create group for slot?
                </h4>
                <ul>
                <li>Groups created for a "CQ" in the same "Slot" will be assigned to all "CQs" in the same "Slot" so lecturer only need to create groups once per "Slot".
                </li>
                <li>To create a group of a "Slot" lecturer must click on the <span style={{ color: 'red' }}>"View detail"</span> then selected "CQ" and click on the "CREATE GROUP" button.
                </li>
                <img style={{ width: '100%' }} src="/assets/faq04.png" alt="FAQ 4" />
                <img style={{ width: '100%' }} src="/assets/faq05.png" alt="FAQ 4" />
                <img style={{ width: '100%' }} src="/assets/faq06.png" alt="FAQ 4" />
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button onClick={props.onHide}>Ok</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FAQsModal;
