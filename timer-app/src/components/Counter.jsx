import {useState, useEffect} from'react';

function Counter(){
    const[count, setCount] = useState(0);
    //по принципу compinentDidMount componentDidUpdate
    useEffect(() => {
    //Обновляем заголовок документа, используя API браузера
    document.title = `Вы нажали ${count} раз`;
});
    const handleClick = () => {
        setCount(count + 1);
        };

    return (
        <div> 
            <button onClick={handleClick}>{count}</button> 
            <p>Вы нажали {count} раз</p>
        </div>
        );
    }


export default Counter;