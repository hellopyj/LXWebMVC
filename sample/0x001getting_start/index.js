        /**
         * Created by lyxxx on 5/18/2016.
         */
        var pathSeparation = "/";//路径分隔符
        var componentRoot = "component";//组件根目录
        var htmlSuffix=".html";//html文件后缀
        var cssSuffix=".css";//css文件后缀
        var jsSuffix=".js";//js文件后缀
        /**
         * 拼装组件路径
         * @param componentName 组件名称
         * @param fileType 文件名称
         * @returns {string} 组件完整路径
         */
        function componentNameMatch(componentName, fileType) {
            var pathMatch=componentRoot + pathSeparation + componentName + pathSeparation+componentName;
            console.log(pathMatch);
            switch (fileType){
                case  htmlSuffix:
                    return pathMatch+htmlSuffix;
                case cssSuffix:
                    return pathMatch+cssSuffix;
                case jsSuffix:
                    return pathMatch+jsSuffix;
            }
            return
        }
        /**
         * 初始化控件
         * @param boxName 容器名称
         * @param comName 组件名称
         */
        function init(boxName, comName) {
            getCSS(comName);
            getHTML(boxName, comName);
            getJS(comName);
        }
        /**
         * 获取html组件模板
         * @param boxName
         * @param componentName
         */
        function getHTML(boxName, componentName) {
            $.get(componentNameMatch(componentName,htmlSuffix), function (data) {
                console.log(data);
                $("#" + boxName).append(data);
            });
        }
        /**
         * 获取组件JS
         * @param componentName
         */
        function getJS(componentName) {
            $.get(componentNameMatch(componentName,jsSuffix));
        }
        /**
         * 获取组件css
         * @param componentName
         */
        function getCSS(componentName) {
            $.get(componentNameMatch(componentName,cssSuffix), function (data) {
                $("head").append("<style>" + data + "</style>");
            })
        }
