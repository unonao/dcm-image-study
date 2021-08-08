export function mklist(name, num) {
    var new_list = []
    for (let i = 0; i <= num - 1; i++) {
        new_list.push(name)
    }
    return new_list
};
