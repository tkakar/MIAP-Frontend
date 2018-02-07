import React, { Component } from 'react'
import Graph from 'react-graph-vis'
import DndTree from '../modules/DndTree'
import {GridList, GridTile} from 'material-ui/GridList';
import { Grid, Row, Col } from 'react-flexbox-grid';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ActionOpenInNew from 'material-ui/svg-icons/action/open-in-new';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import * as _ from 'lodash';
import Report from '../modules/Report'

export default class DndTreeContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			tableData: [],
			tableTitle: ''
		};

		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleOpen(title) {
		axios.get('/csv/reports?drug=' + title)
			.then(response => {
				this.setState({ tableData: response.data })	
			});

		this.setState({
			open: true,
			tableTitle: 'Reports for ' + title
		});
  }

  handleClose() {
    this.setState({open: false});
  }

  getStyleByDMECount(numDMEs) {
	// var colors = ['#AB85FF','#9D5FFF', '#6328BF', '#370E7F', '#170540'];
	var colors = ['#23C5FF','#1C9CCC', '#1670B2', '#1B4BB2', '#132D9D'];
	var style = {
		padding: '20px 0',
		margin: 0,
		color: 'white'
	};
	
	if(numDMEs === 0) {
		style['background'] = colors[0];
	}else if(numDMEs <= 1) {
		style['background'] = colors[1];
	}
	else if(numDMEs <= 2) {
		style['background'] = colors[2];
	}
	else if(numDMEs <= 3) {
		style['background'] = colors[3];
	}
	else {
		style['background'] = colors[4];
	}

	return style;
  }

	render() {
		const colsWidth = this.props.cols == 4 ? 12 : 3;

		const styles = {
			root: {
				overflow: 'auto',
				height: '75vh',
				paddingTop: 75
			},
			title: {
				// textAlign: 'center'
				// height: 30,
				padding: '20px 0',
				background: 'black',
				margin: 0,
				color: 'white'
			},
			titleText: {
				position: 'relative',
				left: 10
			},
			row: {
				margin: '0 20px'
			},
			cols: {
				marginBottom: 30
			},
			cardButtons: {
				position: 'relative',
				top: -15
			}
		};

		const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />
    ];

		return (
			<div>
				<Grid fluid style={styles.root}>
					<Row style={styles.row}>
						{
							this.props.currentDrugs.map(drug => (
								<Col lg={colsWidth} md={colsWidth} style={styles.cols} key={drug[0]}>
									<div className="card" key={drug[0]} style={{
											height: 300,
											border: this.props.selectedDrug == drug[0] ? '3px solid #29ACBF' : '3px solid grey'
										}}
									>
										<h5 className="card-title" style={drug[1].drugDMEs == undefined ? styles.title : this.getStyleByDMECount(drug[1].drugDMEs.length)}>
											<span style={styles.titleText}>{_.capitalize(drug[0])}</span>
											<span className="pull-right" style={styles.cardButtons}>

												<IconButton tooltip="Show Profile"
													iconStyle={{ color: 'white' }}
													onClick={() => this.props.onClickNode(drug[0])}	
												>
													<ActionOpenInNew />
												</IconButton>

												<IconButton tooltip="Show Reports"
													iconStyle={{ color: 'white' }}
													onClick={() => {this.handleOpen(drug[0])}}

													// onClick={() => onClickNode(drug[0])}	
												>
													<EditorInsertChart />
												</IconButton>

												<IconButton tooltip="Close Window"
													iconStyle={{ color: 'white' }}
													onClick={() => this.props.onDeleteNode(drug[0])}	
												>
													<NavigationClose />
												</IconButton>
											</span>
										</h5>	
										<div className="card-body" style={{ position: 'relative', top: -13 }}>
											<DndTree currentDrug={drug[0]} data={drug[1]} filter={this.props.filter} minScore={this.props.minScore} maxScore={this.props.maxScore} />
										</div>
									</div>
								</Col>
							))
						}
					</Row>
				</Grid>
				<Report 
					tableTitle={this.state.tableTitle}
					open={this.state.open}
					handleClose={this.state.handleClose}
					actions={actions}
					tableData={this.state.tableData}
				/>
			</div>
		)

	}
}