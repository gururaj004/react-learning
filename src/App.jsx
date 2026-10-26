import React from 'react'
import './App.css'
import Boxes from "./components/Cards.jsx";

const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIgz8QsH9Es1gTl0ZCx957cNp87vuB-mRVbTQS31XEyg&s=10",
    companyName: "Meta",
    post: "Frontend Engineer",
   
    pay: "$65/hour",
    location: "Menlo Park"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhtCHWrNb2M7tAlOyQV4EFSTLSNBoyv7XR5pvLhEScg&s=10",
    companyName: "Google",
    post: "Software Engineer",
    pay: "$70/hour",
    location: "Bengaluru"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISXBURx3Mqxn-hoH52jFqxJApL2LAit1QzeCAjCK0XA&s=10",
    companyName: "Microsoft",
    post: "Frontend Developer",
    pay: "$60/hour",
    location: "pune"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdUney_HUjbDhlHnLjZNTgE4FjbqUn3CfBa0tzTMmZA&s=10",
    companyName: "Amazon",
    post: "Web Developer",
    pay: "$55/hour",
    location: "Mumbai"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxOEBgGYkbIvC0ClXXQFIcoQHEr7SMJU9OP1tAD7sjA&s=10",
    companyName: "Netflix",
    post: "UI Developer",
    pay: "$50/hour",
    location: "hyderabad"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rApSjDXCOAsStw4_AN64xcOJJNOKor2lTOhPxChGPA&s=10",
    companyName: "Apple",
    post: "React Developer",
    pay: "$65/hour",
    location: "Gurugaon"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOiKj7dwbCxousHBzDudIUoIFJH3fMRsDJssE4HF2MA&s=10",
    companyName: "Adobe",
    post: "Frontend Engineer",
    pay: "$58/hour",
    location: "Chennai"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7cIVmBpKQKR2VwIGPhemE91W7IIQvoVY2xGPVPIzeA&s=10",
    companyName: "IBM",
    post: "Full Stack Developer",
    pay: "$45/hour",
    location: "New York"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWfyfX32shEa9Xn_NilYPuGOfS60_GxipeY9LrAWAvA&s",
    companyName: "NVIDIA",
    post: "Software Developer",
    pay: "$68/hour",
    location: "Santa Clara"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlpyxaf5plCtvqZRWnN-eTnSfA2mmDwu-E6de3rEd9Q&s=10",
    companyName: "Spotify",
    post: "UI/UX Developer",
    pay: "$48/hour",
    location: "New York"
  },
  {brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjcX6Yr57HJ36R5b4wP6VY_LZRUI4OoXVJ6Q4_AtkqA&s=10",
    companyName: "ORACLE",
    post: "Backend Developer",
    pay: "$99/hour",
    location: "Santa Clara"
},
 {
  brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4FlbLcKMJ1RRDd9yy0fW5pfRYp08nXngjXr9IMc7rHA&s=10",
    companyName: "WORKDAY",
    post: "Full stack Developer",
    pay: "$75/hour",
    location: "Singapore"
 } 
];
  return (
    <div className='parent'>
       {jobOpenings.map(function(elem,idx) {
        
        return <div key={idx}> <Boxes logo={elem.brandLogo} company={elem.companyName} post ={elem.post} 
        pay={elem.pay} location={elem.location} />
      </div>
})}
    </div>
      
   
  )
}

export default  App;