import { articles } from "./text";

function LatestArticles() {
  return (
    <section className="bg-very-light-gray px-4 py-16 lg:px-28">
      <h1 className="text-dark-blue text-2xl text-center mt-0 mb-3 lg:text-left lg:mb-10 xl:text-4xl xl:leading-[3.5rem]">Latest Articles</h1>

      <div className="articles grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {articles.map((article) => (
          <div key={article.title} className="article bg-white overflow-hidden rounded-md cursor-pointer" data-testid="article">
            <div className="article-image w-full h-1/2">
              <img src={article.image} className="w-full h-full" alt="" />
            </div>

            <div className="article-info p-4 pb-8">
              <span className="article-info__author text-grayish-blue text-[.65rem] block">By { article.author }</span>
              <h2 className="article-info__title text-dark-blue text-[1.1rem] hover:text-lime-green leading-5 my-2">
                <a href="#">{ article.title }</a>
              </h2>
              <p className="article-info__excerpt text-grayish-blue text-sm">{ article.excerpt }</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LatestArticles;