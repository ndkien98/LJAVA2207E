/**
 * Created by Glee on 03-Nov-2020.
 * Description: common ajax operations
 */

let ajax = (function (){

    const URL_ENDPOINT_GET  = '/ajax/get_json.php';
    const URL_ENDPOINT_POST = '/ajax/post.php';


    function post(payload) {
        // $.post("/ajax/post.php", { action : 'coupon', action_type: 'get-active-list', limit : 100 })
        return $.post(URL_ENDPOINT_POST, payload);
    }

    function get(payload) {
        // $.get("/ajax/get_json.php", { action : 'coupon', action_type: 'get-active-list', limit : 100 })
        return $.get(URL_ENDPOINT_GET, payload);
    }

    return {
        post,
        get
    }
})();

// common
function _likeOrSaveItem(action_type, item_type, item_id, item_title) {
    if (item_title === undefined) item_title = '';
    let payload = { action : 'user', action_type: action_type, item_type :item_type, item_id: item_id, item_title: item_title };
    return ajax.post(payload);
}

let UserAction = {
    likeProduct: function (proId, proName) {
        _likeOrSaveItem('like', 'product', proId, proName).then(function (res){
            if(res.status === 'error') {
                alert('Lỗi: Bạn chưa đăng nhập hoặc đã thích rồi');
            }else{
                alert('Thành công: Cảm ơn bạn');
            }
        });
    },
    unlikeProduct: function (proId) {
        return _likeOrSaveItem('remove-like', 'product', proId);
    },
    saveProduct: function (proId, proName) {
        _likeOrSaveItem('save', 'product', proId, proName).then(function (res){
            if(res.status === 'error') {
                alert('Bạn chưa đăng nhập hoặc đã lưu rồi');
            }else{
                alert('Lưu thành công');
            }
        });
    },
    unsaveProduct: function (proId) {
        return _likeOrSaveItem('remove-save', 'product', proId);
    },
}