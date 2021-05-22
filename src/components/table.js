import React from 'react'
import {Table} from 'antd'
import 'antd/dist/antd.css';


class Tables extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data:[
                {
                  key:1,
                  team: 'DELHI CAPITALS' ,
                  team_logo:'https://ssl.gstatic.com/onebox/media/sports/logos/TjudW-BaNE2HcD_6cOWC7Q_48x48.png',
                  matches:8,
                  won:6,
                  lost:2,
                  nrr:'+0.547',
                  pts:12,
                },
                {
                  key:2,
                  team: 'CHENNAI SUPER KINGS' ,
                  team_logo:"https://ssl.gstatic.com/onebox/media/sports/logos/exZiFUT_GXScTyr358t7SQ_48x48.png",
                  matches:7,
                  won:5,
                  lost:2,
                  nrr:'+1.263',
                  pts:10
                },
                {
                  key:3,
                  team: 'ROYAL CHALLENGERS BANGALORE' ,
                  team_logo:"https://ssl.gstatic.com/onebox/media/sports/logos/f958HPOsI1ugsHmwc4piCw_48x48.png",
                  matches:7,
                  won:5,
                  lost:2,
                  nrr:'-0.171',
                  pts:10
                },
                {
                  key:4,
                  team: 'MUMBAI INDIANS' ,
                  team_logo:"https://ssl.gstatic.com/onebox/media/sports/logos/JTre94vh6WJeLmIL-Dfc1g_48x48.png",
                  matches:7,
                  won:4,
                  lost:3,
                  nrr:'+0.062',
                  pts:8
                },
                {
                  key:5,
                  team: 'RAJASTHAN ROYALS' ,
                  team_logo:"https://ssl.gstatic.com/onebox/media/sports/logos/turpQqyPRIMvuksLiSDSjQ_48x48.png",
                  matches:7,
                  won:3,
                  lost:4,
                  nrr:'-0.190',
                  pts:6
                },
                {
                  key:6,
                  team: 'PUNJAB KINGS' ,
                  team_logo:"https://ssl.gstatic.com/onebox/media/sports/logos/HxbhoKfAgDZogey6S9E4bA_48x48.png",
                  matches:8,
                  won:3,
                  lost:5,
                  nrr:'-0.368',
                  pts:6
                },
                {
                  key:7,
                  team: 'KOLKATA KNIGHT RIDERS' ,
                  team_logo:"https://ssl.gstatic.com/onebox/media/sports/logos/kkwGQB9t8WtGPx9WuiBGOw_48x48.png",
                  matches:7,
                  won:2,
                  lost:5,
                  nrr:'-0.494',
                  pts:4
                },
                {
                  key:8,
                  team: 'SUN RISERS HYDERABAD' ,
                  team_logo:"https://ssl.gstatic.com/onebox/media/sports/logos/G9q07ZXPVbPkXOagStz3Yw_48x48.png",
                  matches:7,
                  won:1,
                  lost:6,
                  nrr:'-0.623',
                  pts:2
                }
              ],
            
              columns:[
                {
                  title:<div ><b>TEAM</b></div>,
                  dataIndex:'team',
                  key:'key',
                  render:(text,team)=>{
                      return <div><img src={team.team_logo} style={{marginRight:"5px"}} /><b>{team.team}</b></div>
                  }
                  
                },
                {
                  title:<div ><b>MATCHES</b></div>,
                  dataIndex:'matches',
                  key:'key',
                  render:(text)=>{
                      return <b>{text}</b>
                  }
                },
                {
                  title:<div ><b>WON</b></div>,
                  dataIndex:'won',
                  key:'key',
                  render:(text)=>{
                    return <b>{text}</b>
                  }
                },
                {
                  title:<div ><b>LOST</b></div>,
                  dataIndex:'lost',
                  key:'key',
                  render:(text)=>{
                    return <b>{text}</b>
                  }
                },
                {
                  title:<div><b>NET RUN RATE</b></div>,
                  dataIndex:'nrr',
                  key:'key',
                  render:(text)=>{
                    return <b>{text}</b>
                  }
                },
                {
                  title:<div><b>POINTS</b></div>,
                  dataIndex:'pts',
                  key:'key',
                  sorter: (a, b) => a.pts - b.pts,
                  render:(text)=>{
                    return <b>{text}</b>
                  }
                }
              ]
        }
    }

    
    
    render(){
        const {columns,data}=this.state;
        return(
            <Table 
                columns={columns}
                dataSource={data}
                pagination={false}
                // title={<h1><b><i>IPL2021</i></b></h1>}
            />
        )
    }
}

export default Tables