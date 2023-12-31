import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="listings">Listings</Link>
      </p>
      <p>
        <Link to="listings/1">Listing 1</Link>
      </p>
      <p>
        <Link to="listings/new">Create Listing</Link>
      </p>
      <p>
        <Link to="vancouver">Vancouver Listings</Link>
      </p>
      <p>
        <Link to="vancouver/listings">Vancouver Listings</Link>
      </p>
      <p>
        <Link to="vancouver/listings/:id">Vancouver Listing 1</Link>
      </p>
    </div>
  );
}
