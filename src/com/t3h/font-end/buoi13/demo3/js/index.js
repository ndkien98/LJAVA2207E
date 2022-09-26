$(document).ready(function (){

    $.get("https://salty-anchorage-90590.herokuapp.com/product?pageIndex=0&pageSize=20",function (response){

        let dataAll = response.data.content;
        for (let i = 0; i < dataAll.length; i++) {
            $('#listProduct').append('                <div class="col-lg-3 col-md-4 col-sm-6 mix pc fresh-meat">\n' +
                '                    <div class="featured__item">\n' +
                '                        <div class="featured__item__pic set-bg" >\n' +
                '                            <img src="' + dataAll[i].avatar + '">\n' +
                '                            <ul class="featured__item__pic__hover">\n' +
                '                                <li><a href="#"><i class="fa fa-heart"></i></a></li>\n' +
                '                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>\n' +
                '                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>\n' +
                '                            </ul>\n' +
                '                        </div>\n' +
                '                        <div class="featured__item__text">\n' +
                '                            <h6><a href="#">' + dataAll[i].name + '</a></h6>\n' +
                '                            <h5>$30.00</h5>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>');
        }

    })

})
