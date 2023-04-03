import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import loader from '@/components/loader/style';

export default class extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const renderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => {
        return renderPage({
          enhanceApp: (App) => {
            return (props) => {
              return sheet.collectStyles(<App {...props} />);
            };
          },
        });
      };

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { styles } = this.props;

    return (
      <Html lang="en">
        <Head>
          {styles}
          <style>{loader}</style>
        </Head>

        <body>
          <div id={'loader'}>
            <div className="spinner" />
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
