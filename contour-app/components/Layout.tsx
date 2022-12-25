import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header>
      <nav className="border-b p-6">
        <div className="flex justify-between">
          <p className="text-4xl font-bold"> Profile Manager </p>
        </div>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-6 text-blue-500">Home</a>
          </Link>
          <Link href="/add-member">
            <a className="mr-6 text-blue-500">Add Member</a>
          </Link>
          <Link href="/search-member">
            <a className="mr-6 text-blue-500">Search Member</a>
          </Link>
          <Link href="/view-member">
            <a className="mr-6 text-blue-500">View Member</a>
          </Link>
        </div>
      </nav>
    </header>

    {children}
  </div>
);

export default Layout;
