export function load() {
    return {
        menus: [
            {
                name: "О курсе",
                link: "#course",
            },
            {
                name: "Стомость",
                link: "#price",
            },
            {
                name: "Документы",
                link: "#docs",
            },
        ],
        videourl: "https://www.youtube.com/embed/9bZkp7q19f0",
        hello_images: [
            {
                src: "/hello_block_image_1.png",
                alt: "hello image",
            },
            {
                src: "/hello_block_image_2.png",
                alt: "hello image",
            },
        ],
        key_blocks: [
            {
                first: "24",
                second: "часа",
                third: "видеолекции",
            },
            {
                first: "48",
                second: "",
                third: "слайдов",
            },
            {
                first: "124",
                second: "страницы",
                third: "конспектов",
            },
        ],
    };
}
