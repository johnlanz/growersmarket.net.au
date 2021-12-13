import 'typeface-montserrat';
import '../styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import { Layout } from '@components/layout';
import { apolloClient } from '@lib/apollo-client';
import * as gtag from '@lib/gtag';
import { ShopifyContextProvider } from '@lib/shopify-context';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import * as React from 'react';
import Script from 'next/script';

import siteSettings from '../data/site-settings.json';

LogRocket.init('uelrcs/growers-market');
setupLogRocketReact(LogRocket);

function App({ Component, pageProps }: AppProps) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1,
  });

  const router = useRouter();
  const isBrowser = typeof window !== 'undefined';
  React.useEffect(() => {
    isBrowser && window.fbq('track', 'PageView');
    const handleRouteChange = (url) => {
      gtag.pageview(url);
      isBrowser && window.fbq('track', 'PageView');
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ShopifyContextProvider
      shopName={process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}
      accessToken={process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN}
    >
      <ApolloProvider client={apolloClient}>
        <DefaultSeo
          titleTemplate={`%s | ${siteSettings.title}`}
          description={siteSettings.description}
          openGraph={{
            type: 'website',
            locale: 'en_AU',
            url: siteSettings.siteUrl,
            site_name: siteSettings.title,
            images: [{ url: siteSettings.shareImage.asset.url }],
          }}
        />
        <Head>
          <link rel="preconnect" href="https://cdn.sanity.io" />
          <link rel="preconnect" href="https://vitals.vercel-insights.com" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.webmanifest" />
        </Head>
        <Layout>
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 488972479122504);
          `,
            }}
          />
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </ShopifyContextProvider>
  );
}

export default App;
