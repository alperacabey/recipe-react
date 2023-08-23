import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface ContainerProps {
    title: string;
    children: React.ReactNode;
    showBackButton?: boolean;
}

const Container: FC<ContainerProps> = ({ title, children, showBackButton }) => {

    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="container__wrapper">
                {showBackButton && <span className="container__back" onClick={() => navigate(-1)}>&larr;</span>}
                <div className="container__title">{title}</div>
                <div className="container__content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Container;
