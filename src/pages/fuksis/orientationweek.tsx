import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"
//import heropic from "@src/images/images/IMG_6067-Edit.jpg" //pitää vaihtaa


const Orientaatioviikko: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout
      pageContext={pageContext}
      title='Orientaatioviikko'
//      background={heropic}
      heroHeight='short'
    >

        <h2 id='Orientaatioviikon aikataulu'>aikataulu</h2>

        <div>
          <p></p>
        </div>
    </PageLayout>
  )
}

export default Orientaatioviikko

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="fi" title="Orientaatioviikko" />
)
