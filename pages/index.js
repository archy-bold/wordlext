import Head from 'next/head';
import Script from "next/script";

export default function Home() {
    return (
        <>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

                <title>Wordle - A daily word game</title>
                <meta name="description" content="Guess the hidden word in 6 tries. A new puzzle is available each day." />

                <meta property="og:url" content="https://www.powerlanguage.co.uk/wordle/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Wordle - A daily word game" />
                <meta property="og:description" content="Guess the hidden word in 6 tries. A new puzzle is available each day." />
                <meta property="og:image" content="https://www.dailywordle.com/images/wordle_og_1200x630.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="powerlanguage.co.uk" />

                <meta name="theme-color" content="#6aaa64" />
                <link rel="manifest" href="/manifest.json" />
                <link href="/images/wordle_logo_32x32.png" rel="icon shortcut" sizes="3232" />
                <link href="/images/wordle_logo_192x192.png" rel="apple-touch-icon" />
            </Head>
            <Script id="set-hash-js">
              {`(function () {
                /* Defining the hash before the main bundle allows the bundle access window.hash */
                window.wordle = window.wordle || {};
                window.wordle.hash = 'e65ce0a5';
              })();`}
            </Script>
            <Script
                id="main-js"
                strategy="afterInteractive"
                src="/js/main.e65ce0a5.js"
                onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                }}
            />
            <game-app></game-app>
        </>
    );
};
