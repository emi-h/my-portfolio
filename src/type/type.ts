export type Blog = {
  title: string;
  subtitle: string;
  content: string;
  date: string;
  id: string;
  portfolio_img?: string;
};

export type Portfolio = {
  title: string;
  text: string;
  imgUrl: {
    url: string;
  };
  date: string;
  id: string;
};
