import { useMemo } from "react";
import { ImageButton } from "../control/ImageButton";
import { Table } from "../control/Table";
import contentStyles from "../css/content/content.module.css"
import tableStyles from "../css/control/table/table_category.module.css"

export function Category(){
    const columns = useMemo(
        () => [
          {
            accessor: "name",
            Header: "분류 이름",
            minWidth:200,
          },
          {
            accessor: "color",
            Header: "색상",
            minWidth:60,
          },
          {
            accessor: "public",
            Header: "공개 여부",
            minWidth:60,
          },
          {
            accessor: "desc",
            Header: "설 명",
            minWidth:822,
          },
          {
            accessor: "usecount",
            Header: "회의 수",
            minWidth:70,
            Cell:({value}:{value:any}) => <label>{value} 회</label>,
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
            Header: "등록자",
            minWidth:60,
          },
        ],
        []
    );

    const data = useMemo(
        () => [
            {
              name:"경영진 주간 회의1",
              color:"#FFACBA",
              public:"전체 공개",
              desc:"The beta version of Tables.",
              usecount:"187",
              registerdate:"2022.07.15",
              modifydate:"2022.09.15",
              owner:"김철수",
            },
            {
              name:"경영진 주간 회의2",
              color:"#FFACBC",
              public:"전체 공개",
              desc:"The beta version of Tables will continue to be available until we release.",
              usecount:"87",
              registerdate:"2022.07.18",
              modifydate:"2022.09.19",
              owner:"이철수",
            },
            {
              name:"경영진 주간 회의3",
              color:"#FFACBA",
              public:"전체 공개",
              desc:"Aggregate data from many sources into your team’s workspace. Spend less time context switching, and increase visibility across the software and services you rely on.",
              usecount:"7",
              registerdate:"2022.07.15",
              modifydate:"2022.09.15",
              owner:"박철수",
          },
          {
              name:"경영진 주간 회의4",
              color:"#FFACBC",
              public:"전체 공개",
              desc:"The beta version of Tables will continue to be available until we release a fully-supported Google Cloud product.",
              usecount:"1187",
              registerdate:"2022.07.18",
              modifydate:"2022.09.19",
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
          <div className={contentStyles.titleText}>회의 분류 관리</div>          
          <div className={contentStyles.searchBox} style={{marginLeft:'auto'}}>
            <input className={contentStyles.searchTextBox} placeholder="검색어를 입력해주세요"/>            
            <div className={contentStyles.searchButton}/>
          </div>
          <ImageButton text="분류 추가" onClick={()=>{}}></ImageButton>
          {/*<button className={contentStyles.addButton}>+ 분류 추가</button>*/}
        </div>
        <Table columns={columns} data={data} style={tableStyles.tableStyle}></Table>
      </div>
    )
}