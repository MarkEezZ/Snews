import React, { Component, useEffect, useState } from 'react';
import './App.css';
import Body from './Components/Body/Body';
import Grid from './Components/Grid/Grid';

type INews = {
  id: number,
  featured: boolean,
  title: string,
  url: string,
  imageUrl: string,
  newsSite: string,
  summary: string,
  publishedAt: string,
  launches: [
      {
      id: string,
      provider: string
      }
  ],
  events: [
      {
      id: string,
      provider: string
      }
  ]
}

function App() {

  let link: string = `https://api.spaceflightnewsapi.net/v3/articles?_limit=1`;

  return (
      <Body>
        <Grid url={link}></Grid>
      </Body>
    );
}

export default App;
