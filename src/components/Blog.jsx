import React from 'react';

const blogPosts = [
    {
        id: 1,
        title: 'The Evolution of Automotive Photography',
        date: 'Oct 15, 2026',
        excerpt: 'Exploring how cameras and techniques have changed the way we capture speed.',
        image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 2,
        title: 'Top 5 Lenses for Car Meets in Low Light',
        date: 'Sep 22, 2026',
        excerpt: 'Don\'t let the lack of light ruin your shots. Here are my go-to lenses for night meets.',
        image: 'https://images.unsplash.com/photo-1517409252441-2a0781e9b23b?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'JDM Classics: The Enduring Appeal',
        date: 'Aug 05, 2026',
        excerpt: 'Why 90s Japanese sports cars continue to capture the hearts of enthusiasts worldwide.',
        image: 'https://images.unsplash.com/photo-1620882814836-97e3fc241477?q=80&w=800&auto=format&fit=crop',
    }
];

const Blog = () => {
    return (
        <section id="blog" className="blog">
            <div className="section-header">
                <div>
                    <h2><span>My</span> Thoughts</h2>
                    <p>Insights into automotive culture, gear reviews, and personal musings.</p>
                </div>
            </div>
            <div className="blog-grid">
                {blogPosts.map((post) => (
                    <article key={post.id} className="blog-card">
                        <div className="blog-image-wrapper">
                            <img src={post.image} alt={post.title} />
                        </div>
                        <div className="blog-content">
                            <span className="blog-date">{post.date}</span>
                            <h3 className="blog-title">{post.title}</h3>
                            <p className="blog-excerpt">{post.excerpt}</p>
                            <a href="#read" className="btn btn-outline blog-btn">Read More</a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Blog;
