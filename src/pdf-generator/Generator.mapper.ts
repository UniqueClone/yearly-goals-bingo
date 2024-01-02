export const validateGoals = (goals: string[]) => {
    if (!goals || !goals.length || goals.length != 16) {
        throw new Error('Invalid goals, received goals: ' + goals);
    }
    return goals;
}