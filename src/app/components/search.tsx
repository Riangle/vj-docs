"use client";
import { DocSearch } from "@docsearch/react";
import "@docsearch/css";

function Search() {
  return (
    <DocSearch appId="KETBUPPLSS" indexName="cherry" apiKey="9e5d9817ccd10d9dd9728696b2abf1eb" />
  );
}

export { Search };
