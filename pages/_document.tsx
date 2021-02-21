import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
          { 
            //<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
            //<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
            //  <link href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,300;0,400;0,700;1,200;1,300;1,400;1,700&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap" rel="stylesheet"></link>
            //<link
            //  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            //  rel="stylesheet"
            ///>
            //<link
            //  href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap"
            //  rel="stylesheet"
            ///>
            //<link
            //  href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap"
            //  rel="stylesheet"
            ///>
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
