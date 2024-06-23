import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <ul className="features">
                <li className="feature"><Link to="/journal" className="journal">
                    <img className="journal-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/400px-Open_book_nae_02.svg.png"></img>
                    </Link></li>
                <li className="feature"><Link to="/breathe" className="breathing">
                    <img className="breathing-img" src="https://media-cdn.wimhofmethod.com/uploads/cms/2023/03/breathing-exercises.png"></img>
                    </Link></li>
                <li><Link to="/breathe" className="breathing">
                    <img className="breathing-img" src="https://media-cdn.wimhofmethod.com/uploads/cms/2023/03/breathing-exercises.png"></img>
                    </Link></li>
                <li className="feature"><Link to="/planner" className="planner">
                    <img className="planner-img" src="https://i.imgur.com/lwVKoO5.png"></img>
                    </Link></li>
                <li><Link to="/planner" className="planner">
                    <img className="planner-img" src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678116-calendar-512.png"></img>
                    </Link></li>
                <li className="feature"><Link to="/tracker" className="tracker">
                    <img className="tracker-img" src="https://i.imgur.com/Js4HPeK.png"></img>
                    </Link></li>
                <li><Link to="/tracker" className="tracker">
                    <img className="tracker-img" src="https://cdn1.iconfinder.com/data/icons/ui-basic-8/64/x-33-512.png"></img>
                    </Link></li>
                <li className="feature"><Link to="/reminder" className="reminder">
                    Reminders</Link></li>
                <li className="feature"><Link to="/community" className="community">
                    Highlight of the Day</Link></li>
            </ul>
        </div>
    );
};

export default Dashboard;