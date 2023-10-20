import React from "react"
import type { HeadFC, HeadProps } from "gatsby"
import Meta from "@src/components/common/Meta"
import PageLayout from "@src/components/layouts/PageLayout"
import Archive from "@src/components/archive/Archive"

const ArchivePage: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout pageContext={pageContext} title="Archive">
      <Archive lang={pageContext.lang} />
    </PageLayout>
  )
}

export default ArchivePage

export const Head: HeadFC<HeadProps> = () => (
  <Meta lang="en" title="Archive" />
)
