
//

let arr = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true,
        libraryID: 1254
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true,
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false,
        libraryID: 3245
    },
    {
        title: 'Javascript',
        author: 'Suzanne Collins',
        readingStatus: false,
        libraryID: 3290
    },
    {
        title: 'Java',
        author: 'Suzanne Collins',
        readingStatus: false,
        libraryID: 2019
    }];

for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if(arr[i].libraryID > arr[j].libraryID){
            let term = arr[i];
            arr[i] = arr[j];
            arr[j] = term;
        }
    }
}

console.log(arr);


// Bai 4

function invert_key_value(obj) {
    var result = {};
    var keys = _keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
        result[obj[keys[i]]] = keys[i];
    }
    return result;
}
function _keys(obj)
{
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
}
function isObject(obj)
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}
console.log(invert_key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
