"use client";
import qs from "query-string";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useDebounce from "@/app/hooks/useDebounce";
import Input from "../input";

const SearchInput = () => {
    const router = useRouter();
    const [value,setValue] = useState<string>("");
    const debouncedValue = useDebounce<string>(value, 500);

    useEffect(() => {
        const query = {
            title: debouncedValue,
        };

        const url = qs.stringifyUrl({
            url: '/search',
            query: query
        })
        router.push(url)
    }, [debouncedValue, router])
    return ( 
        <Input placeholder="Que veux tu écouter ?" value={value} onChange={(e) => setValue(e.target.value)}/>
     );
}
 
export default SearchInput;