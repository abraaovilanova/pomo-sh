import { useState, useEffect } from 'react'
import { NavbarList, NavbarListItens } from "../navbarlist"
import ClockDisplay from './ClockDisplay'
import "./Clock.css"


const formattPlayBtn = (play : boolean):String => play ? 'Stop' : 'Play'

function Clook() {
    const [seconds, setSeconds] = useState<number>(25 * 60)
    const [play, setPlay] = useState<boolean>(false)

    useEffect(() => {
        if (play) {
            setTimeout(() => {
                setSeconds(prev => prev - 1)
            }, 1000)
        }
    }, [seconds, play])
    return (
        <div className="clock-container">
            <NavbarList>
                <NavbarListItens>
                    <button>pomodoro</button>
                </NavbarListItens>
                <NavbarListItens>
                    <button>short break</button>
                </NavbarListItens>
                <NavbarListItens>
                    <button>long break</button>
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
                        setSeconds(25 * 60)
                    }}>Reset</button>
                </NavbarListItens>
                <NavbarListItens>
                    <button>SKIP</button>
                </NavbarListItens>
            </NavbarList>
        </div>

    )

}


export default Clook