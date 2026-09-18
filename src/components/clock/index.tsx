import { useState, useEffect } from 'react'
import { NavbarList, NavbarListItens } from "../navbarlist"
import ClockDisplay from './ClockDisplay'
import "./Clock.css"


const formattPlayBtn = (play: boolean): String => play ? 'Stop' : 'Play'

type DisplayStateType = 'pomodoro' | 'short-break' | 'long-break'
const displayStateList: DisplayStateType[] = ['pomodoro', 'short-break', 'long-break']
const totalTimePerState: number[] = [25 * 60, 5 * 60, 15 * 60]

function Clook() {
    const [play, setPlay] = useState<boolean>(false)
    const [displayState, setDisplayState] = useState<DisplayStateType>('pomodoro')
    const [displayStateIndex, setDisplayStateIndex] = useState<number>(0)
    const [seconds, setSeconds] = useState<number>(totalTimePerState[displayStateIndex])

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (play) {
            timeout = setTimeout(() => {
                setSeconds(prev => prev - 1)
            }, 1000)
        }

        return () => {
            clearTimeout(timeout)
        }
    }, [seconds, play, displayStateIndex])

    useEffect(() => {
        setSeconds(totalTimePerState[displayStateIndex])
    }, [displayStateIndex])

    return (
        <div className="clock-container">
            <NavbarList>
                <NavbarListItens>
                    <button onClick={() => {

                        setDisplayStateIndex(0)
                        setSeconds(totalTimePerState[displayStateIndex])

                    }}>pomodoro</button>
                </NavbarListItens>
                <NavbarListItens>
                    <button onClick={() => {
                            setDisplayStateIndex(1)
                            setSeconds(totalTimePerState[1])
                        
                    }}>short break</button>
                </NavbarListItens>
                <NavbarListItens>
                    <button onClick={() => {
                            setDisplayStateIndex(1)
                            setSeconds(totalTimePerState[2])
                    }}>long break</button>
                </NavbarListItens>
            </NavbarList>
            <ClockDisplay totalSeconds={seconds} />
            <NavbarList>
                <NavbarListItens>
                    <button onClick={() => {
                        setPlay(prev => !prev)
                    }}>{formattPlayBtn(play)}</button>
                </NavbarListItens>
                <NavbarListItens>
                    <button onClick={() => {
                        setSeconds(totalTimePerState[displayStateIndex])
                    }}>Reset</button>
                </NavbarListItens>
                <NavbarListItens>
                    <button onClick={() => {
                        console.log(seconds)
                        if (displayStateIndex < displayStateList.length - 1) {
                            setDisplayStateIndex(prev => prev + 1)
                        } else {
                            setDisplayStateIndex(0)
                        }
                    }}>Skip</button>
                </NavbarListItens>
            </NavbarList>
        </div>

    )

}


export default Clook