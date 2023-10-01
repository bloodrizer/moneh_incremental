import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Game from './src/game';

const game = new Game();

interface IUIProps {
    game: Game;
}
class UI extends React.Component<IUIProps> {
    componentDidMount(): void { 
        //update game model every 100ms and re-render
        setInterval(() => {
            this.props.game.update();
            this.forceUpdate();
        }, 100);

        setInterval(() => {
            this.forceUpdate();
        }, 100);
    }

    /**
     * Calculate a difference bettween current day and the next day based on timestamp and return a number between 0 and 1
     */
    getDayProgress = () => {
        const date = new Date(this.props.game.date);
        const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
        const dayEnd = dayStart + 86400000;
        const dayProgress = (date.getTime() - dayStart) / (dayEnd - dayStart);
        return dayProgress;
    }

    render(){
        const dateOpts: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }
        return (
            <div>
                <div>
                    Current date: {new Date(this.props.game.date).toLocaleString(undefined, dateOpts)}
                </div>
                <progress className="day-progress" value={this.getDayProgress()} max="1"/>

                <div>
                    <div>Wage: $15/hour</div>
                    <div>Moneh: ${this.props.game.money.toFixed(2)}</div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<UI game={game}/>, document.getElementById('root'));
