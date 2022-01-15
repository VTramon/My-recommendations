import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { CarouselComponent } from '../components/Carousel';
import { Layout } from '../components/Layout';
import { CarouselProps, myRecommendationList } from '../interfaces';

const teste = {
  id: 'tt0388629',
  title: 'One Piece',
  image:
    'https://imdb-api.com/images/original/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.6800_AL_.jpg',
};

const IndexPage = () => {
  const [dataItems, setDataItems] = useState<myRecommendationList[]>();

  const handleCarouselData = async () => {
    try {
      const response = await axios.get(
        `https://imdb-api.com/en/API/IMDbList/${process.env.NEXT_PUBLIC_KEY}/ls537479491`
      );
      const data = response.data['items'];

      const ramdomOnes = data
        .slice(0, 15)
        .Math.floor(Math.random() * (52 - 0) + 0);

      setDataItems(data);
      console.log(data);
      return dataItems;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // handleCarouselData();
  }, []);

  return (
    <>
      <Head key={'indexHead'}>
        <link
          rel="stylesheet"
          type="text/css"
          href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css"
        />
        <title>My recommendations</title>
      </Head>
      <Layout>
        <CarouselComponent callbackfunction={handleCarouselData} />
      </Layout>
    </>
  );
};

export default IndexPage;
