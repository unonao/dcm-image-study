export function reset_list(oldlist, name) {
    var new_list = []
    for (let i = 0; i <= oldlist.length - 1; i++) {
        new_list.push(name)
    }
    return new_list
};
