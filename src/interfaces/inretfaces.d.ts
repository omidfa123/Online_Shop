import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import { number } from 'zod';

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
// type CategoryType = {
//   _id: string;
//   name: string;
// };
// type SubCategoryType = {
//   name: string;
//   category: string;
// };

type CategoryType = {
  createdAt: string;
  icon: string;
  name: string;
  slugname: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

type SubCategoryType = {
  category: string;
  createdAt: string;
  name: string;
  slugname: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

type RatingType = {
  rate: number;
  count: number;
};

type ProductType = {
  _id: string;
  category: CategoryType;
  subcategory: SubCategoryType;
  name: string;
  price: number;
  quantity: number;
  brand: string;
  description: string;
  thumbnail: string;
  images: string[];
  rating: RatingTypes;
  createdAt: string;
  updatedAt: string;
  slugname: string;
  __v: number;
};

interface ProductProps {
  products: {
    status: string;
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: {
      products: ProductType[];
    };
  };
  categories: {
    status: string;
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: {
      categories: CategoryType[];
    };
  };
  subcategories: {
    status: string;
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: {
      subcategories: SubCategoryType[];
    };
  };
};