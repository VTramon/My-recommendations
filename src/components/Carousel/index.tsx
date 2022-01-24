import { useEffect, useState } from 'react'
import { handleCarouselSize } from '../Functions'
import { NextIcon, PrevIcon } from '../icons'
import styles from './styles.module.scss'

let count = 0
const ImageSize = 200
const ImageGap = 15
const carouselTranslate = ImageSize + ImageGap

const Carousel = () => {
  const [carouselTranslateStyle, setCarouselTranslateStyle] = useState(0)
  const [nextPointerEvent, setNextPointerEvent] = useState<'auto' | 'none'>(
    'auto'
  )
  const [prevPointerEvent, setPrevPointerEvent] = useState<'auto' | 'none'>(
    'none'
  )

  const handlePrevClick = () => {
    count = carouselTranslateStyle + carouselTranslate
    console.log(count)
    setCarouselTranslateStyle(count)
  }

  const handleNextClick = () => {
    count = carouselTranslateStyle - carouselTranslate
    console.log(count)
    setCarouselTranslateStyle(count)
  }

  const handleNextPointer = () => {
    const result = -1 * handleCarouselSize(ImageSize, ImageGap, 15)
    if (count < result) {
      setNextPointerEvent('none')
    } else {
      setNextPointerEvent('auto')
    }
  }

  const handlePrevPointer = () => {
    if (count >= 0) {
      setPrevPointerEvent('none')
    } else {
      setPrevPointerEvent('auto')
    }
  }

  useEffect(() => {
    handleNextPointer()
    handlePrevPointer()
  }),
    [count]

  return (
    <div className={styles.outerCarousel}>
      <div className={`${styles.prevBackground} ${styles.arrowBackground}`}>
        <div
          style={{ pointerEvents: `${prevPointerEvent}` }}
          className={styles.prev}
          onClick={handlePrevClick}
        >
          <PrevIcon />
        </div>
      </div>
      <div className={styles.innerCarousel}>
        <img
          style={{
            margin: `10px ${ImageGap}px`,
            width: `${ImageSize}px`,
            transform: `translateX(${carouselTranslateStyle}px)`,
          }}
          src="https://img.elo7.com.br/product/original/39EBAD2/big-poster-filme-cruella-2021-lo03-tamanho-90x60-cm-cruella.jpg"
          alt="cruella"
        />
        <img
          style={{
            margin: `10px ${ImageGap}px`,
            width: `${ImageSize}px`,
            transform: `translateX(${carouselTranslateStyle}px)`,
            pointerEvents: 'none',
          }}
          src="https://img.elo7.com.br/product/original/39EBAD2/big-poster-filme-cruella-2021-lo03-tamanho-90x60-cm-cruella.jpg"
          alt="cruella"
        />
        <img
          style={{
            margin: `10px ${ImageGap}px`,
            width: `${ImageSize}px`,
            transform: `translateX(${carouselTranslateStyle}px)`,
          }}
          src="https://img.elo7.com.br/product/original/39EBAD2/big-poster-filme-cruella-2021-lo03-tamanho-90x60-cm-cruella.jpg"
          alt="cruella"
        />
        <img
          style={{
            margin: `10px ${ImageGap}px`,
            width: `${ImageSize}px`,
            transform: `translateX(${carouselTranslateStyle}px)`,
          }}
          src="https://img.elo7.com.br/product/original/39EBAD2/big-poster-filme-cruella-2021-lo03-tamanho-90x60-cm-cruella.jpg"
          alt="cruella"
        />
        <img
          style={{
            margin: `10px ${ImageGap}px`,
            width: `${ImageSize}px`,
            transform: `translateX(${carouselTranslateStyle}px)`,
          }}
          src="https://img.elo7.com.br/product/original/39EBAD2/big-poster-filme-cruella-2021-lo03-tamanho-90x60-cm-cruella.jpg"
          alt="cruella"
        />
        <img
          style={{
            margin: `10px ${ImageGap}px`,
            width: `${ImageSize}px`,
            transform: `translateX(${carouselTranslateStyle}px)`,
          }}
          src="https://img.elo7.com.br/product/original/39EBAD2/big-poster-filme-cruella-2021-lo03-tamanho-90x60-cm-cruella.jpg"
          alt="cruella"
        />
        <img
          style={{
            margin: `10px ${ImageGap}px`,
            width: `${ImageSize}px`,
            transform: `translateX(${carouselTranslateStyle}px)`,
          }}
          src="https://img.elo7.com.br/product/original/39EBAD2/big-poster-filme-cruella-2021-lo03-tamanho-90x60-cm-cruella.jpg"
          alt="cruella"
        />
        <img
          style={{
            margin: `10px ${ImageGap}px`,
            width: `${ImageSize}px`,
            transform: `translateX(${carouselTranslateStyle}px)`,
          }}
          src="https://img.elo7.com.br/product/original/39EBAD2/big-poster-filme-cruella-2021-lo03-tamanho-90x60-cm-cruella.jpg"
          alt="cruella"
        />
        <img
          style={{
            margin: `10px ${ImageGap}px`,
            width: `${ImageSize}px`,
            transform: `translateX(${carouselTranslateStyle}px)`,
          }}
          src="https://img.elo7.com.br/product/original/39EBAD2/big-poster-filme-cruella-2021-lo03-tamanho-90x60-cm-cruella.jpg"
          alt="cruella"
        />
        <img
          style={{
            margin: `10px ${ImageGap}px`,
            width: `${ImageSize}px`,
            transform: `translateX(${carouselTranslateStyle}px)`,
          }}
          src="https://img.elo7.com.br/product/original/39EBAD2/big-poster-filme-cruella-2021-lo03-tamanho-90x60-cm-cruella.jpg"
          alt="cruella"
        />
        <img
          style={{
            margin: `10px ${ImageGap}px`,
            width: `${ImageSize}px`,
            transform: `translateX(${carouselTranslateStyle}px)`,
          }}
          src="https://img.elo7.com.br/product/original/39EBAD2/big-poster-filme-cruella-2021-lo03-tamanho-90x60-cm-cruella.jpg"
          alt="cruella"
        />
        <img
          style={{
            margin: `10px ${ImageGap}px`,
            width: `${ImageSize}px`,
            transform: `translateX(${carouselTranslateStyle}px)`,
          }}
          src="https://img.elo7.com.br/product/original/39EBAD2/big-poster-filme-cruella-2021-lo03-tamanho-90x60-cm-cruella.jpg"
          alt="cruella"
        />
        <img
          style={{
            margin: `10px ${ImageGap}px`,
            width: `${ImageSize}px`,
            transform: `translateX(${carouselTranslateStyle}px)`,
          }}
          src="https://img.elo7.com.br/product/original/39EBAD2/big-poster-filme-cruella-2021-lo03-tamanho-90x60-cm-cruella.jpg"
          alt="cruella"
        />
        <img
          style={{
            margin: `10px ${ImageGap}px`,
            width: `${ImageSize}px`,
            transform: `translateX(${carouselTranslateStyle}px)`,
          }}
          src="https://img.elo7.com.br/product/original/39EBAD2/big-poster-filme-cruella-2021-lo03-tamanho-90x60-cm-cruella.jpg"
          alt="cruella"
        />
        <img
          style={{
            margin: `10px ${ImageGap}px`,
            width: `${ImageSize}px`,
            transform: `translateX(${carouselTranslateStyle}px)`,
          }}
          src="https://img.elo7.com.br/product/original/39EBAD2/big-poster-filme-cruella-2021-lo03-tamanho-90x60-cm-cruella.jpg"
          alt="cruella"
        />
      </div>
      <div className={`${styles.nextBackground} ${styles.arrowBackground}`}>
        <div
          style={{ pointerEvents: `${nextPointerEvent}` }}
          onClick={handleNextClick}
          className={styles.next}
        >
          <NextIcon />
        </div>
      </div>
    </div>
  )
}

export { Carousel }
