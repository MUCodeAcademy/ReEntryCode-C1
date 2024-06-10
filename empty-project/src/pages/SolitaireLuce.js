import '../css/Solitaire.css';
import { useEffect, useState } from 'react';

function Solitaire() {
  // Imports the images from the cards folder. 'true' is telling it to include all folders within the cards folder
  const images = require.context('../cards', true);

  // Loops through the images and puts all of them in an array
  const imageList = images.keys().map(image => images(image));

  const [cards, setCards] = useState(shuffle(imageList));

  const [clicked, setClicked] = useState();
  const [clickedArray, setClickedArray] = useState();
  const [firstIndex, setFirstIndex] = useState();
  
  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);
  const [array3, setArray3] = useState([]);
  const [array4, setArray4] = useState([]);
  const [array5, setArray5] = useState([]);
  const [array6, setArray6] = useState([]);
  const [array7, setArray7] = useState([]);
  const [array8, setArray8] = useState([]);
  
  const [hold1, setHold1] = useState([]);
  const [hold2, setHold2] = useState([]);
  const [hold3, setHold3] = useState([]);
  const [hold4, setHold4] = useState([]);

  const [match1, setMatch1] = useState([]);
  const [match2, setMatch2] = useState([]);
  const [match3, setMatch3] = useState([]);
  const [match4, setMatch4] = useState([]);

  function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  // Sets the 8 different arrays
  function dealCards() {
    // For the first 4 arrays, deal 7 cards
    // You can use pop() to remove and return the last element in an array
    
    // For the last 4 arrays, deal 6
    let tempArray = [];

    for (let i = 0; i < 7; i++) {
      tempArray.push(cards.pop());
      console.log(tempArray);
    }
    setArray1(tempArray);
    
    tempArray = [];

    for (let i = 0; i < 7; i++) {
      tempArray.push(cards.pop());
      console.log(tempArray);
    }
    setArray2(tempArray);

    tempArray = [];

    for (let i = 0; i < 7; i++) {
      tempArray.push(cards.pop());
      console.log(tempArray);
    }
    setArray3(tempArray);

    tempArray = [];

    for (let i = 0; i < 7; i++) {
      tempArray.push(cards.pop());
      console.log(tempArray);
    }
    setArray4(tempArray);

    tempArray = [];

    for (let i = 0; i < 6; i++) {
      tempArray.push(cards.pop());
      console.log(tempArray);
    }
    setArray5(tempArray);

    tempArray = [];

    for (let i = 0; i < 6; i++) {
      tempArray.push(cards.pop());
      console.log(tempArray);
    }
    setArray6(tempArray);

    tempArray = [];

    for (let i = 0; i < 6; i++) {
      tempArray.push(cards.pop());
      console.log(tempArray);
    }
    setArray7(tempArray);

    tempArray = [];

    for (let i = 0; i < 6; i++) {
      tempArray.push(cards.pop());
      console.log(tempArray);
    }
    setArray8(tempArray);

    tempArray = [];
  }

  // When they click on a card
  function clickedCard(array, index) {
    // Keep track of which column they clicked on
    if (!clicked) {
      if (index == array.length - 1) {
        setClicked([array[index]]);
        console.log(array[index]);
      } else {
        let tempArray = [];
        for (let i = index; i < array.length; i++) {
          tempArray.push(array[i]);
        }
        setClicked(tempArray);
        console.log(tempArray);
      }
      setFirstIndex(index);
      setClickedArray(array);
    } else {
      if (array !== clickedArray) {
        switch (array) {
          case array1:
            setArray1(prevArray => [...prevArray, ...clicked]);
            break;
          case array2:
            setArray2(prevArray => [...prevArray, ...clicked]);
            break;
          case array3:
            setArray3(prevArray => [...prevArray, ...clicked]);
            break;
          case array4:
            setArray4(prevArray => [...prevArray, ...clicked]);
          case array5:
            setArray5(prevArray => [...prevArray, ...clicked]);
            break;
          case array6:
            setArray6(prevArray => [...prevArray, ...clicked]);
            break;
          case array7:
            setArray7(prevArray => [...prevArray, ...clicked]);
            break;
          case array8:
            setArray8(prevArray => [...prevArray, ...clicked]);
        }
        switch (clickedArray) {
          case array1:
              setArray1(prevArray => prevArray.filter((item, ind) => ind < firstIndex))    
              break;
            case array2:
              setArray2(prevArray => prevArray.filter((item, ind) => ind < firstIndex));
              break;
            case array3:
              setArray3(prevArray => prevArray.filter((item, ind) => ind < firstIndex));
              break;
            case array4:
              setArray4(prevArray => prevArray.filter((item, ind) => ind < firstIndex));
              break;
            case array5:
              setArray5(prevArray => prevArray.filter((item, ind) => ind < firstIndex));
              break;
            case array6:
              setArray6(prevArray => prevArray.filter((item, ind) => ind < firstIndex));
              break;
            case array7:
              setArray7(prevArray => prevArray.filter((item, ind) => ind < firstIndex));
              break;
            case array8:
              setArray8(prevArray => prevArray.filter((item, ind) => ind < firstIndex));
              break;
          }
          setClicked();
      }
    }
  }

  // Run one these functions when they click on a cell at the top
  function hold(array) {
    if (clicked && array.length == 0) {
    // If clicked is an array of cards and they click on one of the cells at the top,
    // only put the last card of clicked in the array.
    // Remove the card from its array
    switch (clickedArray) {
      case array1:
          setArray1(prevArray => prevArray.filter(item => item !== clicked[clicked.length - 1]));       
          break;
        case array2:
          setArray2(prevArray => prevArray.filter(item => item !== clicked[clicked.length - 1]));
          break;
        case array3:
          setArray3(prevArray => prevArray.filter(item => item !== clicked[clicked.length - 1]));
          break;
        case array4:
          setArray4(prevArray => prevArray.filter(item => item !== clicked[clicked.length - 1]));
          break;
        case array5:
          setArray5(prevArray => prevArray.filter(item => item !== clicked[clicked.length - 1]));
          break;
        case array6:
          setArray6(prevArray => prevArray.filter(item => item !== clicked[clicked.length - 1]));
          break;
        case array7:
          setArray7(prevArray => prevArray.filter(item => item !== clicked[clicked.length - 1]));
          break;
        case array8:
          setArray8(prevArray => prevArray.filter(item => item !== clicked[clicked.length - 1]));
          break;
      }

    // Add it to whichever array they clicked on
      switch (array) {
        case hold1:
          setHold1([clicked[clicked.length - 1]]);
          break;
        case hold2:
          setHold2([clicked[clicked.length - 1]]);
          break;
        case hold3:
          setHold3([clicked[clicked.length - 1]]);
          break;
        case hold4:
          setHold4([clicked[clicked.length - 1]]);
      }
      setClicked();
      setClickedArray();
    }
  }
  
  function match() {
    // Remove the card from its current array

    // Add it to whichever array they clicked on
  }

  useEffect(() => {
    dealCards();
  }, []);

  return (
    <>
        <div className='mainCells'>
            <div className='holdContainer'>
                <div className='cellContainer' onClick={() => hold(hold1)}>
                    {hold1.map((item, index) => (
                        <img src={item} />
                    ))}
                </div>
                <div className='cellContainer' onClick={() => hold(hold2)}>
                    {hold2.map((item, index) => (
                        <img src={item} />
                    ))}
                </div>
                <div className='cellContainer' onClick={() => hold(hold3)}>
                    {hold3.map((item, index) => (
                        <img src={item} />
                    ))}
                </div>
                <div className='cellContainer' onClick={() => hold(hold4)}>
                    {hold4.map((item, index) => (
                        <img src={item} />
                    ))}
                </div>
            </div>
            <div className='matchContainer' >
                <div className='cellContainer' >
                    {match1.map((item, index) => (
                        <img src={item} />
                    ))}
                </div>
                <div className='cellContainer' >
                    {match2.map((item, index) => (
                        <img src={item} />
                    ))}
                </div>
                <div className='cellContainer'>
                    {match3.map((item, index) => (
                        <img src={item} />
                    ))}
                </div>
                <div className='cellContainer'>
                    {match4.map((item, index) => (
                        <img src={item} />
                    ))}
                </div>
            </div>
        </div>
        <div className='mainContainer' >
            <div className='cardContainer'>
                {array1.map((item, index) => (
                  <img src={item} style={{ marginTop: `calc(${index} * 2%)` }} onClick={() => clickedCard(array1, index)} />
                ))}
            </div>
            <div className='cardContainer'>
                {array2.map((item, index) => (
                  <img src={item} style={{ marginTop: `calc(${index} * 2%)` }} onClick={() => clickedCard(array2, index)} />
                ))}
            </div>
            <div className='cardContainer'>
                {array3.map((item, index) => (
                  <img src={item} style={{ marginTop: `calc(${index} * 2%)` }} onClick={() => clickedCard(array3, index)} />
                ))}
            </div>
            <div className='cardContainer'>
                {array4.map((item, index) => (
                  <img src={item} style={{ marginTop: `calc(${index} * 2%)` }} onClick={() => clickedCard(array4, index)} />
                ))}
            </div>
            <div className='cardContainer'>
                {array5.map((item, index) => (
                  <img src={item} style={{ marginTop: `calc(${index} * 2%)` }} onClick={() => clickedCard(array5, index)} />
                ))}
            </div>
            <div className='cardContainer'>
                {array6.map((item, index) => (
                  <img src={item} style={{ marginTop: `calc(${index} * 2%)` }} onClick={() => clickedCard(array6, index)} />
                ))}
            </div>
            <div className='cardContainer'>
                {array7.map((item, index) => (
                  <img src={item} style={{ marginTop: `calc(${index} * 2%)` }} onClick={() => clickedCard(array7, index)} />
                ))}
            </div>
            <div className='cardContainer'>
                {array8.map((item, index) => (
                  <img src={item} style={{ marginTop: `calc(${index} * 2%)` }} onClick={() => clickedCard(array8, index)} />
                ))}
            </div>
        </div>
    </>
  );
}

export default Solitaire;
