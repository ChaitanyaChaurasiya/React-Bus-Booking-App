import "./seats.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSelectedSeats } from "../../store/seatsSlice";
const Seats = (props) => {
  const { type, selectedSeat } = props;
  let seatEvenNumber = [];
  let seatEvenAlphabet = [];
  let seatOddNumber = [];
  let seatOddAlphabet = [];

  for (let i = 0; i < 14; i++) {
    if (i % 2 === 0) {
      seatOddNumber.push(i + 1);
      seatOddAlphabet.push(String.fromCharCode(65 + i));
    } else {
      seatEvenNumber.push(i + 1);
      seatEvenAlphabet.push(String.fromCharCode(65 + i));
    }
  }
  const [seatSelect, setSeatSelect] = useState(false);
  const dispatch = useDispatch();

  const seatSelectHandle = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setSeatSelect(!seatSelect);
    dispatch(addSelectedSeats(event.target.value));
  };

  return (
    <>
      <div className="seatBox">
        <div className="row">
          {type === "Lower"
            ? seatOddNumber.map((num) => {
                return (
                  <button
                    className={
                      !selectedSeat.includes(`${num}A`)
                        ? "seats"
                        : "seats select"
                    }
                    value={`${num}A`}
                    onClick={seatSelectHandle}
                    key={num}
                  >
                    {`${num}A`}
                  </button>
                );
              })
            : seatEvenNumber.map((num) => {
                return (
                  <button
                    className={
                      !selectedSeat.includes(`${num}A`)
                        ? "seats"
                        : "seats select"
                    }
                    onClick={seatSelectHandle}
                    value={`${num}A`}
                    key={num}
                  >
                    {`${num}A`}
                  </button>
                );
              })}
        </div>
        <div className="row">
          {type === "Lower"
            ? seatOddNumber.map((num) => {
                return (
                  <button
                    className={
                      !selectedSeat.includes(`${num}B`)
                        ? "seats"
                        : "seats select"
                    }
                    onClick={seatSelectHandle}
                    value={`${num}B`}
                    disabled
                    key={num}
                  >
                    {`${num}B`}
                  </button>
                );
              })
            : seatEvenNumber.map((num) => {
                return (
                  <button
                    className={
                      !selectedSeat.includes(`${num}B`)
                        ? "seats"
                        : "seats select"
                    }
                    onClick={seatSelectHandle}
                    value={`${num}B`}
                    key={num}
                  >
                    {`${num}B`}
                  </button>
                );
              })}
        </div>
        <div className="row1">
          {type === "Lower"
            ? seatOddAlphabet.map((letter) => {
                return (
                  <button
                    className={
                      !selectedSeat.includes(letter) ? "seats" : "seats select"
                    }
                    onClick={seatSelectHandle}
                    value={letter}
                    key={letter}
                  >
                    {letter}
                  </button>
                );
              })
            : seatEvenAlphabet.map((letter) => {
                return (
                  <button
                    className={
                      !selectedSeat.includes(letter) ? "seats" : "seats select"
                    }
                    onClick={seatSelectHandle}
                    value={letter}
                    disabled
                    key={letter}
                  >
                    {letter}
                  </button>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default Seats;
