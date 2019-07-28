var index = 0, 
    timer = null,
    main = byId("main"),
    lis = document.getElementsByTagName("li"),
    imgs = byId("banner").getElementsByTagName("div");


    //封装的取对象方
    function byId(id){
        return typeof(id) === "string"?id = document.getElementById(id):id;
    }

    //主函数
    function mainLunbo(){
        
        //离开焦点的动作
        main.onmouseout = function(){
            timer = setInterval(function(){
                index++;
                if(index == 4){
                    index = 0;
                }
                changeImg();
            },1000);
            
        }

        //清除轮播效果
        main.onmouseover = function(){
            if(timer){
                clearInterval(timer);
            }
        }

        //给每个li绑定事件
        for(var a=0;a<4;a++){
            lis[a].id = a;
            lis[a].onclick = function(){
                index = this.id;
                changeImg();
            }
        }

    }

    //切换方法
    function changeImg(){
        for(var i=0;i<4;i++){
            lis[i].className = "";
            imgs[i].style.display = "none";
            
        }
        lis[index].className = "li-active";
        imgs[index].style.display = "block";
        
        
    }

    mainLunbo();
    //在打开页面时实现轮播效果
    main.onmouseout();