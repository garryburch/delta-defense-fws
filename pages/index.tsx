import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import s from '../styles/Home.module.scss'

import Data from "../data/data"
const Home: NextPage = () => {
  // console.log("Data")
  // console.dir(Data)

  const timelineHeight = () => {  // Arrow function to find height of various elements for timeline cards

    const firstCard = document.getElementById('card-0')
    const lastCard = document.getElementById('card-4')
    const cardsLine = document.getElementById('cardsLine')

    if (firstCard != null && cardsLine != null) {
      const offsetHeight = firstCard.offsetHeight
      cardsLine.style.top = (offsetHeight / 2) + 3 + 'px'
    }

    if (lastCard != null && cardsLine != null) {
      const offsetHeight = lastCard.offsetHeight
      cardsLine.style.bottom = (offsetHeight / 2) + 3 + 'px'
    }
  }

  useEffect(() => {

    timelineHeight(); // Call timelineHeight to run only once on page load

    window.addEventListener("load", function () { // EventListener for window resize
      window.dispatchEvent(new Event('resize'));
    });

    return () => {
      window.onresize = function () {
        timelineHeight();
      }
    }

  }, []);

  return (
    <>
      {
        Data &&
        <>

          <Head>
            <title>{Data.siteTitle}</title>
            <meta name="description" content={Data.siteContent} />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <nav className={s.nav}>
            <div className={s.nav__top}>
              <div className={s.container}>
                <div className={s.nav__top__content}>
                  <span className={s.nav__logo__left}>
                    <a
                      href="https://www.usconcealedcarry.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src="/uscca-logo.svg" alt="Uscca Logo" height={59.07} width={56.64} />
                    </a>
                  </span>
                  <span className={s.nav__logo__right}>
                    <span className={s.nav__logo__right__copy}>
                      {Data.navRightCopy}
                    </span>
                    <a
                      href="https://www.deltadefense.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src="/delta-defense-logo.svg" alt="Delta Defense Logo" height={35.27} width={98.74} />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className={s.nav__bottom}>
              <div className={s.container}>
                <div className={s.nav__bottom__content}>
                  <span className={s.nav__bottom__content__phone}>
                    {Data.phoneText}
                    <a
                      href={"tel:" + Data.phone}
                    >
                      {Data.phone}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
          
          <div className={s.hero}>
            <div className={s.container}>
              <div className={s.hero__content}>
                <div className={s.hero__content__left}>
                  <div className={s.hero__content__left__image}>
                    <Image
                      src="/hero-community-icons.png"
                      alt="Hero Community Icons"
                      priority
                      layout="responsive"
                      width={341}
                      height={239}
                    />
                  </div>
                </div>
                <div className={s.hero__content__right}>
                  <div className={s.hero__content__right__stack}>
                    <div className={s.hero__content__right__stack__circle}>
                      <span>
                        <span>4</span>
                      </span>
                      <span></span>
                    </div>
                    <div className={s.hero__content__right__stack__image}>
                      <Image
                        src="/community.png"
                        alt="Community CTA"
                        priority
                        layout="responsive"
                        width={423}
                        height={76}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <main className={s.main}>
            <div className={s.container}>
              <div className={s.cards}>
                <div className={s.cards__line} id='cardsLine'></div>
                {
                  Data && Data.cards.map((card, i) => {
                    return (
                      <div
                        key={'card' + i}
                        className={`${s.card} ${i % 2 === 0 ? s.card__odd : s.card__even}`}
                      >
                        <div className={s.card__inner} id={"card-" + i}>
                          <h2 className={s.card__title}>
                            {card.title}
                          </h2>
                          <p className={s.card__content}>
                            {card.content}
                          </p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </main>

        </>
      }
    </>
  )
}

export default Home
