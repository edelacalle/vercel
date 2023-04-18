'use client'
import Link from 'next/link';
import React from 'react';
import Button from 'react-bootstrap/Button';
//import {Button, ButtonGroup, Card, Dropdown, ProgressBar} from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <h1>HOla soy el dos </h1>
      <p>Hello World! This is the Home pag2 <Button>HOLA</Button></p>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
    </div>
  )
}

export default Home
