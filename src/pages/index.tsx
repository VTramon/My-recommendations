import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { handleRamdom } from '../components/Functions'
import { Layout } from '../components/Layout'
import { RecommendationVideo } from '../components/RecommendationVideo'
import { RecommendationsBox } from '../components/RecommendationsBox'
import { myRecommendationList } from '../interfaces'
import { Carousel } from '../components/Carousel'

const IndexPage = () => {
  const [dataItems, setDataItems] = useState<myRecommendationList[]>()
  // const [dataMovies, setDataMovies] = useState<myRecommendationList[]>()
  // const [dataTV, setDataTV] = useState<myRecommendationList[]>()

  const handleRecommendationData = async () => {
    try {
      const response = await axios.get(
        `https://imdb-api.com/en/API/IMDbList/${process.env.NEXT_PUBLIC_KEY}/ls537479491`
      )
      const data = response.data['items']
      console.log(data)

      setDataItems(handleRamdom(data, 8))
      // setDataMovies(handleRamdom(data, 8))
      // setDataTV(handleRamdom(data, 8))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // handleRecommendationData()
  }, [])

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
        <Carousel />
        {/* <RecommendationVideo />
        <RecommendationsBox name="Some of my favorites" items={dataItems} /> */}
      </Layout>
    </>
  )
}

export default IndexPage
