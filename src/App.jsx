import { useState } from "react";
import { Button } from "./components/ui/button";
import Footer from "./components/Footer";
import Square from "./components/Square";
import Modal from "./components/Modal";
import flork_win from "/flork-win.png";
import flork_lose from "/flork-lose.png";

const initialState = {
  we: 0,
  they: 0,
};

function App() {
  const [state, setState] = useState(initialState);
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  const renderSquares = (points) => {
    const squares = [];
    const maxPoints = 30;

    for (let i = 0; i < Math.floor(Math.min(points, maxPoints) / 5); i++) {
      const pointsInSquare = i === Math.floor(points / 5) ? points % 5 : 5;
      squares.push(<Square key={i} points={pointsInSquare} />);
    }
    if (points % 5 !== 0 && points < maxPoints) {
      squares.push(<Square key={Math.floor(points / 5)} points={points % 5} />);
    }
    return squares;
  };

  const addPoint = (team) => {
    setState((prevState) => {
      const newPoints = prevState[team] + 1;
      if (newPoints > 30) return prevState;
      const newState = { ...prevState, [team]: newPoints };

      if (newPoints === 30) {
        if (team === "we") {
          setModalContent({
            title: "GANAMOS NOSOTROS",
            content: (
              <img
                src={flork_win}
                alt="img-winner"
                className="object-contain w-36 h-36"
              />
            ),
          });
        } else {
          setModalContent({
            title: "GANARON ELLOS",
            content: (
              <img
                src={flork_lose}
                alt="img-lose"
                className="object-contain w-44 h-44"
              />
            ),
          });
        }
        setTimeout(() => {
          setModal(true);
        }, 500);
      }

      return newState;
    });
  };

  const removePoint = (team) => {
    if (state[team] > 0) {
      setState({ ...state, [team]: state[team] - 1 });
    }
  };

  const resetGame = () => {
    setState(initialState);
    closeModal();
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="text-center p-1">
          <h1 className="font-extrabold text-2xl">Anotador Truco</h1>
        </header>
        <main className="flex-grow flex flex-col p-4 pt-0 items-center gap-3">
          <section className="flex-grow flex justify-center gap-2">
            <div className="flex flex-col items-center gap-4">
              <div className="text-center">
                <h3 className="font-bold text-xl">Nosotros</h3>
                <h3 className="font-extrabold text-xl">{state.we}</h3>
              </div>
              <div className="flex-grow flex flex-col gap-2">
                {renderSquares(state.we)}
              </div>
              <div className="flex gap-2">
                <Button onClick={() => addPoint("we")}>+</Button>
                <Button onClick={() => removePoint("we")}>-</Button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
              <div className="text-center">
                <h3 className="font-bold text-xl">Ellos</h3>
                <h3 className="font-extrabold text-xl">{state.they}</h3>
              </div>
              <div className="flex-grow flex flex-col gap-2">
                {renderSquares(state.they)}
              </div>
              <div className="flex gap-2">
                <Button onClick={() => addPoint("they")}>+</Button>
                <Button onClick={() => removePoint("they")}>-</Button>
              </div>
            </div>
          </section>
          <Button onClick={resetGame}>Reiniciar</Button>
        </main>
        <Footer />
      </div>
      <Modal
        content={modalContent}
        closeModal={closeModal}
        open={modal}
        resetGame={resetGame}
      />
    </>
  );
}

export default App;
