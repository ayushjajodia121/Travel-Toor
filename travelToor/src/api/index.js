import axios from 'axios';

const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
const URL1 = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw,ne) => {
    try{
        const { data: { dataR }} = await axios.get(URL,{
            params: {
                bl_latitude: sw?.lat,
                bl_longitude: sw?.lng,
                tr_longitude: ne?.lng,
                tr_latitude: ne?.lat,
                restaurant_tagcategory_standalone: '10591',
                restaurant_tagcategory: '10591',
                limit: '30',
                currency: 'USD',
                open_now: 'false',
                lunit: 'km',
                lang: 'en_US'
            },
            headers: {
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                'X-RapidAPI-Key': '793e1bbf03msh0fbf97112d4444ap12279djsn02f9d829b0c1'
              }
          });
        return dataR;

    }catch(error){
        console.log(error);

    }
}