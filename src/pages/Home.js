import React from 'react'
import CardContainer from '../components/CardContainer'

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
    {
    id: 4,
    author: "Alex Detesan",
    description: "I joined Liatrio in December 2021, after moving from the UK to Canada. I live in Toronto, but tend to travel all over the place and work from anywhere. I love DevOps, cloud, security, automation... and everything else we do. My background is in software engineering, but DevOps is a more natural fit. I'm currently deployed at SWA.In my spare time I do a lot of stuff outside and you might catch me on a call talking about my macros (and should probably tell me to shut up...)."
    },
    {
    id: 5,
    author: "Alex Nelson",
    description: "Hey everyone! 👋 I started with Liatrio way back in March of 2017 as one of the original 9 interns working out of the old chicostart office, and it has been such a cool experience to see Liatrio grow into what it is today and to grow alongside it! I've got a degree in Computer Science from Chico State but my nerdom started long before then. From building computers and hosting game servers as a teenager, to writing minecraft mods and building ripple carry adders in high school to working IT for 4 years prior to Liatrio; my whole life I've had a passion for technology and automation."
    },
    
    ]
function Home() {
  

  return (<>
  <CardContainer people={db}/>
   
  </>
  )
}

export default Home