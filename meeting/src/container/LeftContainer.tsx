import scheduleImg from "../image/logo_left_title_meeting_schedule.png"
import categoryImg from "../image/logo_left_title_meeting_category.png"
import roomImg from "../image/logo_left_title_meeting_room.png"
import noteImg from "../image/logo_left_title_meeting_note.png"
import active_scheduleImg from "../image/logo_left_title_meeting_schedule_active.png"
import active_categoryImg from "../image/logo_left_title_meeting_category_active.png"
import active_roomImg from "../image/logo_left_title_meeting_room_active.png"
import active_noteImg from "../image/logo_left_title_meeting_note_active.png"

import { enContentView } from "../enum/ContentViewEnum";
import { ListItem } from "../control/ListItem";
import { useState } from "react"
import { SelectedItemState } from "../type/BaseType"

interface LeftAreaProp{
    className:string;
    callback:React.Dispatch<React.SetStateAction<enContentView>>;
}

export function LeftContainer({className, callback}:LeftAreaProp){
    const [scheduleState, setScheduleState] = useState<boolean>(false);
    const [categoryState, setCategoryState] = useState<boolean>(false);
    const [roomState, setRoomState] = useState<boolean>(false);
    const [noteState, setNoteState] = useState<boolean>(false);

    const itemClickedCallback = (state:SelectedItemState)=>{
        callback(state.Key);
        switch(state.Key){
            case enContentView.MEETING_SCHEDULE : 
                setScheduleState(state.Value);
                setCategoryState(false);
                setRoomState(false);
                setNoteState(false);
                break;
            case enContentView.MEETING_CATEGORY : 
                setCategoryState(state.Value); 
                setScheduleState(false);
                setRoomState(false);
                setNoteState(false);
                break;
            case enContentView.MEETING_ROOM_MANAGE : 
                setRoomState(state.Value); 
                setScheduleState(false);
                setCategoryState(false);
                setNoteState(false);
                break;
            case enContentView.MEETING_NOTE : 
                setNoteState(state.Value); 
                setScheduleState(false);
                setCategoryState(false);
                setRoomState(false);
                break;
        }
    };

    return(
        <div className={className}>
            <ListItem 
                deactive_icon={scheduleImg} 
                active_icon={active_scheduleImg} 
                text="회의 일정" 
                content_type={enContentView.MEETING_SCHEDULE} 
                selected={scheduleState} 
                callback={itemClickedCallback}/>
            <ListItem 
                deactive_icon={categoryImg} 
                active_icon={active_categoryImg} 
                text="회의 분류 관리" 
                content_type={enContentView.MEETING_CATEGORY} 
                selected={categoryState} 
                callback={itemClickedCallback}/>
            <ListItem 
                deactive_icon={roomImg} 
                active_icon={active_roomImg} 
                text="회의실 관리" 
                content_type={enContentView.MEETING_ROOM_MANAGE} 
                callback={itemClickedCallback} 
                selected={roomState}/>
            <ListItem 
                deactive_icon={noteImg} 
                active_icon={active_noteImg} 
                text="회의록 관리" 
                content_type={enContentView.MEETING_NOTE} 
                callback={itemClickedCallback} 
                selected={noteState}/>
        </div>
    );
}