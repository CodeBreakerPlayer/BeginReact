import { useMemo } from "react";
import { ImageButton } from "../control/ImageButton";
import { Table } from "../control/Table";
import contentStyles from "../css/content/content.module.css"
import tableStyles from "../css/control/table/table_room.module.css"

export function RoomManager(){
    const columns = useMemo(
        () => [
          {
            accessor: "meetingroom",
            Header: "회의실",
            minWidth:200,
          },
          {
            accessor: "color",
            Header: "색상",
            minWidth:60,
          },
          {
            accessor: "location",
            Header: "위치",
            minWidth:155,
          },
          {
            accessor: "desc",
            Header: "설 명",
            minWidth:820,
          },
          {
            accessor: "registerdate",
            Header: "등록 일자",
            minWidth:100,
          },
          {
            accessor: "modifydate",
            Header: "최종 수정 일자",
            minWidth:100,
          },
          {
            accessor: "owner",
            Header: "담당자",
            minWidth:60,
          },
        ],
        []
    );

    const data = useMemo(
        () => [
            {
                meetingroom:"소회의실",
                color:"#FFACBA",
                location:"본관 11층",
                desc:"The beta version of Tables.",
                registerdate:"2022.07.15",
                modifydate:"2022.07.15",
                owner:"김철수",
            },
            {
                meetingroom:"대회의실",
                color:"#FFACBA",
                location:"본관 지하 1층",
                desc:"The beta version of Tables.",
                registerdate:"2022.08.15",
                modifydate:"2022.08.15",
                owner:"이철수",
            },
            {
                meetingroom:"세미나실",
                color:"#FFACBA",
                location:"본관 9층",
                desc:"The beta version of Tables.",
                registerdate:"2022.09.15",
                modifydate:"2022.09.15",
                owner:"박철수",
            },
            {
                meetingroom:"100주년 기념관",
                color:"#FFACBA",
                location:"신관 9층",
                desc:"The beta version of Tables.",
                registerdate:"2022.09.15",
                modifydate:"2022.09.15",
                owner:"최철수",
            }
        ], []
    );

    const onClickMenuButton = ()=>{
      alert("Menu!");
    };

    return(
      <div>
        <div className={contentStyles.inlineStyle}>
          <div className={contentStyles.menuIcon} onClick={onClickMenuButton}/>
          <div className={contentStyles.titleText}>회의실 관리</div>          
          <div className={contentStyles.searchBox} style={{marginLeft:'auto'}}>
            <input className={contentStyles.searchTextBox} placeholder="검색어를 입력해주세요"/>            
            <div className={contentStyles.searchButton}/>
          </div>
          <ImageButton text="회의실 추가" onClick={()=>{}}></ImageButton>
          {/*<button className={contentStyles.addButton}>+ 회의실 추가</button>*/}
        </div>
        <Table columns={columns} data={data} style={tableStyles.tableStyle}></Table>
      </div>
    )
}