"use client";
import { DocSearch } from "@docsearch/react";
import "@docsearch/css";

function Search() {
  return (
    <DocSearch appId="W7GZIJYJAG" indexName="videojobs" apiKey="6ebaa5dd44ce769260e0be237756bc38" />
  );
}

export { Search };
