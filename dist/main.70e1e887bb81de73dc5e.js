(()=>{"use strict";ymaps.ready((function(){myMap=new ymaps.Map("map",{center:[55.7558,37.6173],zoom:11},{balloonMaxWidth:200,searchControlProvider:"yandex#search"}),myMap.events.add("click",(function(o){if(myMap.balloon.isOpen())myMap.balloon.close();else{var e=o.get("coords");myMap.balloon.open(e,{contentHeader:"Событие!",contentBody:"<p>Кто-то щелкнул по карте.</p><p>Координаты щелчка: "+[e[0].toPrecision(6),e[1].toPrecision(6)].join(", ")+"</p>",contentFooter:"<sup>Щелкните еще раз</sup>"})}})),myMap.events.add("balloonopen",(function(o){myMap.hint.close()}))}));document.querySelector(".text")})();