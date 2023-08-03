export const group = (data, key) => {
    return data.reduce(function (r, a) {
        r[a.type] = r[a.type] || [];
        r[a.type].push(a);
        return r;
    }, Object.create(null));
}