

function search(){

  var selecter = document.getElementById("selectpicker")
  // console.log(selecter.value)
  var keyword = document.getElementById("keyword").value

  keyword = keyword.Trim()
  if(keyword.startWith("百度 ")){
    selecter.value = "百度"
  }else if(keyword.startWith("谷歌 ")){
    selecter.value = "谷歌"
  }else if(keyword.startWith("stackof ")){
    selecter.value = "stackOF"
  }else if(keyword.startWith("wiki")){
    selecter.value = "wiki"
  }else if(keyword.startWith("duckduckgo ")){
    selecter.value = "duckdgo"
  }else if(keyword.startWith("必应 ")){
    selecter.value = "必应"
  }else if(keyword.startWith("github ")){
    selecter.value = "github"
  }else if(keyword.startWith("码云")){
    selecter.value = "码云"
  }else if(keyword.startWith("知乎 ")){
    selecter.value = "知乎"
  }else if(keyword.startWith("csdn ")){
    selecter.value = "csdn"
  }else if(keyword.startWith("简书 ")){
    selecter.value = "简书"
  }else if(keyword.startWith("掘金 ")){
    selecter.value = "掘金"
  }else if(keyword.startWith("博客园 ")){
    selecter.value = "博客园"
  }else if(keyword.startWith("oschina ")){
    selecter.value = "oschina"
  }else if(keyword.startWith("bilibili")){
    selecter.value = "bilibili"
  }
  
  
  var url = ""
  switch(selecter.value){
    case "百度": url = "https://baidu.com/s?wd="; break;
    case "谷歌": url = "https://google.com/search?q="; break;
    case "stackOF": url = "http://stackoverflow.com/search?q="; break;
    case "wiki": url = "https://en.wikipedia.org/wiki/"; break;
    case "duckdgo": url = "https://duckduckgo.com/?q="; break;
    case "必应": url = "https://cn.bing.com/search?q="; break;
    case "github": url = "https://github.com/search?q="; break;
    case "码云": url = "https://gitee.com/search?q="; break;
    case "知乎": url = "https://www.zhihu.com/search?type=content&q="; break;
    case "csdn": url = "http://so.csdn.net/so/search/s.do?q="; break;
    case "简书": url = "https://www.jianshu.com/search?q="; break;
    case "掘金": url = "https://juejin.im/search?query="; break;
    case "博客园": url = "https://zzk.cnblogs.com/s?t=b&w="; break;
    case "oschina": url = "https://www.oschina.net/search?scope=project&q="; break;
    case "bilibili": url = "https://search.bilibili.com/all?keyword="; break;
    default: url = "https://baidu.com/s?wd=";
  }


  // if(selecter.value === "百度"){
  //   url = "https://baidu.com/s?wd="
  // } else if(selecter.value === "谷歌"){
  //   url = "https://google.com/search?q="
  // }else if(selecter.value === "duckdgo"){
  //   url = "https://duckduckgo.com/?q="
  // }else if(selecter.value === "必应"){
  //   url = "https://cn.bing.com/search?q="
  // }else if(selecter.value === "github"){
  //   url = "https://github.com/search?q="
  // }else if(selecter.value === "知乎"){
  //   url = "https://www.zhihu.com/search?type=content&q="
  // }else if(selecter.value === "csdn"){
  //   url = "http://so.csdn.net/so/search/s.do?q="
  // }else if(selecter.value === "简书"){
  //   url = "https://www.jianshu.com/search?q="
  // }else if(selecter.value === "oschina"){
  //   url = "https://www.oschina.net/search?scope=project&q="
  // }

  url = url + keyword
  window.open(url, "_blank")
  document.getElementById('keyword').value = ''
}