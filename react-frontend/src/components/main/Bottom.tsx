import IMGS from "../../constants/images";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Bottom() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto bg-[var(--color-creamySecondary)]">
      <Container className="w-[87vw] mx-auto flex flex-col justify-center h-full">
        <Row>
            <Col xs={12} md={6} lg={4}>
                <div className="flex flex-col justify-center w-full h-full">
                    <img src={IMGS.logo} className="min-w-[15vw] w-[25vw] ml-[-3vw]"/>
                    <p className="playfair-display-700 text-[var(--color-fontBold)]">A digital heaven for book lovers.</p>
                    <p className="playfair-display-400 text-[var(--color-fontLighter)]">Libhub is an online platform where our shared passion for books unites us.</p>
                </div>
            </Col>
            <Col xs={12} md={6} lg={2} className="items-center">
                <div className="flex flex-col justify-top w-full h-full mt-5">
                    <div className="w-[10vw] mx-auto">
                        <h4 className=" font-bold playfair-display-sc-regular text-[var(--color-fontBold)]">Libhub</h4>
                        <a href="#" className="pt-2 playfair-display-sc-regular text-base">About us.</a>
                        <br/>
                        <a href="#" className="pt-2 playfair-display-sc-regular text-base">More book here.</a>
                        <br/>
                        <a href="#" className="pt-2 playfair-display-sc-regular text-base">Absolutely nothing.</a>
                    </div>
                </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
                <div className="flex flex-col justify-top w-full h-full mt-5">
                    <h4 className=" font-bold playfair-display-sc-regular text-[var(--color-fontBold)]">Search something ...</h4>
                    <Container className="my-2">
                        <Row>
                            <Col xs={9} md={9} lg={9} className="p-0">
                                <input type="text" placeholder="Search..." className="border border-[var(--color-borderSearch)] px-3 w-full py-2 bg-[var(--color-backSearch)]" />
                            </Col>
                            <Col xs={3} md={3} lg={3} className="p-0">
                                <button className="bg-[var(--color-searchIcon)] text-white py-2 w-full border border-[var(--color-borderSearch)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF" className="mx-auto"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                </button>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="my-2">
                        <Row>
                            <Col xs={1} md={1} lg={1}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--color-Icon)"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z"/></svg>
                            </Col>
                            <Col xs={10} md={10} lg={10}>
                                <p className="playfair-display-400 text-[var(--color-fontLighter)]">info@libhub.com</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={1} md={1} lg={1}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--color-Icon)"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z"/></svg>
                            </Col>
                            <Col xs={10} md={10} lg={10}>
                                <p className="playfair-display-400 text-[var(--color-fontLighter)]">+36706514000</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Col>
            <Col xs={12} md={6} lg={2} className="items-center">
            <div className="flex flex-col justify-top w-full h-full mt-5">
                    <div className="w-[10vw] mx-auto">
                        <h4 className=" font-bold playfair-display-sc-regular text-[var(--color-fontBold)]">Our sources</h4>
                        <a href="#" className="pt-2 playfair-display-sc-regular text-base">Google Books</a>
                        <br/>
                        <a href="#" className="pt-2 playfair-display-sc-regular text-base">Goodreads</a>
                        <br/>
                        <a href="#" className="pt-2 playfair-display-sc-regular text-base">Absolutely nothing.</a>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
      <hr className="w-[87vw] mt-0"/>
      <Container className="w-[87vw] mx-auto flex flex-col justify-center h-full">
        <Row>
            <Col xs={6} md={6} lg={6}>
                <p className="playfair-display-400 text-[var(--color-fontLighter)] ms-3">Privacy Policy</p>
            </Col>
            <Col xs={6} md={6} lg={6} className="flex justify-end">
                <p className="playfair-display-400 text-[var(--color-fontLighter)] me-3">© Libhub - All Rights reserved.</p>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Bottom;