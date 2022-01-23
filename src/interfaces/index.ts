export type LayoutProps = {
  children?: React.ReactNode
}

export type cardProps = {
  item: {
    title?: string
    image?: string
    id?: string
  }
}
export type boxProps = {
  items?: myRecommendationList[]
}

export type utilsData = {
  name: string
  id: string
  number: number
  type: 'movie' | 'serie'
  genre: 'animation' | 'la'
}

export type myRecommendationList = {
  id?: string
  imDbRating?: string
  image?: string
  title?: string
}
