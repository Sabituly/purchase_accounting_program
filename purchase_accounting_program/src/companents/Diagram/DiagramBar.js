import './DiagramBar.css';

const DiagramBar = (props) => {  // передаем пропс

    let barFillHeight = '0%'; // здесь задаем высоту

    if (props.maxValue > 0) { // если больше нуля

        barFillHeight = Math.round(props.value / props.maxValue * 100) + '%';
    }

    return (
        <div className='diagram-bar'>
            <div className='diagram-bar__inner'>
                <div className='diagram-bar__fill' style={{
                    height: barFillHeight}}>
                </div>
            </div>
            <div className='diagram-bar__label'>{props.label}</div>
        </div>
    )

}

export default DiagramBar;