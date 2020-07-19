import React from 'react';

import MasonryPost from './masonry-post'

export default function PostMasonry({ posts, columns, tagOnTop}) {
    return (
        <section className="masonly" style={{gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))`}}>
            {posts.map((post, index) =>
                <MasonryPost {...{post, index, tagOnTop, key: index}} />
            )}
        </section>
    )
}