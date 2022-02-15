import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";
import ModalMovie from "../modalMovie/ModalMovie";

const SingleMovieCard = styled(Card)`
  width: 15vw;
  height: 100%;
  margin: 2.5vh;
  border-radius: 10%;
`;

const StyledImg = styled(Card.Img)`
  width: 15vw;
  height: 45vh;
  border-top-right-radius: 10%;
  border-top-left-radius: 10%;
`;

const StyledText = styled(Card.Text)`
  font-size: 12px;
`;

const Movie = (props) => {
  const [modalShow, setModalShow] = useState(false);
  //   onClick={() => setModalShow(true)} butt
  //   onHide={() => setModalShow(false)}
  return (
    <>
      <SingleMovieCard key={props.data.title}>
        <StyledImg
          variant="top"
          src={`https://image.tmdb.org/t/p/w1280/${props.data.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <StyledText>{props.data.overview}</StyledText>
          <Button variant="secondary" onClick={() => setModalShow(true)}>
            Add To Favorites
          </Button>
        </Card.Body>
      </SingleMovieCard>
      <ModalMovie
        show={modalShow}
        movieData={props.data}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Movie;
