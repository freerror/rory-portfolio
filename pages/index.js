import { useRef, useState } from 'react'
import Head from 'next/head'

import thumbsLight from '../public/images/thumbs-light512.png'
import thumbsDark from '../public/images/thumbs-dark512.png'
import code from '../public/images/code512.png'
import design from '../public/images/design512.png'
import analysis from '../public/images/analysis512.png'
import work1 from "../public/images/work1_xp3ns.png"
import work2 from "../public/images/work2_decisions.png"

import NavBar from '../components/NavBar'
import PageIntro from '../components/PageIntro'
import DetailCardSection from '../components/DetailCardSection'
import DetailCard from '../components/DetailCard'
import PortfolioSection from '../components/PortfolioSection'
import PortfolioCard from '../components/PortfolioCard'

import siteData from '../fixtures/siteData.json'

export default function Home() {
    const [dark, setDark] = useState("")
    const [mainImg, setMainImg] = useState(thumbsLight)
    const detailSection = useRef(null)

    function handleScrollClick() {
        detailSection?.current.scrollIntoView({ behavior: 'smooth' })
    }

    const toggleDark = () => {
        setDark(prevDark => {
            console.log(prevDark)
            if (prevDark) {
                setMainImg(thumbsLight)
                return ""
            } else {
                setMainImg(thumbsDark)
                return "dark"
            }
        })
    }

    return (
        <div className={dark}>
            <Head>
                <title>{siteData.title}</title>
                <meta name="description" content={siteData.description} />
                <meta name="author" content={siteData.author} />
                <meta name="keywords" content={siteData.keywords} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='bg-white dark:bg-stone-900 dark:text-white font-asap transition'>
                <NavBar {...{ toggleDark }} />
                <PageIntro {...{ ...siteData.intro, mainImg, handleScrollClick }} />
                <div ref={detailSection} className="h-24"></div>
                <DetailCardSection {...siteData.detail} >
                    {siteData.detail.cards.map((card, idx) => (
                        <DetailCard key={idx} {...card} />
                    ))}
                </DetailCardSection>
                <PortfolioSection title="Portfolio" subtitle="Check out a sample of my latest projects!">
                    {siteData.portfolio.cards.map((card, idx) => (
                        <PortfolioCard key={idx} {...card} />
                    ))}
                </PortfolioSection>

            </main >
        </div>
    )
}
