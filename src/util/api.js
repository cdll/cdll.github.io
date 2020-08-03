// libs:
const pendingAxios= imports('axios')
.then((globalAxios)=> {
  // console.info({axios})
  axios.defaults.timeout= 6666
  return axios
})

function _fetch (){
  return pendingAxios
  .then((axios)=> {
    return axios.apply(this, arguments)
  })
}

// apis:

function getRepoList () {
  return _fetch({
    url: `/api/github-repo.json`
    // url: "https://api.github.com/users/cdll/repos"
  })
  .catch((err)=> _fetch({
    url: `/api/github-repo.json`
  }))
}

function getUserInfo (){
  return _fetch("https://api.github.com/users/cdll")
  .catch((err)=> ({
    data: {}
  }))
}

function getBlogList (){
  return _fetch('https://api.github.com/repos/cdll/blog/issues')
  .catch((err)=> {
    return _fetch('/api/blogs-list.json')
  })
}
function queryBlogList () {
  const query = gql`
query {
  viewer {
    name
  }
  repository(name: "blog", owner: "cdll") {
    issues(first: 99) {
      nodes {
        author {
          ... on User {
            avatarUrl
            name
          }
        }
        title
        url
      }
      totalCount
    }
  }
}
`
  return window.graphql.query({query})
}

function getIPinfo (){
  return _fetch({
    url: `http://ip.taobao.com/service/getIpInfo.php?ip=${'115.156.238.114'}`
    ,headers: {
      mode: 'no-cors'
      ,cache: 'default'
      ,credentials: "include"
    }
  })
}

function getPostDetail (num) {
  return _fetch({
    url: `https://api.githubs.com/repos/cdll/blog/issues/${num}`
  })
  .catch(err=> {
    return _fetch(`/api/post_detail-${num}.json`)
  })
}

function getPostReplies (num) {
  return _fetch({
    url: `https://api.githubs.com/repos/cdll/blog/issues/${num}/comments`
  })
  .catch(err => {
    return _fetch(`/api/post_reply-${num}.json`)
  })
}

var apis= {
  getBlogList,
  getPostReplies,
  getPostDetail
}

;(function (global, factory) {
  (typeof exports === 'object' && typeof module !== 'undefined')
    ? factory(exports)
    : typeof define === 'function' && define.amd
      ? define(['exports'], factory)
      : factory(apis)
})(this, (function (exports) {
  exports= apis
}));
