import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';

type NextPageWithLayout =
  | (NextPage & {
      getLayout?: (page: React.ReactElement) => React.ReactNode;
    })
  | {
      [key: string]: any;
    };

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

type LayoutProps = {
  children: React.ReactNode;
};

interface CustomIcons {
  username: (value: string) => ReactNode;
  password: (value: string) => ReactNode;
  forward: (value: string) => ReactNode;
  backward: (value: string) => ReactNode;
  cart: (value: string) => ReactNode;
  search: (value: string) => ReactNode;
}

type LoginValues = {
  username: string;
  password: string;
};
type CategoryType = {
  _id: string;
  name: string;
};
type SubCategoryType = {
  name: string;
  category: string;
};
