import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <script async="" src="/js/js"></script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
