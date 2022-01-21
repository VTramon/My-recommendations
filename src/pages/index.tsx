import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { handleRamdom } from '../components/Functions'
import { Layout } from '../components/Layout'
import { RecommendationsBox } from '../components/RecommendationsBox'
import { myRecommendationList } from '../interfaces'

const IndexPage = () => {
  const [dataItems, setDataItems] = useState<myRecommendationList[]>()

  const handleRecommendationData = async () => {
    try {
      const response = await axios.get(
        `https://imdb-api.com/en/API/IMDbList/${process.env.NEXT_PUBLIC_KEY}/ls537479491`
      )
      const data = response.data['items']

      setDataItems(handleRamdom(data, 16))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleRecommendationData()
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
        <RecommendationsBox items={dataItems} />
      </Layout>
    </>
  )
}

export default IndexPage
