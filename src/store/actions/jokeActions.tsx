export type SetCategoryAction = {type: 'SET_CATEGORY', payload: string};

export const setCategory = (category: string): SetCategoryAction => ({
    type: 'SET_CATEGORY',
    payload: category
});