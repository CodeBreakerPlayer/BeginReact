import styles from "../css/content/add_schedule.module.css"
import room_icon from "../image/addschedule_room.png"
import attendees_icon from "../image/addschedule_attendees.png"
import date_icon from "../image/addschedule_date.png"
import owner_icon from "../image/addschedule_owner.png"
import public_icon from "../image/addschedule_public.png"
import edit_icon from "../image/addschedule_edit.png"
import delete_icon from "../image/addschedule_delete.png"

interface AddSchduleItemComboProp{
    icon:string;
    title:string;
    data:Array<{key:string, value:string}>;
}
interface AddSchduleItemTextProp{
    icon:string;
    title:string;
    data:string;
}

function AddSchduleItemCombo({icon, title, data}:AddSchduleItemComboProp){
    return(
        <div className={styles.itemFrame}>
            <div className={styles.itemTitle}>
                <img className={styles.itemIcon} src={icon} alt={title}/>
                <label className={styles.itemTitleText}>{title}</label>
            </div>
            <div className={styles.itemContent}>
                <select className={styles.itemCombo}>{data.map((item)=><option key={item.key} value={item.value}>{item.value}</option>)}</select>
            </div>
        </div>
    );
}

function AddSchduleItemText({icon, title, data}:AddSchduleItemTextProp){
    return(
        <div className={styles.itemFrame}>
            <div className={styles.itemTitle}>
                <img className={styles.itemIcon} src={icon} alt={title}/>
                <label className={styles.itemTitleText}>{title}</label>
            </div>
            <label className={`${styles.itemContent} ${styles.itemTitleText}`}>{data}</label>
        </div>
    );
}

function AddSchduleItemInputText({icon, title, data}:AddSchduleItemTextProp){
    return(
        <div className={styles.itemFrame} style={{height:'100px'}}>
            <div className={styles.itemTitle} style={{alignItems:'start', marginTop:'5px'}}>
                <img className={styles.itemIcon} src={icon} alt={title}/>
                <label className={styles.itemTitleText}>{title}</label>
            </div>
            <div className={styles.itemInputText} contentEditable="true">{data}</div>
        </div>
    );
}

export function AddSchdule(){
    return(
        <div className={styles.mainFrame}>
            <div className={styles.labelColorFrame} style={{background:'red'}}></div>
            <div className={styles.contentMainFrame}>
                <header style={{marginLeft:'auto'}}>
                    <img className={styles.imageButton} src={edit_icon} alt="edit"/>
                    <img className={styles.imageButton} src={delete_icon} alt="delete"/>
                </header>
                <select className={styles.combo}>
                    <option key="label" value="라벨 설정">라벨 설정</option>
                </select>
                <input className={styles.labelTitle} placeholder="회의 명을 입력하세요"></input>
                <AddSchduleItemCombo icon={room_icon} title="회의실" data={[{key:"room", value:"소회의실"}]}/>
                <AddSchduleItemText icon={date_icon} title="회의 일시" data="2022.10.7(금)"/>
                <AddSchduleItemText icon={owner_icon} title="주관부서/주관자" data="연구1팀/김철수"/>
                <AddSchduleItemText icon={attendees_icon} title="참석자" data="김철수, 이철수, 박철수, 최철수"/>
                <AddSchduleItemCombo icon={public_icon} title="공개 여부" data={[{key:"public", value:"공개"}, {key:"private", value:"비공개"}]}/>
                <AddSchduleItemInputText icon={edit_icon} title="회의 주제" data=""/>
                <footer style={{marginLeft:'auto', marginTop:'10px', marginBottom:'10px'}}>
                    <button className={styles.buttonWriteNote}>회의록 작성</button>
                    <button className={styles.buttonMeetingStart}>회의 진행</button>
                </footer>
            </div>
        </div>
    );
}