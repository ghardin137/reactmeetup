const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const format = require('date-fns').format;

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        const Home = path.resolve(`./src/components/pages/home/index.js`);
        const About = path.resolve(`./src/components/pages/about/index.js`);
        const Blog = path.resolve(`./src/components/pages/blog/index.js`);
        const BlogPost = path.resolve(`./src/components/pages/blog_post/index.js`);
        const Contact = path.resolve(`./src/components/pages/contact/index.js`);
        const Page = path.resolve(`./src/components/pages/page/index.js`);
        const LivePage = path.resolve(`./src/components/pages/live-page/index.js`);
        // Query for markdown nodes to use in creating pages.
        graphql(
        `
            query pagesQuery {
                pages: allContentfulPage {
                    edges {
                        node {
                            id
                            slug
                            template
                        }
                    }
                }
                posts: allContentfulBlogPost(sort:{fields:updatedAt, order:DESC}) {
                    edges {
                        node {
                            id
                            slug
                            updatedAt
                        }
                    }
                }
            }
        `
        ).then(result => {
            if (result.errors) {
                reject(result.errors)
            }

            // Create pages.
            result.data.pages.edges.forEach((edge, index) => {
                let component = null;
                let path = `/${edge.node.slug}`;
                switch(edge.node.template) {
                    case "Home":
                        component = slash(Home);
                        path = `/`;
                        break;
                    case "About":
                        component = slash(About);
                        break;
                    case "Blog":
                        component = slash(Blog);
                        break;
                    case "Contact":
                        component = slash(Contact);
                        break;
                    case "Live":
                        component = slash(LivePage);
                        break;
                    default: 
                        component = slash(Page);
                        break;
                }
                createPage({
                    path: path, // required
                    component: component,
                    context: {
                        id: edge.node.id,
                    },
                })
            });

            // Create Chapters
            result.data.posts.edges.forEach((edge, index, array) => {
                let next = null;
                let prev = null;
                if(index > 0) {
                    prev = array[index - 1].node;
                }
                if(index < array.length - 1) {
                    next = array[index + 1].node;
                }
                const dateStr = format(new Date(edge.node.updatedAt), "YYYY-MM-DD");
                createPage({
                    path: `/blog/${dateStr}/${edge.node.slug}`,
                    component: slash(BlogPost),
                    context: {
                        id: edge.node.id,
                        next: next ? next.id : null,
                        prev: prev ? prev.id : null,
                    },
                })
            });

            resolve();
        })
    })
}