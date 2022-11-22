import { useMemo } from "react";
import { ImageButton } from "../control/ImageButton";
import { Table } from "../control/Table";
import { ToggleButton } from "../control/ToggleButton";
import contentStyles from "../css/content/content.module.css"
import tableStyles from "../css/control/table/table_schedule.module.css"
import { AddSchdule } from "./AddSchedule";

export function Schedule(){
    const columns = useMemo(
        () => [
          {
            accessor: "meetingname",
            Header: "회의명",
            minWidth:200,
          },
          {
            accessor: "meetingdate",
            Header: "회의 일자",
            minWidth:100,
          },
          {
            accessor: "meetingtime",
            Header: "회의 시간",
            minWidth:100,
          },
          {
            accessor: "meetingroom",
            Header: "회의실",
            minWidth:150,
          },
          {
            accessor: "supervisor",
            Header: "주관자",
            minWidth:60,
          },
          {
            accessor: "attendancelist",
            Header: "참석자",
            minWidth:300,
          },
          {
            accessor: "meetingsubject",
            Header: "회의 주제",
            minWidth:418,
          },
          {
            accessor: "progress",
            Header: "진행 여부",
            minWidth:60,
          },
          {
            accessor: "meetingnote",
            Header: "회의록",
            minWidth:60,
          },
        ],
        []
    );

    const data = useMemo(
        () => [
            {
                meetingname:"주간 업무 회의",
                meetingroom:"세미나실",
                meetingdate:"2022.07.15",
                meetingtime:"13:30 ~ 15:00",
                supervisor:"최철수",
                attendancelist:"이철수, 김철수, 최철수",
                meetingsubject:"7월 2주차 주간 업무 보고",
                progress:"진행중",
                meetingnote:"보기",
            },
            {
                meetingname:"신제품 보고회",
                meetingroom:"대회의실",
                meetingdate:"2022.08.15",
                meetingtime:"13:30 ~ 15:00",
                supervisor:"이철수",
                attendancelist:"전사",
                meetingsubject:"연구 1팀 신제품 발표",
                progress:"대기중",
                meetingnote:"보기",
            }
            
        ], []
    );

    const onClickMenuButton = ()=>{
      alert("Menu!");
    };

    const onClickAddButton = () =>{
      return(
        <AddSchdule></AddSchdule>
      );
    };

    const combo = ["회의명", "회의 일자", "회의 시간", "회의실", "주관자", "참석자", "회의 주제"];

    return(
      <div>
        <div className={contentStyles.inlineStyle}>
          <div className={contentStyles.menuIcon} onClick={onClickMenuButton}/>
          <div className={contentStyles.titleText} style={{marginRight:'70px'}}>회의 일정</div>     
          <div className={contentStyles.selectDateBox}>
            <select className={contentStyles.combo} style={{minWidth:'60px'}}>
              <option key="type" value="일정">일정</option>
            </select>
          </div>
          <ToggleButton id="my_meeting" text="내 회의만 보기" style={{marginLeft:'auto'}}/>
          <div className={contentStyles.searchBox} style={{width:'310px', marginLeft:'24px'}}>
            <select className={contentStyles.combo}>
                { combo.map((value) => <option key={value} value={value}>{value}</option>) }
            </select>
            <input className={contentStyles.searchTextBox} placeholder="검색어를 입력해주세요"/>            
            <div className={contentStyles.searchButton}/>
          </div>
          <ImageButton text="회의 추가" onClick={onClickAddButton}></ImageButton>
          {/*<button className={contentStyles.addButton}>+ 회의 추가</button>*/}
        </div>
        <Table columns={columns} data={data} style={tableStyles.tableStyle}></Table>
      </div>
    )
}