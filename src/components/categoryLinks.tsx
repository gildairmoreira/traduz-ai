import React from "react";
import {
    IconBriefcase,
    IconBulb,
    IconSchool,
    IconWriting,
    IconMoodSmile,
    IconHeart,
    Icon as TablerIcon
} from "@tabler/icons-react";

interface Category {
    icon: TablerIcon;
    label: string;
}

const categories: Category[] = [
    { icon: IconBriefcase, label: "Negócios" },
    { icon: IconSchool, label: "Educação" },
    { icon: IconBulb, label: "Criativo" },
    { icon: IconHeart, label: "Saúde" },
    { icon: IconWriting, label: "Jornalismo" },
    { icon: IconMoodSmile, label: "Comunicação" },
];

const CategoryLinks: React.FC = () => {
    return (
        <div className="mt-10 sm:mt-20">
            {categories.map(({ icon: Icon, label }) => (
                <a
                    key={label}
                    className="m-1 py-2 px-3 inline-flex 
          items-center gap-x-2 text-sm font-medium 
          rounded-lg border border-gray-200 
          bg-white text-gray-800 shadow-sm hover:bg-gray-50
           disabled:opacity-50 disabled:pointer-events-none
            dark:bg-neutral-900 dark:border-neutral-700
             dark:text-white dark:hover:bg-neutral-800"
                    href="#"
                >
                    <Icon size={18} />
                    {label}
                </a>
            ))}
        </div>
    );
};

export default CategoryLinks;
