import Article from "../../types/article";
import imageCurrency from '../../public/images/image-currency.jpg';
import imageRestaurant from '../../public/images/image-restaurant.jpg';
import imagePlane from '../../public/images/image-plane.jpg';
import imageConfetti from '../../public/images/image-confetti.jpg';

export const title = "Latest Articles";

export const articles: Article[] = [ 
  {
    image: imageCurrency.src,
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    excerpt: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
  },
  {
    image: imageRestaurant.src,
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    excerpt: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
  },
  {
    image: imagePlane.src,
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    excerpt: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
  },
  {
    image: imageConfetti.src,
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    excerpt: "After a lot of hard work by the team, we're excited to lauch our closed beta. It's easy to request an invite through the site...",
  },
]