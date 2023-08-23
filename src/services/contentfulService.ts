import { ContentfulResponse, FilesMap, Item, Entry, ContentType } from '@/types';
import axios, { AxiosResponse } from 'axios';

interface GetRecipeListResponse extends AxiosResponse {
    data: ContentfulResponse;
}

interface GetRecipeResponse extends AxiosResponse {
    data: Item;
}

interface GetContentResponse extends AxiosResponse {
    data: Entry;
}

const SPACE_ID = import.meta.env.VITE_SPACE_ID;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
const API_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master`;

export const getRecipeList = async () => {
    try {
        let response: GetRecipeListResponse = await axios.get(API_URL + '/entries', {
            params: {
                content_type: 'recipe',
                access_token: ACCESS_TOKEN,
            },
        });

        response = mapRecipes(response);
        return response.data.items;
    } catch (error) {
        console.log(error);
    }
};

export const getRecipe = async (recipeId: string) => {
    try {
        const response: GetRecipeResponse = await axios.get(API_URL + `/entries/${recipeId}`, {
            params: {
                content_type: 'recipe',
                access_token: ACCESS_TOKEN,
            },
        });
        return response.data.fields;
    } catch (error) {
        console.log(error);
    }
};

export const getContent = async (id: string, contentType : ContentType) => {
    try {
        const response : GetContentResponse = await axios.get(API_URL + `/entries/${id}`, {
            params: {
                content_type: contentType,
                access_token: ACCESS_TOKEN,
            },
        });

        return response.data.fields;
    } catch (error) {
        console.log(error);
    }
};

export const getAsset = async (assetId: string) => {
    try {
        const response = await axios.get(API_URL + `/assets/${assetId}`, {
            params: {
                access_token: ACCESS_TOKEN,
            },
        });

        return response.data.fields;
    } catch (error) {
        console.log(error);
    }
};


const mapRecipes = (response: GetRecipeListResponse) => {
    const filesMap: FilesMap = {};
    response.data.includes?.Asset?.forEach(asset => {
        filesMap[asset.sys.id] = asset.fields.file;
    })
    response.data.items.forEach((item) => {
        item.fields.file = filesMap[item.fields.photo.sys.id];
    });
    return response;
}