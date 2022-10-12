import React from "react"

import Navbar from "@src/components/common/navbar/navbar"
import Hero from "@src/components/common/hero/hero"
import Footer from "@src/components/common/footer/footer"

import * as style from "./page-layout.module.scss"

export default function PageLayout({ pageContext, title, lead, background, children }) {
    return (
        <div id={style.container}>
            <Navbar 
                lang={pageContext.lang}
                slug={pageContext.slug}
                translation={pageContext.translation}
            />
            <Hero title={title} lead={lead} background={background} />
            <div id={style.content}>
                {children}
            </div>
            <Footer lang={pageContext.lang} />
        </div>
    )
}
