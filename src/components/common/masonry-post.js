import React from 'react'
import categoryColors from './styles'

export default function MasonryPost({ post, tagOnTop}) {
    const style = {backgroundImage: `url("${require(`../../assets/images/${post.image}`)}")`} ;
    return (
        <a className="masonry-post overlay" style={style} href={post.link}>
            <div className="image-text">
                <div className="tags-container">
                    {
                        post.categories.map((tag, index) => 
                            <span key={index} className="tag" style={{backgroundColor: categoryColors[tag]}}>
                                {tag.toUpperCase()}
                            </span>
                    )}
                </div>
                <div>
                    <h2 className="image-title">{post.title}</h2>
                </div>
            </div>
        </a>
    )
}