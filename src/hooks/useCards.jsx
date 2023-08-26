// Use TanStack Query || React Query for data fetch
import { useQuery } from 'react-query'
const useCards = () => {
    const { isLoading, data: cards = [], refetch} = useQuery({
        queryKey: ['cards'],
        queryFn: async () => {
            const res = await fetch('https://scopage-server-momenurislam6-gmailcom.vercel.app/cards')
            return res.json();
        },
    }) 
    return [cards, isLoading, refetch]
};

export default useCards;