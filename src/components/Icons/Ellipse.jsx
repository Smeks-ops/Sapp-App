function Ellipse({active}) {
    return (
        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6.5" r="5.5" fill={active ? '#22C1DC' : ''} stroke={active ? '#22C1DC' : '#18345E'}/>
        </svg>
    );
}

export default Ellipse;