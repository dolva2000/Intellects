/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <div>
          <Head>
            <body>
              <Main />
              <NextScript />
              <script
                data-cfasync="false"
                src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
              ></script>
              <script src="/js/jquery-min.js"></script>
              <script src="/js/popper.min.js"></script>
              <script src="/js/bootstrap.min.js"></script>
              <script src="/js/color-switcher.js"></script>
              <script src="/js/jquery.counterup.min.js"></script>
              <script src="/js/waypoints.min.js"></script>
              <script src="/js/wow.js"></script>
              <script src="/js/owl.carousel.min.js"></script>
              <script src="/js/nivo-lightbox.js"></script>
              <script src="/js/jquery.slicknav.js"></script>
              <script src="/js/main.js"></script>
              <script src="/js/form-validator.min.js"></script>
              <script src="/js/contact-form-script.min.js"></script>
              <script src="/js/summernote.js"></script>
            </body>
          </Head>
        </div>
      </Html>
    );
  }
}

export default MyDocument;
