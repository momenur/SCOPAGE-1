// Use TanStack Query || React Query for data fetch
import { useQuery } from 'react-query'
const useCards = () => {
    const { isLoading, data: cards = [], refetch} = useQuery({
        queryKey: ['cards'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/cards')
            return res.json();
        },
    }) 
    return [cards, isLoading, refetch]
};

export default useCards;