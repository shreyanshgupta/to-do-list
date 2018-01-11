import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Task extends Component {
    render(){
        return (
            <div>
                <Row>
                    <col xs={1}>
                        <div>
                            <p style={{textAlign:'center', fontWeight:'bold', paddingTop:'10px'}}>8
                                <br />
                                <span>AM</span>
                            </p>
                        </div>
                    </col>
                    <col xs={10}>
                        <h4 id="activity-title">Storefoundary Branding</h4>
                        <p>Ideation/Sketch/Wireframing</p>
                    </col>
                    <col xs={1}>
                        <Row style={{paddingTop:'10px'}}>
                            <col xs={6}>
                                <FontAwesome name='times' />
                            </col>
                            <col xs={6}>
                                <FontAwesome name='check' />
                            </col>
                        </Row>
                    </col>
                </Row>
            </div>
        );
    }
}

export default Task;
