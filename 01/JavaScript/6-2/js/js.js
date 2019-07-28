var index = 0,
    timer = null,
    navLis = document.getElementsByTagName("li"),
    bannerImgs = byId("banner").document.getElementsByTagName("div"),
    main = byId("main");

    function byId(id){
        return typeof(id) === "string"?id = document.getElementById(id):id;
    }
    
    function mainLunbo(){

        main.onmouseout = function(){

            // var timer = setInterval(function(){
            //     index++;
            //     if(index == 4){
            //         index = 0;
            //     }
            //     changeImg();
    
            // },1000)

        }

        main.onmouseover = function(){
            
            alert("hello");
            // if(timer){
            //     clearInterval(timer);
            // }
        }
        
        
        // main.onmouseover=function(){
        //     if(timer){
        //         clearInterval(timer);
        //     }
            
        // }
        
    
    }
    
    // function changeImg(){
    //     for(var i=0;i<4;i++){
    //         lis[i].className = "";
    //         imgs[i].style.display = "none";
    //     }

    //     // imgs[index].style.display = "block";
    //     // lis[index].className = "img-active";
        
    // }
    
    
    mainLunbo();

   
    
    



