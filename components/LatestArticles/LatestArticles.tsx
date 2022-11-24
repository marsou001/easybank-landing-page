import ArticleExcerpt from "./ArticleExcerpt/ArticleExcerpt";
import { articles } from "./text";

function LatestArticles() {
  return (
    <section className="bg-very-light-gray px-4 py-16 lg:px-28">
      <h1 className="text-dark-blue text-2xl text-center mt-0 mb-3 lg:text-left lg:mb-10 xl:text-4xl xl:leading-[3.5rem]">Latest Articles</h1>

      <div className="articles grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {articles.map((article) => (
          <ArticleExcerpt key={article.title} {...article} />
        ))}
      </div>
    </section>
  )
}

export default LatestArticles;