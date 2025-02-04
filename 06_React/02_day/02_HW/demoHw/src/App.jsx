import React from 'react'
import Fullname from './Fullname';
import DemoArray from './DemoArray';
import Navbar from './Navbar';

const firstName = 'John';
const middleName = 'Doe';
const lastName = 'Smith';


const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
const demoArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const App = (props) => {
  return (
    <>

      <Navbar brand="MyWebsite" links={navLinks} />
      <div>
        <h1>Home Work Day 2 </h1>


        <h2>Personal Information</h2>

        <div className='border border-primary p-3'>

          <h2>This is App component  </h2>

          <p>First Name: {firstName}</p>
          <p>Middle Name: {middleName}</p>
          <p>Last Name: {lastName}</p>

        </div>

        <div className='border border-primary p-3'>
          <h2>This is FullName component </h2>

          <Fullname firstNa={firstName} middleNa={middleName} lastNa={lastName} />
        </div>

        <div className='border border-primary p-3'>
          <h2>This is array in map component </h2>
          <DemoArray arr={demoArr} />
        </div>

      </div>
    </>
  )
}

export default App
