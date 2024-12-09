import { JSX } from "react";

import { Metadata } from "next";

export interface PageProps {
  params: {
    id: string;
  };
}

export default function Details(props: PageProps): Promise<JSX.Element>;

export function generateMetadata(props: PageProps): Promise<Metadata>;
