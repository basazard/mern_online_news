import React, { useEffect } from "react";
import axios from "../libs/axios";
import BlogArticles from "@/components/BlogArticles";

export default async function Home() {
    const articles = await getData();

    return (
        <div className="">
            <BlogArticles articles={articles}/>
        </div>
    );
}

async function getData() {
    const response = await axios.get(`/api/articles`);
    const articles = await response.data;

    return articles;
}
