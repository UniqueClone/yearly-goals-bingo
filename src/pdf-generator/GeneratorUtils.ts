export const validateGoals = (goals: string[]) => {
    if (!goals || !goals.length || goals.length != 16) {
        throw new Error('Invalid goals, received goals: ' + goals);
    }
    return goals;
}

export const getDefaultGoals = (): string[] => {
    return [
        "Goal 1 Test Longer than 1 line",
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