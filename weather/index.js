

//1.获取当前城市的天气信息

    let tianqi;
    $.ajax({
        type:"get",
        url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
        dataType:"jsonp",
        success:function(obj){
            tianqi=obj.data;
            console.log(tianqi);
            updata(tianqi);

        }
    })
    function updata(tianqi){
    //获取当前城市
    $(".h_citys span").html(tianqi.city);
    //获取当前城市的天气状况
    $(".h_air_block_b").html(tianqi.weather.quality_level);
    //获取当前的天气状况
     $(".h_weather span:nth-of-type(2)").html(tianqi.weather.current_condition);
    //获取当前的温度
    $(".h_weather span:first-of-type").html(tianqi.weather.current_temperature+"°");
    //获取当前的风向
    $(".h_weather span:nth-of-type(3)").html(tianqi.weather.wind_direction);
    //获取当前的风力
    $(".h_weather span:last-of-type").html(tianqi.weather.wind_level+"级");

        //今天的天气
        let nowstr = ` <div class="s_top_l_top">
              <span class="s_top_l_top_l">今天</span>
              <span class="s_top_l_top_l left">
                  <span>${tianqi.weather.dat_high_temperature}</span><span> /</span>
                  <span>${tianqi.weather.dat_low_temperature+"℃"}</span></span>
          </div>
           <div class="s_top_l_bottom">
               <span class="s_top_l_top_l b_t">${tianqi.weather.current_condition}</span>
               <span class="s_top_l_top_l b_b">
               <img src="./img/${tianqi.weather.dat_weather_icon_id}.png" alt="">
               </span>
           </div>
      `;
        $(".s_top_l").append(nowstr);
        //明天的天气
        let tommorstr = `
           <div class="s_top_l_top">
               <span class="s_top_l_top_l">明天</span>
               <span class="s_top_l_top_l right">
                  <span>${tianqi.weather.tomorrow_high_temperature
            }</span><span>/</span><span>${tianqi.weather.tomorrow_low_temperature+"℃"}
            </span></span>
           </div>
           <div class="s_top_l_bottom">
               <span class="s_top_l_top_l">${tianqi.weather.tomorrow_condition}</span>
               <span class="s_top_l_top_l ">
               <img src="./img/${tianqi.weather.tomorrow_weather_icon_id}.png" alt="" class="one">
               </span>
           </div>
      `;
        $(".s_top_r").append(tommorstr);

        //今天
    //$(".s_top_l_top_l.right span:first-of-type").html(tianqi.weather.dat_high_temperature);
    //$(".s_top_l_top_l.right span:last-of-type").html(tianqi.weather.dat_low_temperature+"℃");
    //$(".s_top_l_bottom .s_top_l_top_l.b_t").html(tianqi.weather.current_condition);

        //明天
    //    $(".s_top_l_top_l.left span:first-of-type").html(tianqi.weather.dat_high_temperature);
    //    $(".s_top_l_top_l.left span:last-of-type").html(tianqi.weather.dat_low_temperature+"℃");
    //    $(".s_top_l_bottom .s_top_l_top_l.b_t").html(tianqi.weather.current_condition);

    //未来二十四小时天气
        let hweather=tianqi.weather.hourly_forecast;
        hweather.forEach(function(v){
         let hourstr=`<li>
                 <span>${v.hour}</span>
                 <img src="./img/${v.weather_icon_id}.png" alt="">
                 <span>${v.temperature}</span>
             </li>`;
        $("div.s_time ul.hour").append(hourstr);

        })

        //未来十五天白天天气
        let weekweather=tianqi.weather.forecast_list;
        weekweather.forEach(function(val1,index){
            let weekstr=`<li>
                <span>
                    <div>${val1.date.slice(5,10)}</div>
                </span>
                <span>${val1.condition}</span>
                <img src="./img/${val1.weather_icon_id}.png" alt="">
            </li>`;
            $("div.s_weather ul.date").append(weekstr);
        })
        //未来十五天晚间天气
        let weekweather1=tianqi.weather.forecast_list;
        weekweather1.forEach(function(val2,index){
            let weekstr1=`<li>
                <img src="./img/${val2.weather_icon_id}.png" alt="">
                <span>${val2.condition}</span>
                <span>
                    ${val2.wind_direction}
                </span>
            </li>`;
            $("div.s_weather ul.three").append(weekstr1);
        })

    }



    //点击城市，进入城市页面
        $(".h_citys span").click(function(){
        $(".tianqi .city").css({"display":"block"});
        $(".tianqi .city span").css({"display":"block"});
        $("section.h_tianqi").css({"display":"none"});
        $(".h_bg").css({"display":"none"});
        $(".s_top_l_top").css({"display":"none"});
        $(".s_top_l_bottom").css({"display":"none"});
    })


    //点击取消
    $("button").click(function(){
        $(".tianqi .city").css({"display":"none"});
        $("section.h_tianqi").css({"display":"block"});
        $(".h_bg").css({"display":"block"});
        $(".s_top_l_top").css({"display":"none"});
        $(".s_top_l_bottom").css({"display":"none"});
        let nowstr = ` <div class="s_top_l_top">
          <span class="s_top_l_top_l">今天</span>
          <span class="s_top_l_top_l left">
              <span>${tianqi.weather.dat_high_temperature}</span><span> /</span>
              <span>${tianqi.weather.dat_low_temperature+"℃"}</span></span>
      </div>
       <div class="s_top_l_bottom">
           <span class="s_top_l_top_l b_t">${tianqi.weather.current_condition}</span>
           <span class="s_top_l_top_l b_b">
           <img src="./img/${tianqi.weather.dat_weather_icon_id}.png" alt="">
           </span>
       </div>
  `;
        $(".s_top_l").append(nowstr);
        //明天的天气
        let tommorstr = `
       <div class="s_top_l_top">
           <span class="s_top_l_top_l">明天</span>
           <span class="s_top_l_top_l right">
              <span>${tianqi.weather.tomorrow_high_temperature
            }</span><span>/</span><span>${tianqi.weather.tomorrow_low_temperature+"℃"}
        </span></span>
       </div>
       <div class="s_top_l_bottom">
           <span class="s_top_l_top_l">${tianqi.weather.tomorrow_condition}</span>
           <span class="s_top_l_top_l ">
           <img src="./img/${tianqi.weather.tomorrow_weather_icon_id}.png" alt="" class="one">
           </span>
       </div>
  `;
        $(".s_top_r").append(tommorstr);
    })

    //获取城市信息
    let city;
    $.ajax({
        type:"get",
        url:"https://www.toutiao.com/stream/widget/local_weather/city/",
        dataType:"jsonp",
        success:function(obj){
            city=obj.data;
            //console.log(city);
            updataCity(city);
        }
    })

    //获取每个城市信息
   // [[a,b,c],1,2,3]]二维数组
    function updataCity(city){
        //是个对象，用for in
        //i是遍历出省份
    for(let i in city){
        //console.log(i);
        //console.log(city[i]);
        let shengfen=`<div class="hot">${i}</div>
        `;
        $(".hotcity").append(shengfen);
        //j是遍历出省份里的城市
        for(let j in city[i]){
            let citystr=`<li class="everycity">${j}</li>`;
            $(".hotcity").append(citystr);
        }

    }
}

    //点击每一个城市，获取当前城市的天气信息
    window.onload=function() {
        $("li.everycity").click(function () {
            let con = $(this).html();
            //console.log(con);
            $(".tianqi .city").css({"display":"none"});
            $("section.h_tianqi").css({"display":"block"});
            $(".h_bg").css({"display":"block"});
            ajaxs(con);
        })
        function ajaxs(tianqi1) {
            let url1 = `https://www.toutiao.com/stream/widget/local_weather/data/?city=${tianqi1}`;
            $.ajax({
                type: "get",
                url: url1,
                dataType: "jsonp",
                success: function (obj) {
                    let city2 = obj.data;
                    //console.log(city);
                    updata(city2);
                }
            })
        }
        //当点击搜索时，获取input中的内容进行搜索
        $("input").focus(function(){
            $("button").html("搜索");
        })
        $("button").click(function(){
            $.each(city,function(indexs,vals){
                $.each(vals,function(i){
                    if($("input").val()==i){
                        $(".tianqi .city").css({"display":"none"});
                        $("section.h_tianqi").css({"display":"block"});
                        $(".h_bg").css({"display":"block"});
                        $(".s_top_l_top").css({"display":"none"});
                        $(".s_top_l_bottom").css({"display":"none"});
                        let text=$("input").val();
                        ajaxs(text);
                    }
                })
            })
            //alert("请输入正确的城市名称！");
        })

    }


