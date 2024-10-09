const base = {
    get() {
        return {
            url : "http://localhost:8080/django061y336g/",
            name: "django061y336g",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Python的校园个人闲置物品换购平台的设计与开发"
        } 
    }
}
export default base
