import { SERVER } from "./const.js"

const MainRoute = {
    url: `${SERVER}/main`,
    crud: [
        "GET",
        "PATCH"
    ],
    Title: "Главная информация"
};
const PostsRoute = {
    url: `${SERVER}/posts`,
    crud: [
        "GET",
        "POST",
        "PATCH",
        "DELETE"
    ],
    Title: "Посты"
};
const PriceRoute = {
    url: `${SERVER}/price`,
    crud: [
        "GET",
        "POST",
        "PATCH",
        "DELETE"
    ],
    Title: "Прайслист"
};
const WhyRoute = {
    url: `${SERVER}/why`,
    crud: [
        "GET",
        "POST",
        "PATCH",
        "DELETE"
    ],
    Title: "Наши преимущества"
};

export default routes[MainRoute, PostsRoute, PriceRoute, WhyRoute];