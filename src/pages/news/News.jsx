import axios from "axios";
import React, { useEffect, useState } from "react";
import Chara from "./character/Chara";
import { Contant, NavTitle, NewsContent, Title } from "./NewStyled";

const News = () => {
  const [characters, setCharacters] = useState([]);

  const BASE_URL = "https://rickandmortyapi.com/api/character";

  //! karakterler çekildi
  const getCharacter = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setCharacters(data.results);
      console.log(data.results);
    } catch (error) {}
  };

  useEffect(() => {
    getCharacter();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NavTitle>
        <Title>Next</Title>
        <Contant>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
          doloremque.
        </Contant>
      </NavTitle>
      <NewsContent>
        
      {characters.map((character) => {
        return <Chara key={character.id} {...character} />;
      })}
      </NewsContent>
    </>
  );
};

export default News;
