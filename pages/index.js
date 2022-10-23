import Head from 'next/head'
import work1 from "../public/images/work1_xp3ns.png"
import work2 from "../public/images/work2_decisions.png"
import PortfolioCard from '../components/PortfolioCard'
import PortfolioSection from '../components/PortfolioSection'
import thumbsDark from '../public/images/thumbs-light512.png'
import thumbsLight from '../public/images/thumbs-dark512.png'
import NavBar from '../components/NavBar'
import DetailCardSection from '../components/DetailCardSection'
import PageIntro from '../components/PageIntro'
import { useState } from 'react'

export default function Home() {
    const [dark, setDark] = useState("")
    const [mainImg, setMainImg] = useState(thumbsLight)

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
                <title>Rory Coded This</title>
                <meta name="description" content="Rory's website and portfolio - Rory coded this" />
                <meta name="author" content="Rory Samson" />
                <meta name="keywords" content="HTML, CSS, Javascript, Portfolio, Rory Samson" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='bg-white dark:bg-stone-900 dark:text-white font-asap transition'>
                <NavBar {...{ toggleDark }} />
                <PageIntro {...{ mainImg }} />
                <DetailCardSection />
                <PortfolioSection title="Portfolio" subtitle="Check out a sample of my latest projects!">
                    <PortfolioCard {...{ title: "Expense Tracker", img: work1, url: "https://xp3ns.herokuapp.com/" }} />
                    <PortfolioCard {...{ title: "Decision Maker", img: work2, url: "https://limitless-mountain-91728.herokuapp.com/" }} />
                </PortfolioSection>

            </main >
        </div>
    )
}
