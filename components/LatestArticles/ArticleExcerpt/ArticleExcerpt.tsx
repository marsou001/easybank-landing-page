import Article from "../../../types/article";

function ArticleExcerpt({ image, title, author, excerpt }: Article) {
  return (
    <div className="article bg-white overflow-hidden rounded-md cursor-pointer" data-testid="article">
      <div className="article-image w-full h-1/2">
        <img src={image} className="w-full h-full" alt="" />
      </div>

      <div className="article-info p-4 pb-8">
        <span className="article-info__author text-grayish-blue text-[.65rem] block">By { author }</span>
        <h2 className="article-info__title text-dark-blue text-[1.1rem] hover:text-lime-green leading-5 my-2">
          <a href="#">{ title }</a>
        </h2>
        <p className="article-info__excerpt text-grayish-blue text-sm">{ excerpt }</p>
      </div>
    </div>
  )
}

export default ArticleExcerpt;