import React,{Component} from "react";
import {Table, Tag, Icon, Avatar} from 'antd';
import "./rank.less"
import {
ArrowLeftOutlined
} from '@ant-design/icons';



export default class Rank extends Component{
    render() {
        const dataSource = [
            {
                key: '1',
                rank: '1',
                name: "li hua",
                score: 1500,
            },
            {
                key: '2',
                rank: '2',
                name: "zhang san",
                score: 1200,
            },
            {
                key: '3',
                rank: '3',
                name: "hua hua",
                score: 1100,
            },
            {
                key: '4',
                rank: '4',
                name: "lie lei",
                score: 1000,
            },
            {
                key: '5',
                rank: '4',
                name: "lie lei",
                score: 1000,
            },
            {
                key: '6',
                rank: '4',
                name: "lie lei",
                score: 1000,
            },
            {
                key: '7',
                rank: '4',
                name: "lie lei",
                score: 1000,
            },
        ];

        const columns = [
            {
                title: 'rank',
                dataIndex: 'rank',
                key: 'rank',
            },
            {
                title: 'name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'score',
                dataIndex: 'score',
                key: 'score',
            },
        ];

        return(
            <div>
                <div className={"rank-top"}>
                    <ArrowLeftOutlined />
                    <div className={"username"}>User name</div>
                </div>
                <div className={"rank-middle"}>
                    <span className={"num"}>2nd</span>
                    <Avatar size={64} icon="user" />
                </div>
                <div>
                    <Table dataSource={dataSource} columns={columns}  />
                </div>
            </div>



        )
    }
}