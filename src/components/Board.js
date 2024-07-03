import './Board.css';
import { useState, useEffect } from 'react';
import Square1 from "./Square"

const Board1 = () => {

    const [squares, setSquares] = useState(Array(9).fill(''));
    const [turn, setTurn] = useState('X');
    const [winner, setWinner] = useState('');
    const [processed, setProcessed] = useState(0);    

    useEffect(() => {        
        if (processed > 4)
        {
            const winnerCombinations = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [6, 4, 2]
            ];
            
            for(let combination of winnerCombinations){
                console.log("calc!");
                let [a, b, c] = combination;
                if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){              
                setWinner(squares[a]);
                break;              
                }
            }
        }
    }, [squares, processed])

    const handleClick = (index) => {        
        if (index < 0 || index > 9 || squares[index] || winner) return;
        const newBoard = [...squares]; //клонируем массив
        newBoard.splice(index, 1, turn);
        setSquares(newBoard);
        const newTurn = turn === 'X' ? '0' : 'X'
        setTurn(newTurn);
        setProcessed(e=> e+1);
    }

    const handleRestart = () => {
        setSquares(Array(9).fill(''));
        setTurn('X');
        setWinner('');
        setProcessed(0);
    }

    return (
        <div className="container1">
            <h1>Крестики-нолики</h1>
            {winner && <h2>Победитель: {winner}</h2>}
            <div className="board1">
                {squares.map((elem, index) => {
                    return (
                        <span key={index} className='tictacspan'>
                        <Square1 value={elem} index={index} handleClick={handleClick}></Square1>     
                        </span>
                    );
                })}
            </div>
            <button onClick={handleRestart} className='restart'>Начать заново</button>
        </div>
    )
}

export default Board1