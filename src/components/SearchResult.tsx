/* eslint-disable @next/next/no-img-element */

import { getFavicon } from "@/utils";

const SearchResult = ({ ...props }) => {
  return (
    <div>
      <img src={getFavicon(props.url)} alt={`Favicon for ${props.url}`} />
      <p>{props.url}</p>
      <p>{props.title}</p>
    </div>
  );
};

export default SearchResult;
