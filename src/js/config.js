const domain = 'http://139.199.192.48:8888';
export default {
    imgDomain: 'http://ofv795nmp.bkt.clouddn.com/',
    domain: domain,
    // 新闻
    newsList: domain + '/api/getnewslist',
    newsDetails: domain + '/api/getnew/',
    // 评论
    commentPut: domain + '/api/postcomment/',
    commentList: domain + '/api/getcomments/',
    // 图片
    photoList: domain + '/api/getimages/',  // 图片列表
    photoCategoryList: domain + '/api/getimgcategory', // 图片分类
    photoImages: domain + '/api/getthumimages/', // 缩略图 
    photoDetails: domain + '/api/getimageInfo/' // 图片详情数据
};
