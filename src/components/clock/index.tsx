import { NavbarList, NavbarListItens } from "../navbarlist"
import ClockDisplay from './ClockDisplay'
import "./Clock.css"

function Clook() {
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
            <ClockDisplay />
            <NavbarList>
                <NavbarListItens>
                    <button>START / STOP</button>
                </NavbarListItens>
                <NavbarListItens>
                    <button>RESET</button>
                </NavbarListItens>
                <NavbarListItens>
                    <button>SKIP</button>
                </NavbarListItens>
            </NavbarList>
        </div>

    )

}


export default Clook