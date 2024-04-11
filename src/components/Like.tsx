import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";

interface Props {
    onClick: () => void;
}
const Like = ({ onClick }: Props) => {
    const [isLiked, setIsLiked] = useState(false);

    const toggle = () =>{
        setIsLiked(!isLiked);
        onClick();
    }

    if (isLiked) return <FaHeart color='red' size={20} onClick={toggle} />
    return <CiHeart size={20} onClick={toggle} />
}

export default Like 