import imageButtonStyle from "../css/control/button/image_button.module.css"

export function ImageButton({text, onClick}:{text:string, onClick:()=>void}){
    return(
        <button className={`${imageButtonStyle.icon_btn} ${imageButtonStyle.add_btn}`} onClick={onClick}>
            <div className={imageButtonStyle.add_icon}></div>
            <div className={imageButtonStyle.btn_txt}>{text}</div>
        </button>
    );
}