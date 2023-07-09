import axios from "@/libs/axios";
import React from "react";

export default async function ShowArticle({ params: { slug } }: any) {
    const article = await getArticle(slug);
    
    return (
        <div className="flex flex-col">
            <div className="flex justify-between" >
                <div className="px-5">
                    <h1 className="text-xl font-semibold">{article.title}</h1>
                    <span className="text-sm font-light text-gray-700">
                        Written by {article.author.name} on {article.publication_date}
                    </span>
                </div>
                <div className="px-10">
                    <h1 className="text-sm font-normal text-gray-700 text-right">{article.category.name}</h1>
                    <span className="flex gap-2">
                        {article.tags.map((tag: any, index: number) => (
                            <span className="text-sm text-gray-500" key={index}>{tag.name}</span>
                        ))}
                    </span>
                </div>
            </div>
            <span className="mt-10 px-5">{article.content}</span>
        </div>
    );
}

async function getArticle(slug: any) {
    const response = await axios.get(`/api/articles/${slug}`);
    const article = await response.data;

    return article;
}
