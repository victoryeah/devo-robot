import React, { useState } from 'react';
import { Box, FormControl, TextField, Grid, Button } from '@mui/material'


function finalPosition(move) {
  let l = move.length;
  let countUp = 0, countDown = 0;
  let countLeft = 0, countRight = 0;

  for (let i = 0; i < l; i++)
  {
      if (move[i] === 'F')
          countUp++;

      else if (move[i] === 'B')
          countDown++;

      else if (move[i] === 'L')
          countLeft++;

      else if (move[i] === 'R')
          countRight++;
  }

  console.log("Final Position: ("
                    + (countRight - countLeft) + ", "
                    + (countUp - countDown) + ")");
}

function App() {
  const [roomWide, setRoomWide] = useState("");
  const [roomLong, setRoomLong] = useState("");
  const [robotX, setRobotX] = useState("");
  const [robotY, setRobotY] = useState("");
  const [robotDir, setRobotDir] = useState("");
  const [robotInstructions, setRobotInstructions] = useState("");

  return (
    <Grid container padding={8} spacing={2} className="App">
      <Grid item xs={12}>
        <FormControl>
          <TextField 
            label="How wide is the room?" 
            onChange={event => setRoomWide(event.target.value)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <TextField label="How long is the room?" 
          onChange={event => setRoomLong(event.target.value)}/>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <TextField label="Robot start position X" 
          onChange={event => setRobotX(event.target.value)}/>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <TextField label="Robot start position Y" 
          onChange={event => setRobotY(event.target.value)}/>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <TextField label="Where is the robot facing? (N, S, E, W)"
            onChange={event => setRobotDir(event.target.value)}/>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <TextField label="How should the robot walk? (FRLB...)"
            onChange={event => setRobotInstructions(event.target.value)}/>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={() => finalPosition(robotInstructions)}>Set robot instructions</Button>
      </Grid>
    </Grid>
  );
  
}

export default App;
