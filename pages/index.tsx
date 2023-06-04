import Head from "next/head";

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient text-white">
      <Head>
        <title>Webdiamond - About Me</title>
        <meta
          name="description"
          content="Webdiamond - Frontend development with nodejs, typescript, and more."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-grow flex-col items-center justify-center">
        <div className="mx-auto max-w-screen-md p-4 text-left">
          <h1 className="font-helvetica text-4xl font-bold">Webdiamond</h1>
          <h2 className="font-helvetica mt-4 text-2xl font-bold">
            Quinten Van Kerrebroeck
          </h2>
          <p className="mt-4 text-lg">
            I&apos;m a developer with experience in Node.js, React, GraphQL,
            JSON, CSS, HTML, accessibility, Storybook, Docker, TypeScript,
            Next.js, CSS Modules, styled components, Axios, Git, AWS,
            Cloudflare, Express, and Jest.
          </p>
        </div>
      </div>
      <footer className="bg-blue-800 p-4 text-center">
        <p className="text-white">
          Built using{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://pages.github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub Pages
          </a>
        </p>
        <div className="mt-2">
          <p className="mt-4">
            Connect
            <span role="img" aria-label="Handshake Emoji">
              {" "}
              🤝
            </span>
          </p>
          <div className="mt-2">
            <a
              href="https://github.com/quintenvk"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 rounded-lg bg-gray-800 p-2 text-white hover:bg-gray-700"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/quinten-van-kerrebroeck-21337330/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 rounded-lg bg-gray-800 p-2 text-white hover:bg-gray-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
