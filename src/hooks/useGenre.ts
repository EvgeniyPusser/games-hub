import { Genre } from "../model/fetch-genre-types";
import useData from "./useData";

export default function useGenre(): {data: Genre[], error: string, isLoading: boolean, Avatar: string} {
    const { data, error, isLoading } = useData<Genre>("/genres");
    return { data, error, isLoading, Avatar: "" };
}