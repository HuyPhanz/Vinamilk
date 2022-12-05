// import ButtonCustom from "./buttons/ButtonCustom";
// import "./Footer.scss";
export default function Footer(props) {
    return (
        <footer className="pt-5" id="footer">
            <div className="container">
                <div className="row d-flex" id="ft">
                    <div className="col-3">
                        <h5 className="text-center">
                            E-Toeic
                        </h5>
                        <p>
                            E-Toeic offers a superior - lean
                            - efficient TOEIC learning
                            solution. E-Toeic always
                            provides you with the most
                            recent and up-to-date exam, as
                            near to the actual thing as
                            possible.
                        </p>
                    </div>
                    <div className="col-3" id="brand">
                        <h6 className="text-center">
                            Contact
                        </h6>
                        <ul className="row">
                            {/* <li>
                                <i className="fa-solid fa-location-dot" id="icon"></i>
                            </li> */}
                            <p>
                                18 Tran Phu street, Ha Dong
                                district, Ha Noi city
                            </p>
                            <p>(0236) 3 652 498</p>
                            <p>etoeic@education.vn</p>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h6 className="text-center">
                            Services
                        </h6>
                        <p className="text-center">FAQ</p>
                        <p className="text-center">
                            Terms of use
                        </p>
                        <p className="text-center">
                            Private Policy
                        </p>
                        <p className="text-center">
                            Discount System
                        </p>
                    </div>
                    <div className="col-3">
                        <h6 className="text-center1">
                            Get in touch
                        </h6>
                        <p>
                            Enter your your address in the
                            space below to receive
                            information about the most
                            recent exam questions.
                        </p>
                        <div className="d-flex position-relative footer__form">
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                placeholder="Type your email here"
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                            />
                            <ButtonCustom className="position-absolute">
                                Send
                            </ButtonCustom>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
