        var helloWorld=function () {
            var component=$("#helloworld");
            var p=component.children("p");
            component.click(function () {
                    setText(p,"you click hello world");
            });
            function setText(componentName,text) {
                componentName.text(text);
            }
            function getText() {
                return component.innerText();
            }

        };
        helloWorld();


