type ConditionClass = [any, string];

/**
 * Jsoin list of class strings.
 *
 * @param classes List of classes. Its items can be a string (class name) or an array of two
 *   elements (where the first element is condition and the second element is class name that
 *   will be added if the condition is true).
 *
 * @returns Valid className value
 */
export const cn = (...classes: Array<string|ConditionClass>): string => {
    const classList: string[] = [];

    classes.forEach((item) => {
        if (typeof item === 'object') {
            const condition = item[0];
            const className = item[1];

            if (condition) {
                classList.push(className);
            }
        }
        else {
            classList.push(item);
        }
    });

    return classList.join(' ');
};
