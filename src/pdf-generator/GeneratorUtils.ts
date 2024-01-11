export const validateGoals = (goals: string[]) => {
    if (!goals || !goals.length || goals.length !== 16) {
        throw new Error('Invalid goals, received goals: ' + goals);
    }
    return goals;
}

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

export const formatName = (name: string): string => {
    name = name.trim();
    if (!name) {
        return '';
    } else if (name.length > 22) {
        return name.substring(0, 22) + '...\'s';
    } else if (name.endsWith("\'s") || name.endsWith("s\'")) {
        return name;
    } else if (name.endsWith("s")) {
        return name + '\'';
    } else {
        return name + '\'s';
    }
}