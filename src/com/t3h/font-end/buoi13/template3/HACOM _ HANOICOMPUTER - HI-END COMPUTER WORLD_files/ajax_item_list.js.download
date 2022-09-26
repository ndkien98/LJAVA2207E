/**
 * Created by Glee on 03-Nov-2020.
 * Description: common ajax operation to get item list and display
 */

"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AjaxLoadItemList = function AjaxLoadItemList(_opts) {
    var _this = this;

    _defineProperty(this, "TEXT", {
        'next_page': 'Xem thêm',
        'no_more_result': '' , //'Đã hết dữ liệu'
    });

    _defineProperty(this, "changeConfig", function (opts) {
        for (var key in opts) {
            if (opts.hasOwnProperty(key)) {
                _this[key] = opts[key];
            }
        }
    });

    _defineProperty(this, "buildAjaxUrl", function (page) {
        if (page === 1) return _this.ajax_url;
        return _this.ajax_url + '&page=' + page;
    });

    _defineProperty(this, "getUrlContent", function (url) {
        return $.get(url);
    });

    _defineProperty(this, "buildItemList", function (item_list) {
        if (typeof _this.buildItemListHtml !== 'function') {
            console.error("buildItemListHtml(item_list) must be a defined function and return string ");
            return;
        }

        var new_html_list = _this.buildItemListHtml(item_list, _this.current_loaded_item);

        if (_this.paging_type === 'next') {
            // appending result
            _this.display_item_list_node.append(new_html_list);
        } else {
            // replace current result if exist
            _this.display_item_list_node.html(new_html_list);
        } // track loaded


        _this.current_loaded_item += item_list.length;
    });

    _defineProperty(this, "processServerResponse", function (server_response) {
        if (typeof _this.processAjaxResult !== 'function') {
            console.error("processAjaxResult must be a defined function and return {total: int, list: []} ");
            return;
        }

        var ajax_result = _this.processAjaxResult(server_response);

        if (_this.current_page_id === 1) {
            _this.total_page = Math.ceil(ajax_result.total / _this.ITEM_PER_PAGE);
        }

        _this.buildItemList(ajax_result.list);

        _this.buildPaging();
    });

    _defineProperty(this, "showNextPage", function () {
        _this.showPage(_this.current_page_id + 1);
    });

    _defineProperty(this, "showPage", function (page_number) {
        _this.current_page_id = page_number;
        console.log("Loading page = " + page_number);

        var ajax_url = _this.buildAjaxUrl(page_number);

        _this.showLoadingStatus();

        _this.getUrlContent(ajax_url).then(function (server_response) {
            _this.processServerResponse(server_response);
        });
    });

    _defineProperty(this, "showLoadingStatus", function () {
        _this.display_paging_node.html('Loading ...');
    });

    _defineProperty(this, "buildPaging", function () {
        var html; // no paging

        if (_this.paging_type === '') {
            _this.display_paging_node.html('');

            return;
        } // next-page


        if (_this.paging_type === 'next') {
            // remove listener
            _this.display_paging_node.off('click');

            html = "<a href=\"javascript:;\" title=\"Xem trang ti\u1EBFp theo\">" + _this.TEXT.next_page + "</a>";
            var has_more_page = true;

            if (_this.current_page_id >= _this.total_page) {
                html = _this.TEXT.no_more_result;
                has_more_page = false;
            }

            _this.display_paging_node.html(html);

            if (has_more_page) {
                // add listener
                _this.display_paging_node.on('click', function () {
                    return _this.showNextPage();
                });
            }

            return;
        } // default


        if (_this.paging_type === 'number') {
            // todo:
            html = "<a href=\"javascript:;\" title=\"\" data-number=\"1\">1</a> | <a href=\"javascript:;\" title=\"\" data-number=\"2\">2</a> | <a href=\"javascript:;\" title=\"\" data-number=\"3\">3</a>";
            if (_this.current_page_id === _this.total_page) html = _this.TEXT.no_more_result; // remove listener

            _this.display_paging_node.off('click');

            _this.display_paging_node.html(html); // add listener


            _this.display_paging_node.on('click', function (e) {
                //console.log(e.target.nodeName);
                var page_number = $(e.target).data('number');
                if (page_number) _this.showPage(page_number);
            });

            return;
        }
    });

    // setting up
    this.ajax_url = _opts.ajax_url; // string

    this.display_item_list_node = _opts.display_item_list_node; // jQuery node

    this.display_paging_node = _opts.display_paging_node; // jQuery node - show paging and loading status

    this.ITEM_PER_PAGE = _opts.ITEM_PER_PAGE; // number

    this.processAjaxResult = _opts.processAjaxResult; // function, return {list: [], total: number}, args: ajax_response

    this.buildItemListHtml = _opts.buildItemListHtml; // function, return string, args: item_list [], current_loaded_item: number

    this.paging_type = _opts.paging_type; // '' or 'next' or 'number'
    // some list may have page 1 already loaded (only need ajax for page 2->n, in that case set current_page_id = 1 )
    // if current_page_id > 0, current_loaded_item must be > 0 as well

    this.current_page_id = _opts.hasOwnProperty('current_page_id') ? _opts.current_page_id : 0;
    this.current_loaded_item = _opts.hasOwnProperty('current_loaded_item') ? _opts.current_loaded_item : 0;

    if (this.current_page_id > 0 && this.current_loaded_item === 0) {
        console.error("opts.current_loaded_item must be > 0 when opts.current_page_id > 0");
    }

    this.total_page = 0;
};

/*
// examples:
let objAjaxLoadItemList = new AjaxLoadItemList({
    ajax_url: '/ajax/get_json.php?action=product&sort=order&category=1&show=20', // string
    display_item_list_node: $('.js-show-item-list'), //jQuery node
    display_paging_node: $('.js-show-paging'), //jQuery node
    paging_type: 'next', // possible values: '' , 'next'
    //current_page_id: 0, // set = 1 if we only want to fetch from page=2
    //current_loaded_item: 0, // set = ITEM_PER_PAGE * current_page_id if current_page_id > 0
    ITEM_PER_PAGE: 20,
    processAjaxResult : function (server_response) {
        let data = JSON.parse(server_response);
        // expect result: {total: int, list: []}
        return {
            list: data.list,
            total : data.total,
        }
    },
    buildItemListHtml: function (item_list, current_loaded_item) {
        let html_list = [];
        let item_index = current_loaded_item;
        item_list.map(function (item){
            item_index += 1;
            html_list.push(`<div>${item_index}. ${item.productName} - Price: ${item.price}</div>`);
        });

        return html_list.join('');
    }
});

objAjaxLoadItemList.changeConfig({
    ajax_url: '/ajax/get_json.php?action=product&show=20', // string
})

// start next page
objAjaxLoadItemList.showNextPage();
// objAjaxLoadItemList.showPage(3);*/
