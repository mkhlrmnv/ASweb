import React from "react"
import { graphql } from "gatsby"
import type { HeadFC } from "gatsby"

import { MDXProvider } from "@mdx-js/react"

import DocumentLayout from "@src/components/layouts/DocumentLayout"
import Meta from "@src/components/common/Meta"

import { createSlug } from "./helpers/slugger"
import type { Slugs } from "./helpers/slugger" 

interface DataProps {
  mdx: {
    fields: {
      lang: string
    }
    frontmatter: {
      [key:string]: string;
    }
  },
  pageContext: any
}

interface Props extends PageProps {
  data: DataProps
}

const PageTemplate: React.FC<Props> = ({ pageContext, data, children }) => {
  const { title, lead, background, heroHeight } = data.mdx.frontmatter
  const slugs: Slugs = {}

  return (
      <DocumentLayout
          pageContext={pageContext}
          title={title}
          lead={lead}
          background={background}
          heroHeight={heroHeight}
      >
          <MDXProvider>
              {children}
          </MDXProvider>
      </DocumentLayout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        lang
      }
      frontmatter {
        title
        lead
        background
        heroHeight
      }
    }
  }
`

export default PageTemplate

export const Head: HeadFC<DataProps> = props => (
  <Meta lang={props.data.mdx.fields.lang} title={props.data.mdx.frontmatter.title} />
)
