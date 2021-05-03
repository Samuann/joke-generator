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
}