import Head from 'next/head';
import { descriptionMeta } from '@/layout/data';

const Meta = ({
  title = 'ARTGALLERY',
  description = descriptionMeta,
  children,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <meta
        name="theme-color"
        content="#476cc9"
      />

      <meta
        property="og:title"
        content="ARTGALLERY"
      />
      <meta
        name="keywords"
        content="art, 3d, online, website, meta, spaces, models, obj, gltf, glb, fbx, gallery"
      />
      <meta
        name="twitter:title"
        content="ARTGALLERY"
      />
      <meta
        name="generator"
        content="ARTGALLERY"
      />
      <meta
        name="subject"
        content="ARTGALLERY"
      />

      <meta
        name="robots"
        content="index,follow,noodp"
      />
      <meta
        name="googlebot"
        content="index,follow"
      />
      <meta
        name="subject"
        content="ARTGALLERY"
      />
      <meta content={title} />
      <meta content="website" />

      <meta content={'favicon.ico'} />
      <meta content={description} />

      <meta
        name="twitter:card"
        content={'favicon.svg'}
      />
      <meta
        name="twitter:title"
        content={title}
      />
      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={'favicon.svg'}
      />

      <meta content={title} />
      <meta content={description} />
      <meta content={'favicon.svg'} />

      <link
        rel="icon"
        type="image/svg"
        href={'favicon.svg'}
        sizes="32x32"
        data-mce-href={'favicon.svg'}
      />

      <meta
        name="msapplication-TileColor"
        content="#010C28"
      />
      <meta
        name="theme-color"
        content="#010C28"
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content="favicon.svg"
      />
      <meta
        property="og:image:secure_url"
        content="favicon.svg"
      />

      <meta content="favicon.svg" />
      <meta
        property="og:image:type"
        content="image/svg"
      />
      <meta
        property="og:image:width"
        content="300"
      />
      <meta
        property="og:image:height"
        content="300"
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:site_name"
        content="ARTGALLERY"
      />

      {children}
    </Head>
  );
};
export default Meta;
