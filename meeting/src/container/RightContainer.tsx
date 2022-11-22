import { enContentView } from "../enum/ContentViewEnum";
import { Category } from "../content/Category";
import { Schedule } from "../content/Schedule";
import { RoomManager } from "../content/RoomManager";
import { NoteManager } from "../content/NoteManager";

interface ContentProp{
    className:string;
    type:enContentView;
}

export function RightContainer({className, type}:ContentProp){
    return(
        <div className={className}>
            {
                (()=>{
                    if(type === enContentView.MEETING_SCHEDULE){
                        return <Schedule/>
                    }
                    else if(type === enContentView.MEETING_CATEGORY){
                        return <Category/>
                    }
                    else if(type === enContentView.MEETING_ROOM_MANAGE){
                        return <RoomManager/>
                    }
                    else if(type === enContentView.MEETING_NOTE){
                        return <NoteManager/>
                    }
                })()
            }
        </div>
    );
}