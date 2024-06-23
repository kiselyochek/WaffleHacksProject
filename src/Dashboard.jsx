import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <ul>
                <li><Link to="/journal" className="journal">
                    <img className="journal-img" src="https://i.imgur.com/haS241a.png"></img>
                    </Link></li>
                <li><Link to="/breathe" className="breathing">
                    <img className="breathing-img" src="https://i.imgur.com/VxgDrTO.png"></img>
                    </Link></li>
                <li><Link to="/planner" className="planner">
                    <img className="planner-img" src="https://i.imgur.com/lwVKoO5.png"></img>
                    </Link></li>
                <li><Link to="/tracker" className="tracker">
                    <img className="tracker-img" src="https://i.imgur.com/Js4HPeK.png"></img>
                    </Link></li>
                <li><Link to="/reminder" className="reminder">
                    Reminders</Link></li>
                <li><Link to="/community" className="community">
                    Highlight of the Day</Link></li>
            </ul>
        </div>
    );
};

export default Dashboard;