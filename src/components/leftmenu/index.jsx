import React,{Component} from "react";
import './index.less'
import { Menu, Icon,Avatar,Modal } from 'antd';
import { Link } from 'react-router-dom';
import menuList from '../../config/menuC'
import storageUtils from "../../utils/storageUtils";
import memoryUtils from "../../utils/memoryUtils";
export default class LeftMenu extends Component{
    Logout=()=>{
        Modal.confirm({
            title: 'do you want to login out',
            onOk:()=> {
                console.log('OK',this)
                storageUtils.removeUser();
                memoryUtils.user={};
                this.props.history.replace('/login')
            },
            onCancel(){
            }
        });


    }
 getMenuItem=(menuList)=>{
     return menuList.map(item=>{
         return(
             <Menu.Item key={item.key} style={{height:"90px", lineHeight:"90px"}} >
                 <Link to={item.key}>
                     <Icon type={item.icon} />
                     <span>{item.title}</span>
                 </Link>
             </Menu.Item>
         )

     })
 }
    render() {
        return (
            <div>
                <div className={"Avatardiv"}>
                    <Avatar size={64} icon="user" />
                    <span className={"username"}> User Name </span>
                </div>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                        { /*  <Menu.Item key="1" style={{height:"90px", lineHeight:"90px"}} >
                            <Link to='/home'>
                            <Icon type="home" />
                            <span>Home</span>
                            </Link>
                            </Menu.Item>
                        <Menu.Item key="2" style={{height:"90px",lineHeight:"90px"}}>
                                 <Link to='/rank'>
                            <Icon type="trademark" />
                            <span>Rank</span>
                                  </Link>
                        </Menu.Item>
                        <Menu.Item key="3" style={{height:"90px", lineHeight:"90px"}}>
                            <Link to='/achievement'>
                            <Icon type="trophy" />
                            <span>Achievement</span>
                            </Link>
                        </Menu.Item>
                          */}
                        {
                            this.getMenuItem(menuList)
                        }
                        <Menu.Item key="4" style={{height:"90px", lineHeight:"90px"}} onClick={this.Logout}>
                            <Icon type="export" />
                            <span  >Login out</span>
                        </Menu.Item>
                        <Menu.Item key="5" style={{height:"180px", lineHeight:"90px"}} >
                        </Menu.Item>

                    </Menu>
                </div>

        )
    }
}