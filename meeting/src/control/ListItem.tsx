import { useRef } from "react";

import styles from "../css/control/list/list_item.module.css"
import { enContentView } from "../enum/ContentViewEnum";
import { SelectedItemState } from "../type/BaseType";

interface ListItemProp{
    active_icon:string;
    deactive_icon:string;
    text:string;
    content_type:enContentView;
    selected:boolean;
    callback:(state:SelectedItemState)=>void;
}

export function ListItem({active_icon, deactive_icon, text, content_type, selected, callback}:ListItemProp){
    const _selected = useRef<boolean>(false);
    _selected.current = selected;
    
    const onclick = ()=>{
        _selected.current = true;
        callback({Key:content_type, Value:_selected.current});
    }

    return(
        <div className={ _selected.current === false ? styles.listItemContainer : styles.listItemContainerActive } onClick={onclick}>     
            <img src={ _selected.current === false ? deactive_icon : active_icon} className={styles.listItemIcon } alt={text}/>
            <div className={ _selected.current === false ? styles.listItemTitle : styles.listItemTitleActive }>{text}</div>
        </div>
    );
}
/*
LeftItem.propTypes = {
    active_icon:PropTypes.string.isRequired,
    deactive_icon:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    content_type:PropTypes.number.isRequired
}*/