import rss from "@astrojs/rss";

const postImportResult = import.meta.globEager("./posts/*.md");
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "The SE Club Blog",
    description: "A Website for the SE Club",
    site: import.meta.env.SITE,
    items: import.meta.glob("./posts/**/*.md"),
});
