import React from 'react';
import {PostMasonry} from '../components/common/'
import trending from '../assets/mocks/trending'

const trendingConfig = {
    1: {
        gridAria: '1 / 2 / 3 / 3'
    }
}

const mergeStyle = function(posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
    })
}

mergeStyle(trending, trendingConfig);

export default function Home() {
    return (
        <section className="container home">
            <div className="row">
                <h2>Trending Posts</h2>
                <PostMasonry posts={trending} columns={3}/>
            </div>
        </section>
    )
}