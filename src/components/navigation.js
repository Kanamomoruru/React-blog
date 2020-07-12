import React from 'react';
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

export default function Navigation() {
    return (
        <nav className="site-navigation">
            <span className="menu-title">My React Blog</span>
            <div>
                <ul>
                    {naviLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </nav>
    )
}