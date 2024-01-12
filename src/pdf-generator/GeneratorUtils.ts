/**
 * Validates the goals to be used in the PDF.
 * Checkes if the goals are not null, empty or have a length different than 16.
 * @param goals The goals to be validated.
 * @returns The validated goals.
 */
export const validateGoals = (goals: string[]) => {
    if (!goals || !goals.length || goals.length !== 16) {
        throw new Error('Invalid goals, received goals: ' + goals);
    }
    return goals;
}

/**
 * Gets the default goals.
 * @returns The default goals.
 */
export const getDefaultGoals = (): string[] => {
    return [
        "Goal 1",
        "Goal 2",
        "Goal 3",
        "Goal 4",
        "Goal 5",
        "Goal 6",
        "Goal 7",
        "Goal 8",
        "Goal 9",
        "Goal 10",
        "Goal 11",
        "Goal 12",
        "Goal 13",
        "Goal 14",
        "Goal 15",
        "Goal 16",
    ];
}

/**
 * Formats the name to be used in the PDF header.
 * @param name The name to be formatted.
 * @returns The formatted name.
 */
export const formatName = (name: string): string => {
    name = name.trim();
    if (!name) {
        return '';
    } else if (name.length > 22) {
        return name.substring(0, 22) + "...'s";
    } else if (name.endsWith("'s") || name.endsWith("s'")) {
        return name;
    } else if (name.endsWith("s")) {
        return name + "'";
    } else {
        return name + "'s";
    }
}

/**
 * Shuffles array in place using the Fisher-Yates shuffle algorithm.
 * @param goals An array containing the items.
 */
export const shuffleGoals = (goals: string[]): void => {
    for (let i = goals.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [goals[i], goals[j]] = [goals[j], goals[i]];
    }
}