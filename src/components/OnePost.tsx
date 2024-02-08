// SinglePost.tsx
import React, { useEffect, useState } from 'react';
import sanityClient from "../client";
import { useParams } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react'

import './blogstyle.css'
interface Post {
  authorImage: string | undefined;
  name: string;
  _id: string;
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
  body: string |Record<string, unknown>; // Update the type of body
 
}

const OnePost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [postData, setPostData] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await sanityClient.fetch<Post>(
          `*[_type == "post" && slug.current == $slug][0] {
            _id,
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            body,
            "name": author->name,
            "authorImage": author->image
          }`,
          { slug }
        );
        console.log('Fetch', data)
        setPostData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="single-blog-container">
      <h2>{postData.title}</h2>
      <img src={postData.mainImage.asset.url} alt="Main Hero Blog Post" />
      <h4>{postData.name}</h4>
      {/* Convert the body object to a string */}
      <div className='content-blog'>
        <BlockContent
        blocks={postData.body}
        projectId={import.meta.env.VITE_REACT_APP_SANITY_PROJECT_ID}
        />
      </div>
    </div>
  );
};

export default OnePost;
