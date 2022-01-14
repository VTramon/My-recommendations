export type LayoutProps = {
  children?: React.ReactNode;
};

export type CardProps = {
  id: string;
};

export type imageProps = {
  title?: string;
  image?: string;
};

export type CarouselProps = {
  children: React.ReactNode;
};

export type utilsData = {
  name: string;
  id: string;
  number: number;
  type: 'movie' | 'serie';
  genre: 'animation' | 'la';
};
