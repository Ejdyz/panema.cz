import Carousel from 'react-bootstrap/Carousel';


export function FotoCarousel() {
  return (
    <Carousel variant="dark" >
      <Carousel.Item interval={99999999999} >
        <img
          className="d-block w-100"
          src="/images/trhani2.webp"
          alt="First slide"
          style={{ borderRadius: "20px" }}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item >

    </Carousel >
  );
}
