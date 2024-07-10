import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import * as style from "./studies.module.scss"
import PageLayout from "@src/components/layouts/PageLayout"
import { StaticImage } from "gatsby-plugin-image"
import CollapseBox from '@src/components/common/CollapseBox';

interface Props extends PageProps {
    data: ImageArrayProps
}

const MinorGuide: React.FC<Props> = ({ pageContext, data }) => {

  return (
    <PageLayout
        pageContext={pageContext}
        title='Sivuaineopas'
    >
      <div className={style.table}>
        <div className={style.list}>
          <p>Tervetuloa lukemaan AS:n omaa sivuaineopasta! Opas on luotu muiden kiltalaisten toimesta, ja pohjautuen heidän kokemuksiin eri opinnoista.</p>
          <p>Tästä suuret kiitokset jokaiselle joka on antanut omat panoksen tämän luomisessa.</p>
          <p>Oppaaseen on vasta lisätty kaikista suosituimmat sivuainee, ja mikäli sinulla on sivuaine jota ei löydy listasta niin ilmaise itsesi opintomestarille (opintomestari@as.fi). Lisäksi muut palautteet, korjausehdotukset ja turhat toiveet ovat aina tervetulleita.</p>
          <p>Opas on luotu 2022 - 2024 opintosuunitelman mukaan niin ota se huomioon, että esimerkiksi kurssi nimet ovat saattaneet muuttua.</p>
        </div>

        <div className={style.sidePanel}>
          <StaticImage className={style.imageLarge} src="../../images/images/hallopedihommii.png" alt=""/>
        </div>
      </div>

      <div>
        <CollapseBox title={Informaatioteknologia}>

        </CollapseBox>
      </div>
    </PageLayout>
  )
}

export default MinorGuide

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Sivuaineopas" />
)
