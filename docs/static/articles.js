const articles = [
  {
    title: 'China P3',
    id: '1',
    date: '2017-12-05',
    url: 'https://raw.githubusercontent.com/shinesoleil/blog-vue/master/static/p3.md',
  },
  {
    title: 'English Community',
    id: '2',
    date: '2018-01-01',
    url: 'https://raw.githubusercontent.com/shinesoleil/blog-vue/master/static/english-community.md',
  },
  {
    title: 'More Articles',
    id: '3',
    date: '2018-02-27',
    url: 'https://raw.githubusercontent.com/shinesoleil/blog-vue/master/static/more.md',
  },
];

export default articles;

export function getUrlById(id) {
  return articles.find(item => (item.id === id)).url;
}
