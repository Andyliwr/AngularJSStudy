##AngularJS进阶
---
###实现功能
1. 在js里设置变量展示到前端
2. 
###注解
1. 在body标签里声明module（使用ng-app），在js里实现module，以及引入其他module。
2. module有一个controller，在页面里使用ng-controller设置module的控制范围
3. 前端可以直接通过{{value}}的形式引用module中$scope的成员变量，{{function()}}
4. MVC--module、ng-controller设置页面元素、控制器controller
5. 使用ng-bind可以避免使用{{value}}的形式去绑定数据
6. ng-clock，当页面渲染的时候遇到ng-clock事浏览器不会去解释{{}}里的内容，在页面加载结束之后才会去加载值，并去掉该标签的class树形
7. control可以有多个，他们之间的变量相互不影响