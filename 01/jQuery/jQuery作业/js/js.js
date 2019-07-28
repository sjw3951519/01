var firstLi = byId("firstLi"),
    secondLi = byId("secondLi"),
    thirdLi = byId("thirdLi"),
    fourthLi = byId("fourthLi"),
    firstDiv = byId("firstDiv"),
    secondDiv = byId("secondDiv"),
    thirdDiv = byId("thirdDiv"),
    fourthDiv =byId("fourthDiv"),
    shopCar = byId('shopCar'),
    topCar = byId('topCar'),
    shopCarImg = byId('shopCarImg'),
    shopCarArrow = byId('shopCarArrow'),
    goodsLists = byId('goodsList').getElementsByTagName('li'),
    bg = byId('bg'),
    innerNav = document.getElementsByClassName('inner-nav'),
    leftNav = byId('left-nav'),
    lunbo = byId('lunbo'),
    index =0,
    timer = null,
    slides = lunbo.getElementsByTagName('div'),
    spans = byId('dots').getElementsByTagName('span'),
    prev = byId('prev'),
    next = byId('next'),
    rightNavlis = byId('rightNav').getElementsByTagName('li'),
    spansOne = byId('spansOne'),
    spansTwo = byId('spansTwo'),
    spansThree = byId('spansThree'),
    spansFour = byId('spansFour'),
    spansSix = byId('spansSix'),
    spansFive = byId('spansFive')
    imgOne = byId('imgOne'),
    imgTwo = byId('imgTwo'),
    imgThree = byId('imgThree'),
    imgFour = byId('imgFour'),
    imgFive = byId('imgFive'),
    imgSix = byId('imgSix'),
    floorGoodsFour = byId('floorGoodsFour'),
    floorGoodsFive = byId('floorGoodsFive'),
    floorGoodsSix = byId('floorGoodsSix'),
    liOne = byId('liOne'),
    liTwo = byId('liTwo'),
    liThree = byId('liThree'),
    liFour = byId('liFour'),
    liFive = byId('liFive'),
    pOne = byId('pOne'),
    pTwo = byId('pTwo'),
    pThree = byId('pThree'),
    pFour = byId('pFour'),
    pFive = byId('pFive');
  

function byId(id){
	return typeof(id) === "string"?document.getElementById(id):id;
}

