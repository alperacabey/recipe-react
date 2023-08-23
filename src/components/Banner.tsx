import { FC } from 'react';

interface BannerProps {
    title: string;
    url: string;
}

const Banner: FC<BannerProps> = ({ title, url }) => {
    return (
        <div className='banner'>
            <h1 className="banner__title">{title}</h1>
            <img
                className="banner__photo"
                src={url}
                alt={title}
            />
        </div>
    );
};

export default Banner;
