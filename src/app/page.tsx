import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Home() {
  return (
    <div>
          <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    <Card>
      <CardContent>
        <span className="text-lg">This is a card</span> 
      </CardContent>
    </Card> 
    </div>
  )
}
