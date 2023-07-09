import Link from "next/link";
import React from "react";

export default function BlogArticles({ articles }: any) {
    return (
        <>
            {articles.map((article: any, index: number) => (
                <div key={index} className="flex flex-col border p-5 mb-5 bg-white hover:bg-gray-100">
                    <div className="flex justify-between">
                        <Link href={`/articles/${article.slug}`} className="text-xl font-medium">
                            {article.title}
                        </Link>
                        <span className="text-sm text-gray-500">{article.category.name}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Written by {article.author.name}</span>
                        <span className="flex gap-2">
                            {article.tags.map((tag: any, index:number) => (
                                <span className="text-sm text-gray-700" key={index}>{tag.name}</span>
                            ))}
                        </span>
                    </div>
                </div>
            ))}
        </>
    );
}
