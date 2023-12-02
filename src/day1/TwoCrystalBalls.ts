export default function two_crystal_balls(breaks: boolean[]): number {
    // Given two crystal balls that will break if dropped from high enough
    // Distance, determine the exact spot in which it will break in the
    // Most optimal way

    // Jumping linear time is too much

    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;

    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpAmount;

    for (let index = 0; index < jmpAmount && i < breaks.length; ++index, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
// export default function two_crystal_balls(breaks: boolean[]): number {
//     // Given two crystal balls that will break if dropped from high enough
//     // Distance, determine the exact spot in which it will break in the
//     // Most optimal way

//     for (let index = 0; index < breaks.length; index++) {
//         const element = breaks[index];

//         if (element === true) {
//             return index;
//         }
//     }

//     return -1;
// }
