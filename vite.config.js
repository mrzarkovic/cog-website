export default {
    root: "./src",
    base: "",
    build: {
        rollupOptions: {
            input: {
                main: "./src/index.html",
                about: "./src/about.html",
            },
        },
        outDir: "../docs",
    },
};
