import { useEffect } from "react";
import animalData from "../animalData.json";
import { useState } from "react";

const Worldcup = () => {
  const [shuffleAnimal, setShuffleAnimal] = useState();

  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      return -1;
    });
    console.log(shuffleAnimalData);
  }, []);
  return <div>Worldcup</div>;
};

export default Worldcup;
