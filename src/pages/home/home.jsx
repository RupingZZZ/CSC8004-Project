import React, {Component} from "react";
import './home.less'
import {Avatar, Modal} from "antd";
import {Slider} from 'antd';
import {Button} from 'antd';
import LinkButton from "../../components/link-button";


function onChange(value) {
    console.log('onChange: ', value);
}

function onAfterChange(value) {
    console.log('onAfterChange: ', value);
}

export default class Home extends Component {
    render() {

        return (
            <div className={"box"}>
                {/* 个人成绩*/}
                <div className={"goal"}>
                    <div className={"goal-top"}>
                        <Avatar size="large" icon="user"/>
                        <span className={"username"}> User Name </span>
                        <span className={"set"}>
                            <LinkButton>set</LinkButton>
                        </span>
                    </div>
                    <div className={"goal-content"}>
                        <span className={"Goal"}>Goal</span>
                        <span>points</span>
                        <div>
                            <Slider defaultValue={30} onChange={onChange} onAfterChange={onAfterChange}/>
                        </div>
                    </div>
                </div>
                <div className={"journey"}>
                    <div className={"journey-top"}>
                        <span>Journey Tracker</span>
                        <span className={"set1"}>
                            <LinkButton>set</LinkButton>
                        </span>
                    </div>

                    <div className={"journey-middle"}>
                        <span>Distance</span>
                        <span className={"parameter"}>---</span>
                        <span>meters</span>
                        <span className={"tool"}>Private car</span>
                        <div className={"journey-button"}>
                            <div className={"journey-button1"}>
                                <Button type="primary" >Start</Button>
                            </div>
                            <div className={"journey-button2"}>
                                <Button type="primary">Detail</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"recycle"}>Gabage Recycle</div>


            </div>
        )
    }
}