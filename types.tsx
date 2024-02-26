import { ListItemProps } from "@chakra-ui/react";

export type JsonData = {
    id: number;
    img: string;
    creator: string;
    ingredients: ListItemProps;
    title: string;
    description: string;
    ratings: number;
    views: number;
    likes: number;
    comments: string;
}