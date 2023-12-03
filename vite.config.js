import vituum from "vituum";
import postcss from "@vituum/vite-plugin-postcss";
import tailwindcss from "@vituum/vite-plugin-tailwindcss";
import nunjucks from "@vituum/vite-plugin-nunjucks";

export default {
    build: {
        outDir: "docs",
        emptyOutDir: false,
    },
    plugins: [
        vituum(),
        postcss(),
        tailwindcss(),
        nunjucks({
            root: "./src",
            options: {
                tags: {
                    blockStart: "<%",
                    blockEnd: "%>",
                    variableStart: "<$",
                    variableEnd: "$>",
                    commentStart: "<#",
                    commentEnd: "#>",
                },
            },
        }),
    ],
};
