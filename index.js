/**
 * Created by Administrator on 2017/1/5.
 */
var imgUrl = 'img/rabbit-big.png';
var positions = ['0 -854','-174 -852','-349 -852','-524 -852','-698 -852','-698 -852','-873 '+
'-848'];
var ele = document.getElementById('rabbit');
animation(ele,positions,imgUrl);

function animation(ele,positions,imgUrl) {
    var index = 0;
    ele.style.backgroundImage = 'url(' + imgUrl + ')';
    ele.style.backgroundRepeat = 'no-repeat';
    function run() {
        var position = positions[index].split(' ');
        ele.style.backgroundPosition = position[0] + 'px ' + position[1] + 'px';
        index ++;
        if (index>= positions.length){
            index = 0;
        }
        setTimeout(run,80);
    }
    run();
}
//aa;