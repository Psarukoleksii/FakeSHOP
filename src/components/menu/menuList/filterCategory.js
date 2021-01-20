let result = [];

export function filterCategory(arr) {
    let arr0 = arr.map(value => value.category)
    for (let str of arr0) {
        if (!result.includes(str)) {
            result.push(str)
        }
    }
    return result;
}
