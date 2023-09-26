export const group = <T, U extends string>(data: Array<T>, key: keyof T): Record<U, Array<T>> => {
    return data.reduce(function (r, a) {
        r[a[key]] = r[a[key]] || [];
        r[a[key]].push(a);
        return r;
    }, Object.create(null));
}