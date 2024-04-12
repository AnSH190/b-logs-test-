import React from 'react'

interface BlogCardProps {
  blogDesc: string;
  blogCat1: string;
  blogCat2: string;
  blogTitle: string;
  blogSrc: string;
}

const SingleBlogCard: React.FC<BlogCardProps> = ({
  blogDesc,
  blogCat1,
  blogCat2,
  blogTitle,
  blogSrc,
}: any) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={blogSrc} alt="Blog cover picture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {blogTitle}
          {/* <div className="badge badge-secondary">NEW</div> */}
          {/* Implemet the seen blog or not features */}
        </h2>
        <p>{blogDesc}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{blogCat1}</div>
          <div className="badge badge-outline">{blogCat2}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCard;