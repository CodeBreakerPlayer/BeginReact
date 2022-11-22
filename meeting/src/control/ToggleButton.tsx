import toggleStyle from "../css/control/toggle_button.module.css"

export function ToggleButton({id, text, style}:{id:string, text:string, style:React.CSSProperties}){
    return(
        <div className={toggleStyle.toggleRoot} style={style}>
            <div className={toggleStyle.toggleText}>{text}</div>
            <input type="checkbox" id={id} hidden/>
            <label className={toggleStyle.toggleSwitch} htmlFor={id}>
                <span className={toggleStyle.toggleButton}></span>                
            </label>
        </div>
    );
}