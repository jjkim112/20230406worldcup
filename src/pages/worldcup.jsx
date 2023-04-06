import { useEffect } from "react";
import animalData from "../animalData.json";
import { useState } from "react";
import AnimalCard from "../components/AnimalCard";
import WinAnimalCard from "../components/WinAnimalCard";

function Worldcup() {
  const [shuffleAnimal, setShuffleAnimal] = useState();
  const [choice, setChoice] = useState(0);
  const [nextRound, setNextRound] = useState([]);
  const [end, setEnd] = useState(16);

  const onClickChoice = (v) => () => {
    setChoice(choice + 2);
    //0,1번 비교후 2,3번 비교해야하므로 그다음 4,5번 비교해야하므로//
    // setNextRound(v);
    //v를 그대로 담으면 그냥 넥스트라운드가 그 값 1개로 계속 갱신된다. 우리는 이전 담긴것 새로담긴것 모두가 필요하다[기존,새로]
    setNextRound([...nextRound, v]);
    //리액트를 푸쉬를 이렇게 쓴다//
  };

  useEffect(() => {
    let shuffleAnimalData = animalData.sort(() => {
      return Math.random() - 0.5;
      //1집어넣으면 원래순서 -1넣으면 뒤집혀서 그냥 sort() 만하면 ㄱㄴㄷ 순이라고하심 근데 sort()안에 함수넣어서 -1 1넣는 작업한것//
    });
    setShuffleAnimal(shuffleAnimalData);
  }, []);

  useEffect(() => {
    if (choice === end) {
      setShuffleAnimal(nextRound);
      //넥스트 라운드에 담긴 동물들을 셔플 애니멀로 옮긴다.//
      setNextRound([]);
      //넥스트 라운드 초기화 []
      setEnd(end / 2);
      //16강->8강 즉 end값을 변화
      setChoice(0);
      //초이스값도 0으로 초기화
    }
  }, [choice]);

  return (
    <div className="bg-pink-200 min-h-screen flex justify-center items-center">
      {shuffleAnimal &&
        (end === 1 ? (
          <WinAnimalCard animal={shuffleAnimal[choice]} />
        ) : (
          <>
            <AnimalCard
              animal={shuffleAnimal[choice]}
              choice={choice}
              onClickChoice={onClickChoice}
            />
            <div className="text-2xl mt-4 px-4 py-2 rounded-md">VS</div>
            <AnimalCard
              animal={shuffleAnimal[choice + 1]}
              choice={choice + 1}
              onClickChoice={onClickChoice}
            />
          </>
        ))}
    </div>
  );
}

export default Worldcup;
