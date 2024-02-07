import React, {useState, useEffect, Key} from 'react';
import ResponsiveCards from '../components/BlogCards';
import sanityClient from "../client";
import { Link } from 'react-router-dom';

interface Post {
  _id: Key | null | undefined;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
}


const Blog: React.FC = () => {
  const [allPost, setAllPost] = useState<Post[]>([]);

useEffect(() => {
    const fetchData = async () => {
      try {
          const data = await sanityClient.fetch<Post[]>(
            `*[_type == "post"] {
              title,
              slug,
              mainImage{
                asset->{
                  _id,
                  url
                }
              }
              
            }`
          )

        setAllPost(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
}, [])

  return (
    <>
    <div className="blogcard-container">
    <div className="blogcard-container">
      {allPost && allPost.length > 0 && (
        <Link to={`/blog/${allPost[0].slug.current}`} key={allPost[0]._id}>
          {/* Render the content of your link, for example, the post title */}
          <div className="blog-post-content">
            <img src={allPost[0].mainImage.asset.url} alt="Main Hero Blog Post" />
            <h2>{allPost[0].title}</h2>
          </div>
        </Link>
  )}
</div>
        
    </div>
    <div>
              <ResponsiveCards
              data={allPost.map((post, index) => ({
                id: index,
                title: post.title,
                content: 'Read More...',
                imageUrl: post.mainImage.asset.url,
                slug: post.slug.current, // Add this line
              }))}
            />
        </div>
    </>
  );
}

export default Blog;