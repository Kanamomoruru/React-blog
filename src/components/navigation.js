import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Avatar } from 'antd';

const naviLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'Login',
        path: '/login'
    },
]

export default function Navigation({user}) {
    const [ menuActive, setMenuActive ] = useState(false);
    return (
        <nav className="site-navigation">
            <span className="menu-title">My React Blog</span>
            <div className="menu-content-container">
                <ul>
                    {naviLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <span>
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38} />
                    <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
                </span>
                <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)}/>
                
            </div>
       
        </nav>
    )
}