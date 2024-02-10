import React from "react";

async function page  ({ searchParams: { q } })  {
    const results = await fetchSearch(q)
    return <div>page</div>;
};

export default page;
