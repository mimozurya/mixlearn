import { useState } from "react";

export const useSiteUser = () => {
    const [siteUser, setSiteUser] = useState(0);
    // console.log(+siteUser, "hook");
    return { siteUser, setSiteUser };
};
