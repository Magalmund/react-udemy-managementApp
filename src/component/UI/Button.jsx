import React from 'react';

const Button = ({ color, children, customClasses, ...props}) => {

    let style = '';

        switch (color) {
            case "stone":
                style = "bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 ";
                break;
            case "white":
                style = "text-stone-800 hover:text-stone-950 px-4 py-2 text-xs md:text-base rounded-md transition duration-300";
                break;
            case "dark-stone":
                style = "bg-stone-800 text-stone-50 hover:bg-stone-950 px-4 py-2 text-xs md:text-base rounded-md transition duration-300";
                break;
                case "transparent":
                    style = "text-stone-400 hover:text-stone-200 hover:bg-stone-800 w-full text-left my-1 ";
            default:
                break;
        }

    return (
        <button
            {...props}
            className={`${style} ${customClasses} px-4 py-2 text-xs md:text-base rounded-md transition duration-300`}
        >
            {children}
        </button>
    );
};

export default Button;
