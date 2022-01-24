import { myRecommendationList } from '../../interfaces'

export const handleRamdom = (
  data: myRecommendationList[],
  qunatity: number
) => {
  let ramdomData: myRecommendationList[] = []
  let ramdoms: number[] = []
  for (let i = 0; i < data.length; i++) {
    const ramdomNumber = Math.floor(Math.random() * (52 - 0) + 0)
    const test = ramdoms.some((number) => ramdomNumber - number === 0)
    if (!test) {
      ramdoms.push(ramdomNumber)
      ramdomData.push(data[ramdomNumber])
    }
  }
  return ramdomData.slice(0, qunatity)
}

export const handleCarouselSize = (
  imgSize: number,
  gapSize: number,
  imgNumb: number
) => {
  const width = window.screen.width
  const response = imgNumb * imgSize + (imgNumb - 1) * gapSize - width
  return response
}
