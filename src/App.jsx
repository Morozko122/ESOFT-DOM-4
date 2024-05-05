import { useState } from 'react'
import CountdownTimer from './components/countdowntimer'
import { UserList } from './components/UserList/userlist'
import './App.css'
import { WindowSize } from './components/windowsize';

function App() {
  const [time, setTime] = useState(0);
  const [countdownTime, setCountdownTime] = useState(time);
  const onChange = (e) =>{
    setTime(e.target.value);
  }
  const onClickSetTime = () =>{
    setCountdownTime(time);
  };
  return (
    <>
    <h1>Таймер</h1>
    <input type="text" value={time} onChange={onChange} placeholder='Введите время'></input>
    <button type='submit' onClick={onClickSetTime}>Старт</button>
    <CountdownTimer timeToCountdown={countdownTime}/>
    <WindowSize/>
    <UserList />
    </>
  )
}

export default App
