import React from 'react';
import {PostMasonry} from '../components/common/post-masonry'
import trending from '../assets/mocks/trending'

export default function Home() {
    return (
        <section className="container home">
            <div className="row">
                <h2>Trending Posts</h2>
                <PostMasonry posts={trending} column={3}/>
            </div>
        </section>
    )
}