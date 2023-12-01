export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        let middlePoint = Math.floor(lo + (hi - lo) / 2);
        let currentValue = haystack[middlePoint];

        if (currentValue === needle) {
            return true;
        } else if (currentValue > needle) {
            hi = middlePoint;
        } else {
            lo = middlePoint + 1;
        }
    } while (lo < hi);

    return false;
}
