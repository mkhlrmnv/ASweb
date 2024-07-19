import React from 'react';
import type { HeadFC, HeadProps } from 'gatsby';
import Meta from '@src/components/common/Meta';
import PageLayout from '@src/components/layouts/PageLayout';

const Fuksiguide: React.FC<PageProps> = ({ pageContext }) => {
  return (
    <PageLayout
      pageContext={pageContext}
      title="Master's and International Fuksiguide 2024"
      lead="This guide contains everything you need to know about the university, studying and student life"
    >
      <div style={{ width: '100%' }}>
        <a
          style={{ marginBlock: '1rem' }}
          className="rounded-button"
          target="_blank"
          href="https://drive.google.com/file/d/1vYs4y_rdWCzXB-4x7nl-o2d02wzuA4Qv/view?usp=sharing"
          rel="noreferrer"
        >
          Download PDF
        </a>
        <iframe
          src="https://drive.google.com/file/d/1vYs4y_rdWCzXB-4x7nl-o2d02wzuA4Qv/preview"
          width="100%"
          height="800"
          allow="autoplay"
        ></iframe>
      </div>
    </PageLayout>
  );
};

export default Fuksiguide;

const description: string =
  'This guide contains everything you need to know about the university, studying and student life';

export const Head: HeadFC<HeadProps> = () => <Meta lang="en" title="Fuksiguide" description={description} />;
