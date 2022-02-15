import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
`;

const ModalMovie = (props) => {
  console.log(props.movieData);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.movieData.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Img
          src={`https://image.tmdb.org/t/p/w1280/${props.movieData.poster_path}`}
        />
        <p>{props.movieData.overview}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <form
          action="https://cinematology.herokuapp.com/addMovie"
          method="POST"
        >
          <input
            type="text"
            name="comment"
            placeholder="Add a comment if you want"
          />
          <Button type="submit">Add to favorites page</Button>
        </form>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalMovie;
