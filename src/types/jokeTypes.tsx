import React from 'react';

export interface jokeListProps {
    category: string,
    id?: number,
    type: string,
    setup?: string,
    delivery?: string,
    joke?: string,
};

export interface jokeInfoProps {
    totalCount?: number,
    categories: Array<string> | undefined,
};

export interface inputSelectProps {
    category: string,
    categories: Array<string> | undefined,
    selectAction: (category: string) => void,
    search: string,
};

export interface inputSearchProps {
    searchAction: (stringSearch: string) => void;
};

export interface displayJokesProps {
    category: string,
    updateJokeCategory: (jokeCategory: string) => void,
    updateJokeList: (jokeList: []) => void
}

export interface jokeState {
    category: string
}