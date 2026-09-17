type ClockDisplayProps = {
    totalSeconds: number
}

function formatteSeconds(totalSeconds: number ){
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = totalSeconds - minutes * 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

function ClockDisplay({ totalSeconds }: ClockDisplayProps) {
    return (
        <div className="clock-display">
            <span>{formatteSeconds(totalSeconds)}</span>
        </div>
    )
}

export default ClockDisplay