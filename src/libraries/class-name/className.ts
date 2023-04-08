type ConditionClass = [any, string];

/**
 * Jsoin list of class strings.
 *
 * @param classes List of classes.
 *
 * @returns Valid className value
 */
export const cn = (...classes: Array<string|ConditionClass>): string => {
    const classList: string[] = [];

    classes.forEach((item) => {
        if (typeof item === 'string') {
            classList.push(item);
        }
        else if (item[0]) {
            classList.push(item[1]);
        }
    });

    return classList.join(' ');
};
