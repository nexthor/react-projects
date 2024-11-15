import { useState, useEffect } from 'react';
import Link from '../components/Link';
import List from '../components/List';
import './Profile.css';

function Profile({ userName }){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
        .then(data => {
            setUser(data);
            setLoading(false);
        }).catch(error => setLoading(false));
    }, [userName]);
    
    if (loading) {
        return <div>Loading...</div>;
    }
    
    const items = [
        {
            field: 'html_url',
            value: <Link url={user.html_url} title={user.html_url} />
        },
        {
            field: 'repos_url',
            value: <Link url={user.repos_url} title={user.repos_url} />
        },
        {
            field: 'name',
            value: user.name
        },
        {
            field: 'location',
            value: user.location
        },
        {
            field: 'bio',
            value: user.bio
        },
        {
            field: 'email',
            value: user.email
        },
    ];

    return (
        <div className='Profile-container'>
            <img src={user.avatar_url} alt={user.name} />
            <List items={items} />
        </div>
    );
}

export default Profile;