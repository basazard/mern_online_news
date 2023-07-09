import axios from "@/libs/axios";
import Link from "next/link";
import React from "react";

export default async function Navbar() {
    const categories = await getCategories();
    return (
        <div className="flex justify-between bg-violet-500 px-5 py-3 mb-5 items-center">
            <div className="">
                <Link href="/" className="block text-lg font-medium text-white hover:text-gray-200">
                    Online News
                </Link>
            </div>
            <div className="">
                <ul className="flex">
                    {categories.map((category: any, index: number) => (
                        <li key={index}>
                            <Link href={`/categories/${category.slug}`} className="block px-4 text-white text-sm font-regular">{category.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

async function getCategories() {
    const response = await axios.get(`/api/categories`);
    const categories = await response.data;

    return categories;
}