function mainFunction(){
    

    // 头部导航栏的动作绑定事件
    firstLi.onmouseover = function(){
        this.style.overflow = 'visible';   
        firstDiv.style.border = '#dbd6d6 solid 1px';
        firstDiv.style.backgroundColor = 'white';
    };

    secondLi.onmouseover = function(){
        this.style.overflow = 'visible';   
        secondDiv.style.border = '#dbd6d6 solid 1px';
        secondDiv.style.backgroundColor = 'white';
    };

    thirdLi.onmouseover = function(){
        this.style.overflow = 'visible';   
        thirdDiv.style.border = '#dbd6d6 solid 1px';
        thirdDiv.style.backgroundColor = 'white';
    };

    fourthLi.onmouseover = function(){
        this.style.overflow = 'visible';   
        fourthDiv.style.border = '#dbd6d6 solid 1px';
        fourthDiv.style.backgroundColor = 'white';
    };

    firstLi.onmouseout = function(){
        this.style.overflow = 'hidden';
        firstDiv.style.border = 'transparent solid 1px';
        firstDiv.style.backgroundColor = '#f3f5f7';
    }

    secondLi.onmouseout = function(){
        this.style.overflow = 'hidden';
        secondDiv.style.border = 'transparent solid 1px';
        secondDiv.style.backgroundColor = '#f3f5f7';
    };

    thirdLi.onmouseout = function(){
        this.style.overflow = 'hidden';
        thirdDiv.style.border = 'transparent solid 1px';
        thirdDiv.style.backgroundColor = '#f3f5f7';
    };

    fourthLi.onmouseout = function(){
        this.style.overflow = 'hidden';
        fourthDiv.style.border = 'transparent solid 1px';
        fourthDiv.style.backgroundColor = '#f3f5f7';
    };

    // 购物车的隐藏与显示
    topCar.onmouseover = function(){
        shopCar.style.overflow = 'visible';
        shopCar.style.backgroundColor = 'white';
        shopCar.style.border = '#f3f5f7 solid 2px';
        shopCar.style.boxShadow = '0 0 3px 1px #e2effc';
        shopCar.style.color = 'red';
        shopCarImg.src = 'ele/icon/25.png';
        shopCarArrow.src = 'ele/icon/24.png';
    }
    
    topCar.onmouseout = function(){
        shopCar.style.overflow = '';
        shopCar.style.backgroundColor = '';
        shopCar.style.border = '';
        shopCar.style.boxShadow = '';
        shopCar.style.color = '';
        shopCarImg.src = 'ele/icon/26.png';
        shopCarArrow.src = 'ele/icon/23.png';
        
    }

    // 给每个左侧列表分配id
    for(var i=0;i<goodsLists.length;i++){
        goodsLists[i].id = i;

        // 移入展开
        goodsLists[i].onmouseover = function(){
            bg.style.display = 'block';
            this.getElementsByTagName('img')[0].src = 'ele/icon/24.png';
            innerNav[0].style.display = 'none';
            innerNav[1].style.display = 'none';
            
            if((this.id % 2) == 1){
                innerNav[0].style.display = 'block';  
            }else{
                innerNav[1].style.display = 'block';
            }
            
            
        }

        // 移出隐藏
        goodsLists[i].onmouseout = function(){
            this.getElementsByTagName('img')[0].src = 'ele/icon/23.png';
            bg.style.display = 'none';
            
        }

        // 折叠区的隐藏显示效果
        bg.onmousemove = function(){
            bg.style.display = 'block';
        }
        bg.onmouseout = function(){
            bg.style.display = 'none';
        }
    }

    // 轮播图

    // 改变方法
    function changeImg(){
        for(var x=0;x<slides.length-1;x++){
            slides[x].style.display = 'none';
        }

        for(var y=0;y<spans.length;y++){
            spans[y].className = '';
        }

        spans[index].className = 'dots-active';
        slides[index].style.display = 'block';

    }

    // 轮播图主函数
    function slideImg(){
        lunbo.onmouseover = function(){
            if(timer){
                clearInterval(timer);
            }
        }
    
        lunbo.onmouseout = function(){
            timer = setInterval(function(){
                index++;
                if(index == slides.length-1){
                    index = 0;

                }
                changeImg();
                
            },3000);
            
        }

        lunbo.onmouseout();
    }

    // 小圆点
    for(var a=0;a<spans.length;a++){
        spans[a].setAttribute('spansId',a);
        spans[a].onclick = function(){
            index = this.getAttribute('spansId');
            changeImg();
        }
       
    }

    prev.onclick = function(){
        index++;
        if(index == slides.length-1){
            index = 0;

        }
        changeImg();
    }

    next.onclick = function(){
        index--;
        if(index == -1){
            index = slides.length-2;

        }
        changeImg();
    }


    rightNavlis[4].onclick = function(){
        
       location.href = "#topPage";
    }
    
    slideImg();


    // floor

    // 所有都设置为隐藏
    function hideAllOne(){
        imgOne.style.display = 'none';
        imgTwo.style.display = 'none';
        imgThree.style.display = 'none';

        floorGoodsOne.style.display = 'none';
        floorGoodsTwo.style.display = 'none';
        floorGoodsThree.style.display = 'none';
    }
    spansOne.onclick = function(){

        hideAllOne();
        imgOne.style.display = 'block';
        floorGoodsOne.style.display = 'block';
    }

    spansTwo.onclick = function(){
        hideAllOne();
        imgTwo.style.display = 'block';
        floorGoodsTwo.style.display = 'block';
    }

    spansThree.onclick = function(){
        hideAllOne();
        imgThree.style.display = 'block';
        floorGoodsThree.style.display = 'block';
    }
    
    function hideAllTwo(){
        imgFour.style.display = 'none';
        imgFive.style.display = 'none';
        imgSix.style.display = 'none';

        floorGoodsFour.style.display = 'none';
        floorGoodsFive.style.display = 'none';
        floorGoodsSix.style.display = 'none';
    }
    spansFour.onclick = function(){

        hideAllTwo();
        imgFour.style.display = 'block';
        floorGoodsFour.style.display = 'block';
    }

    spansFive.onclick = function(){
        hideAllTwo();
        imgFive.style.display = 'block';
        floorGoodsFive.style.display = 'block';
    }

    spansSix.onclick = function(){
        hideAllTwo();
        imgSix.style.display = 'block';
        floorGoodsSix.style.display = 'block';
    }


    // 固定右侧导航栏动画效果

    liOne.onmouseover = function(){
        pOne.innerHTML = "用户";
    }
    
    liOne.onmouseout = function(){
        pOne.innerHTML = "";
    }

    
    liTwo.onmouseover = function(){
        pTwo.innerHTML = "购物车";
    }
    
    liTwo.onmouseout = function(){
        pTwo.innerHTML = "";
    }

    liThree.onmouseover = function(){
        pThree.innerHTML = "关注";
    }
    
    liThree.onmouseout = function(){
        pThree.innerHTML = "";
    }

    liFour.onmouseover = function(){
        pFour.innerHTML = "客服";
    }

    
    liFour.onmouseout = function(){
        pFour.innerHTML = "";
    }
    
    liFive.onmouseover = function(){
        pFive.innerHTML = "顶部";
    }

    liFive.onmouseout = function(){
        pFive.innerHTML = "";
    }


}

mainFunction();

