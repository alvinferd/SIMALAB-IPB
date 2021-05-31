import { Children } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import CustomTheme from "@/themes/default";

class AppDocument extends Document {
  render() {
    return (
      <Html lang="id">
        <Head>
          <meta name="theme-color" content={CustomTheme.palette.primary.main} />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

AppDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default AppDocument;
