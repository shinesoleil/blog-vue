const articles = [
  {
    title: 'China P3',
    id: '1',
    url: 'https://raw.githubusercontent.com/shinesoleil/blog-vue/master/static/p3.md',
  },
  {
    title: 'English Community',
    id: '2',
    url: 'https://raw.githubusercontent.com/shinesoleil/blog-vue/master/static/english-community.md',
  },
  {
    title: 'third',
    id: '3',
    url: 'https://raw.githubusercontent.com/shinesoleil/blog-vue/master/static/p3.md',
  },
];

export default articles;

export function getUrlById(id) {
  return articles.find(item => (item.id === id)).url;
}
