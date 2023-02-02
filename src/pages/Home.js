import React, {useEffect, useState} from 'react'
import CardContainer from '../components/CardContainer'
import HeaderContainer from '../components/HeaderContainer'
import Success from '../components/Success';

let db = [
    {
    id: 1,
    author: "Adriel Perkins",
    description: "I joined Liatrio in April, 2022. I've gone from living the startup life, to working in a large Federal enterpise, to striking a happy balance by working here. Im super passionate about DevSecOps and being security centric in everything I do. I love helping teams grow, iterate, and improve while stimulating the DevOps culture and mind set. I'm a big proponent of work life balance and anti-burnout, so Liatrio is a HUGE culture fit for me. I live in the beautiful mountains ⛰️ of Virginia with my wife Leigha, son Jaylon, and our two dogs Bailee & Bennie the Beagliers. (Yes, they're on instagram.) I enjoy 🏌️, 🚶, playing 🎾, nerding out 💻, and so many other things that I could fill a 📖 with emojis. 💪"
    },
    {
    id: 2,
    author: "Ahmed Alsabag",
    description: "I joined Liatrio in December 2018. My background was primarily in Infrastructure Automation and backend development mainly in Java and Go. I have however, professionally used a variety of languages and tools though I am far from an expert in any of them. This includes Android/IOS development and React.js."
    },
    {
    id: 3,
    author: "Alex Ashley",
    description: "I joined Liatrio in October 2020. My background is a potpourri of roles in software development: web applications with Node.js & React, back of house desktop applications built with Visual Basic/C#, mobile apps using React Native, and, more recently, cloud infrastructure and automation."
    },
    // {
    // id: 4,
    // author: "Alex Detesan",
    // description: "I joined Liatrio in December 2021, after moving from the UK to Canada. I live in Toronto, but tend to travel all over the place and work from anywhere. I love DevOps, cloud, security, automation... and everything else we do. My background is in software engineering, but DevOps is a more natural fit. I'm currently deployed at SWA.In my spare time I do a lot of stuff outside and you might catch me on a call talking about my macros (and should probably tell me to shut up...)."
    // },
    // {
    // id: 5,
    // author: "Alex Nelson",
    // description: "Hey everyone! 👋 I started with Liatrio way back in March of 2017 as one of the original 9 interns working out of the old chicostart office, and it has been such a cool experience to see Liatrio grow into what it is today and to grow alongside it! I've got a degree in Computer Science from Chico State but my nerdom started long before then. From building computers and hosting game servers as a teenager, to writing minecraft mods and building ripple carry adders in high school to working IT for 4 years prior to Liatrio; my whole life I've had a passion for technology and automation."
    // },
    
    ]
function Home({mode, toggleMode}) {
  const [stateCards,setStateCards] = useState();
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);
  const [matches, setMatches] = useState([]);
  const [oneClick,setOneClick] = useState(undefined);
  const [twoClick, setTwoClick] = useState(undefined);
  const [data, setData] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // const [mode, setMode] = useState(false);

    function checkSuccess(){
      console.log("checking success")
      console.log(matches.length," ",db.length)
      if(matches.length >= db.length)
      {
      console.log("it should toggle")
        setShowSuccess(true);
      }
    }

    function checkMatch(){
        if(oneClick[0] == twoClick[0]){
            console.log("its a match")
            let temp_arr = []
            temp_arr.push(...matches)
            temp_arr.push(oneClick)
            temp_arr.push(twoClick)
            setMatches(temp_arr)
            let temp_score = score
            temp_score++
            setScore(temp_score)
            setOneClick(undefined)
            setTwoClick(undefined)
        }
        else if(oneClick[0] != twoClick[0]){
            console.log("not a match")
            setOneClick(undefined)
            setTwoClick(undefined)
            let temp_tries = tries 
            temp_tries++
            setTries(temp_tries)
            
        }
        // setData(false);
        checkSuccess()

    }

  

  function clickedCard(id) {
    // console.log("this is the id passed in",id)
    // console.log("one Click is:",oneClick,"two Click is:",twoClick)
    if(oneClick == undefined && twoClick == undefined){
        // console.log("first click triggered")
        setOneClick(id)
        // console.log("one Click is:",oneClick,"two Click is:",twoClick)
        
       
    }
    else if(oneClick != undefined && twoClick == undefined){
        // console.log("second click triggered")
        setTwoClick(id)
        // console.log("one Click is:",oneClick,"two Click is:",twoClick)
        if(twoClick) { 
            // console.log("this is two click",twoClick)
            checkMatch() }
        // checkMatch()
       
        
    }

  }
  function renderCards(){
    // console.log("rendering cards")
    let cards = [];
    // console.log(people)
    for(let i = 0; i < db.length; i++){

      let temp_card = {
        id: db[i].id.toString() + "a",
        info: db[i].author
      }
      let another_temp_card = {
        id: db[i].id.toString() + "b",
        info: db[i].description
      }
      // console.log("this is temp_card",temp_card)
      cards.push(temp_card)
      cards.push(another_temp_card)
    }
    cards = cards.sort((a, b) => 0.5 - Math.random());
    // console.log("cards in the function",cards)
    setStateCards(cards);
    
  }
  
  useEffect(() => {
    if(!data){
        renderCards();
        setData(true);
    }
    if(twoClick != undefined){
        // console.log("checking")
        setTimeout(function(){
            checkMatch();
          }, 2000);   
    }
  },[twoClick,showSuccess]);

  


  return (<>
  <HeaderContainer toggleMode={toggleMode}  mode={mode} score={score} tries={tries}/>
  <CardContainer mode={mode} matches={matches} stateCards={stateCards} oneClick={oneClick} twoClick={twoClick} clickedCard={clickedCard} people={db}/>
   { showSuccess ? <Success/> : <></> }
  </>
  )
}

export default Home