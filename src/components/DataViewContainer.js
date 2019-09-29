import React, { Component } from 'react'

import ShotChart from './ShotChart'

import CountSlider from './CountSlider'
import _ from 'lodash'

export default class DataViewContainer extends Component {
	state = {
		minCount: 2,
		chartType: 'hexbin',
		displayTooltip: true
	}

	onCountSliderChange = count => {
		this.setState({ minCount: count })
		console.log(count)
	}
	render() {
		return (
			<div className='data-view'>
				<ShotChart
					playerId={this.props.playerId}
					minCount={this.state.minCount}
					chartType={this.state.chartType}
					displayTooltip={this.state.displayTooltip}
				/>
				<div className='filters'>
					<CountSlider
						value={this.state.minCount}
						onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}
					/>
				</div>
			</div>
		)
	}
}
