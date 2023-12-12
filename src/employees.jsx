        let shru = 'Shru Smart'
        let baby = 'Baby Bay'
        let clary = 'Clary Clear'
        let ajay = 'Ajay B'
        const element = (
            <ul style={{'color':'blue', 'fontSize': '24px'}}>
                <li>{shru}</li>
                <li>{baby}</li>
                <li>{clary}</li>
                <li>{ajay}</li>
            </ul>
        )
        ReactDOM.render(element, document.getElementById('content'))