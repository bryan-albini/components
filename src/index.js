import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:30PM" post="Cool" avatar={faker.image.avatar()}/>
            <CommentDetail author="Alex" timeAgo="Today at 2:30PM" post="Sweet" avatar={faker.image.avatar()}/>
            <CommentDetail author="Mack" timeAgo="Today at 5:30PM" post="Radical" avatar={faker.image.avatar()}/>
            <CommentDetail author="Jane" timeAgo="Today at 7:30PM" post="Gnarly" avatar={faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));