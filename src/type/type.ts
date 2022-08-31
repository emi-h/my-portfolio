export type Blog = {
  id: string;
  title: string;
  content: string;
  date: string;
  portfolio_img?: string;
  subtitle: string;
};

export type Portfolio = {
  id: string;
  title: string;
  date: string;
  imgUrl: {
    url: string;
  };
  text: string;
};
