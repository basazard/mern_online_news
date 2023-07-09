import BlogArticles from "@/components/BlogArticles";
import axios from "@/libs/axios";
import React from "react";

export default async function Categories({ params: { slug } }: any) {
    const articles = await getArticlesByCategory(slug);

    return (
        <div>
            <BlogArticles articles={articles.data}/>
        </div>
    );
}

async function getArticlesByCategory(slug: any) {
    const response = await axios.get(`api/categories/${slug}`);
    const articles = await response.data;

    return articles;
}
