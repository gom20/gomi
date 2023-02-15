import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
                <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css" />
                <link href="https://fonts.googleapis.com/css2?family=Lobster:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
