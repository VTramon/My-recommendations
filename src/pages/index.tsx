import Link from 'next/link';
import { CarouselComponent } from '../components/Carousel';
import { Card } from '../components/Card';
import { Layout } from '../components/Layout';
import { Data } from '../utils/recommendations';

const IndexPage = () => {
  const getRamdomData = () => {
    const max = Data.length;
    const index = Math.floor(Math.random() * (max - 0) + 0);
    console.log(index);
    return Data[index].id;
  };

  return (
    <Layout>
      <CarouselComponent>
        <Card id={getRamdomData()} />
        <Card id={getRamdomData()} />
        <Card id={getRamdomData()} />
        <Card id={getRamdomData()} />
        <Card id={getRamdomData()} />
        <Card id={getRamdomData()} />
        <Card id={getRamdomData()} />
      </CarouselComponent>
    </Layout>
  );
};

export default IndexPage;
