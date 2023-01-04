import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import {
  CardBody,
  Cardh2,
  CardImg,
  CardRight,
  CardRightBottom,
  CardRightIn,
  CardRightSpan,
  IconH6,
  IconSpan,
  ImgDiv,
} from "./CharaStyled";

const Chara = ({ name, image, created }) => {
  return (
    <CardBody>
      <ImgDiv>
        <CardImg src={image} alt="" />
      </ImgDiv>
      <CardRight>
        <div>
          <Cardh2>{name}</Cardh2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
            rem architecto earum aliquam dicta aspernatur quaerat ex ducimus
            dolore consequuntur.
          </p>
        </div>
        <CardRightBottom>
          <CardRightSpan>{created}</CardRightSpan>
          <CardRightIn>
            <IconSpan>
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </IconSpan>
            <IconH6>Beğen</IconH6>
          </CardRightIn>
        </CardRightBottom>
      </CardRight>
    </CardBody>
  );
};

export default Chara;
