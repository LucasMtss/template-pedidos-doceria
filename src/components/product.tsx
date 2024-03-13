import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProductDataProps {
    id: string | number;
    title: string;
    description: string;
    thumbnail: any;
    quantity?: number;
    price: number;
}

interface IProductProps {
    data: IProductDataProps;
    onClick?: () => void;
}

import thumbnail1 from '../assets/products/thumbnail/1.jpg'
import thumbnail2 from '../assets/products/thumbnail/2.jpg'
import thumbnail3 from '../assets/products/thumbnail/3.jpg'
import thumbnail4 from '../assets/products/thumbnail/4.png'
import thumbnail5 from '../assets/products/thumbnail/5.jpg'
import thumbnail6 from '../assets/products/thumbnail/6.jpg'
import thumbnail7 from '../assets/products/thumbnail/7.png'
import { formatCurrency } from "../utils/functions/format-to-currency";

const imagesMap: Record<string, any> = {
    'thumbnail1': thumbnail1,
    'thumbnail2': thumbnail2,
    'thumbnail3': thumbnail3,
    'thumbnail4': thumbnail4,
    'thumbnail5': thumbnail5,
    'thumbnail6': thumbnail6,
    'thumbnail7': thumbnail7,
};

export const Product = ({data, onClick}: IProductProps) => {
    const [thumbnail, setThumbnail] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        handleImportImage();
    }, [])

    function handleImportImage() {
        // Use a imagem estática se ela estiver disponível no mapa
        const image = imagesMap[`thumbnail${data.id}`];
        if (image) 
            setThumbnail(image);
    } 

    function handleRedirect(){
        navigate(`/product/${data.id}`)
    }

    return(
        <div className="flex w-full max-w-[100%] flex-row pb-4 items-end " onClick={ onClick ? onClick : handleRedirect}>
            <img src={thumbnail} className="w-20 h-20 rounded-md"/>
            <div className="flex-1 ml-3 h-full max-w-[100] overflow-hidden">
                <div className="flex-row items-center justify-between">
                <span className="text-slate-900 font-subtitle flex-1 ">{data.title}</span>
                {
                    data?.quantity && (
                        <span className="text--400 font-subtitle text-sm ml-2">X {data.quantity}</span>
                    )
                }
                </div>
                <div className="flex flex-col mt-1 w-full">
                    <span className="text-slate-400 text-xs leading-5 mt-0.5 text-ellipsis overflow-hidden text-nowrap w-full">{data.description}</span>
                    <span className="text-red-400 text-xl leading-5 mt-0.5">{formatCurrency(data.price)}</span>
                </div>
            </div>
        </div>
    )
}