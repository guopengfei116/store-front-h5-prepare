const domain = 'http://139.199.192.48:8888';
export default {
    domain: domain,
    // 新闻
    newsList: domain + '/api/getnewslist',
    newsDetails: domain + '/api/getnew/',
    // 评论
    commentPut: domain + '/api/postcomment/',
    commentList: domain + '/api/getcomments/'
};
